"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BotLeitura() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [suporte, setSuporte] = useState(true);
  const pathname = usePathname();

  const rotasPermitidas = ["/golpes", "/regra-tripla", "/ajuda"];
  const deveExibir = rotasPermitidas.some((rota) => pathname?.startsWith(rota));

  const chunksRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isSpeakingRef = useRef(false);
  const isPausedRef = useRef(false);
  const utteranceRef = useRef(null);

  const obterVozPTBR = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
    const vozes = window.speechSynthesis.getVoices();
    if (!vozes || vozes.length === 0) return null;

    return (
      vozes.find((v) => v.lang && /^(pt[-_]br)$/i.test(v.lang)) ||
      vozes.find((v) => v.lang && v.lang.toLowerCase().startsWith("pt-br")) ||
      vozes.find(
        (v) =>
          v.name &&
          (v.name.toLowerCase().includes("brasil") ||
            v.name.toLowerCase().includes("brazil"))
      ) ||
      vozes.find((v) => v.lang && v.lang.toLowerCase().startsWith("pt")) ||
      null
    );
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSuporte(false);
      return;
    }

    const carregarVozes = () => {
      window.speechSynthesis.getVoices();
    };

    carregarVozes();
    window.speechSynthesis.addEventListener("voiceschanged", carregarVozes);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", carregarVozes);
      pararLeitura();
    };
  }, []);

  useEffect(() => {
    pararLeitura();
  }, [pathname]);

  const limparSimbolos = (str) => {
    return str
      .replace(/[✓✔♥❤★☆←→↑↓▶⏸⏹►▪●•\u200B-\u200D\uFEFF]/g, "")
      .replace(/\|/g, ", ")
      .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "");
  };

  const formatarTextoParaVoz = (textoBruto) => {
    if (!textoBruto) return "";

    const textoLimpo = limparSimbolos(textoBruto);
    const linhas = textoLimpo.split(/\r?\n/);
    const sentencas = [];

    for (let linha of linhas) {
      linha = linha.trim().replace(/\s+/g, " ");
      if (!linha) continue;

      if (!/[a-zA-Z0-9À-ÿ]/.test(linha)) continue;

      const terminaComPontuacao = /[.!?:;,—–-]$/.test(linha);
      const linhaComPontuacao = terminaComPontuacao ? linha : `${linha}.`;
      sentencas.push(linhaComPontuacao);
    }

    return sentencas.join(" ");
  };

  const dividirTextoEmChunks = (textoFormatado, maxLen = 140) => {
    if (!textoFormatado) return [];

    const sentencasBrutas =
      textoFormatado.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) || [textoFormatado];
    const chunks = [];

    for (let sentenca of sentencasBrutas) {
      sentenca = sentenca.trim();
      if (!sentenca) continue;

      if (sentenca.length <= maxLen) {
        chunks.push(sentenca);
      } else {
        const subPartes = sentenca.split(/([,;:]\s+)/);
        let chunkAtual = "";

        for (let i = 0; i < subPartes.length; i++) {
          const parte = subPartes[i];
          if ((chunkAtual + parte).length <= maxLen) {
            chunkAtual += parte;
          } else {
            if (chunkAtual.trim()) chunks.push(chunkAtual.trim());
            if (parte.length > maxLen) {
              const palavras = parte.split(/\s+/);
              let palavraChunk = "";
              for (const palavra of palavras) {
                if ((palavraChunk + " " + palavra).length <= maxLen) {
                  palavraChunk += (palavraChunk ? " " : "") + palavra;
                } else {
                  if (palavraChunk.trim()) chunks.push(palavraChunk.trim());
                  palavraChunk = palavra;
                }
              }
              chunkAtual = palavraChunk;
            } else {
              chunkAtual = parte;
            }
          }
        }
        if (chunkAtual.trim()) {
          chunks.push(chunkAtual.trim());
        }
      }
    }

    return chunks.filter((c) => c && c.trim().length > 0);
  };

  // --- FUNÇÃO ADAPTADA PARA LER SELEÇÃO DE TEXTO ---
  const getTextoParaLer = () => {
    if (typeof window === "undefined") return "";

    // 1. Tenta pegar a seleção ativa do usuário
    const selecao = window.getSelection()?.toString().trim();

    if (selecao) {
      return formatarTextoParaVoz(selecao);
    }

    // 2. Fallback: Se NADA estiver selecionado, lê o conteúdo da página normalmente
    const elementoPrincipal = document.querySelector("main") || document.body;
    if (!elementoPrincipal) return "";

    const clone = elementoPrincipal.cloneNode(true);

    const seletoresParaIgnorar = [
      "button",
      "a",
      "form",
      "input",
      "textarea",
      "select",
      "option",
      "nav",
      "header",
      "footer",
      "svg",
      "img",
      "audio",
      "video",
      "iframe",
      "script",
      "style",
      "noscript",
      "[role='button']",
      "[role='link']",
      "[data-leitura-ignorar]",
      "[aria-hidden='true']",
      "[hidden]",
      ".leitura-ignorar",
    ];

    clone.querySelectorAll(seletoresParaIgnorar.join(", ")).forEach((el) => {
      el.remove();
    });

    const tagsDeBloco = [
      "p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "article", "section", "div"
    ];
    clone.querySelectorAll(tagsDeBloco.join(", ")).forEach((el) => {
      el.append(" \n");
    });

    clone.querySelectorAll("br").forEach((br) => {
      br.replaceWith(" \n");
    });

    const textoBruto = clone.textContent || "";
    return formatarTextoParaVoz(textoBruto);
  };

  const tocarChunk = (index) => {
    if (
      !isSpeakingRef.current ||
      isPausedRef.current ||
      index >= chunksRef.current.length
    ) {
      if (index >= chunksRef.current.length) {
        pararLeitura();
      }
      return;
    }

    currentIndexRef.current = index;
    const chunkTexto = chunksRef.current[index];
    if (!chunkTexto) {
      tocarChunk(index + 1);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunkTexto);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.lang = "pt-BR";

    const voz = obterVozPTBR();
    if (voz) {
      utterance.voice = voz;
      utterance.lang = voz.lang;
    }

    utterance.onend = () => {
      if (isSpeakingRef.current && !isPausedRef.current) {
        setTimeout(() => {
          tocarChunk(index + 1);
        }, 30);
      }
    };

    utterance.onerror = (e) => {
      if (e.error === "interrupted" || e.error === "canceled") {
        return;
      }
      console.warn("Aviso na leitura do bloco:", e);
      if (isSpeakingRef.current && !isPausedRef.current) {
        setTimeout(() => {
          tocarChunk(index + 1);
        }, 50);
      }
    };

    utteranceRef.current = utterance;
    if (typeof window !== "undefined") {
      window.__speechUtterance = utterance;
    }

    window.speechSynthesis.speak(utterance);
  };

  const iniciarLeitura = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (isPaused) {
      isPausedRef.current = false;
      isSpeakingRef.current = true;
      setIsPaused(false);
      setIsSpeaking(true);
      tocarChunk(currentIndexRef.current);
      return;
    }

    const textoFormatado = getTextoParaLer();
    if (!textoFormatado) return;

    const chunks = dividirTextoEmChunks(textoFormatado);
    if (chunks.length === 0) return;

    window.speechSynthesis.cancel();

    chunksRef.current = chunks;
    currentIndexRef.current = 0;
    isPausedRef.current = false;
    isSpeakingRef.current = true;

    setIsSpeaking(true);
    setIsPaused(false);

    tocarChunk(0);
  };

  const pausarLeitura = () => {
    isPausedRef.current = true;
    isSpeakingRef.current = false;
    setIsPaused(true);
    setIsSpeaking(false);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const pararLeitura = () => {
    isSpeakingRef.current = false;
    isPausedRef.current = false;
    currentIndexRef.current = 0;
    chunksRef.current = [];

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!suporte || !deveExibir) return null;

  return (
    <div
      data-leitura-ignorar="true"
      aria-hidden="true"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] border-2 border-blue-600 flex flex-col gap-2.5 sm:gap-3 z-50 w-72 max-w-[calc(100vw-2rem)]"
    >
      <p className="text-base font-bold text-center text-gray-800">
        Assistente de Leitura
      </p>
      <div className="flex gap-2">
        {!isSpeaking ? (
          <button
            onClick={iniciarLeitura}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-bold flex-1 text-base sm:text-lg transition-colors cursor-pointer"
            aria-label={isPaused ? "Continuar leitura" : "Ouvir o conteúdo da página ou texto selecionado"}
          >
            {isPaused ? "▶️ Continuar" : "▶️ Ouvir"}
          </button>
        ) : (
          <button
            onClick={pausarLeitura}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl font-bold flex-1 text-base sm:text-lg transition-colors cursor-pointer"
            aria-label="Pausar leitura"
          >
            ⏸️ Pausar
          </button>
        )}
        <button
          onClick={pararLeitura}
          disabled={!isSpeaking && !isPaused}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 text-white p-3 rounded-xl font-bold flex-1 text-base sm:text-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
          aria-label="Parar leitura"
        >
          ⏹️ Parar
        </button>
      </div>
    </div>
  );
}
