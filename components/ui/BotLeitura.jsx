"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function BotLeitura() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [suporte, setSuporte] = useState(true);
  const pathname = usePathname();
  const keepAliveTimerRef = useRef(null);

  const rotasPermitidas = ["/golpes", "/regra-tripla", "/ajuda"];
  const deveExibir = rotasPermitidas.some((rota) => pathname?.startsWith(rota));

  const stopKeepAlive = () => {
    if (keepAliveTimerRef.current) {
      clearInterval(keepAliveTimerRef.current);
      keepAliveTimerRef.current = null;
    }
  };

  const startKeepAlive = () => {
    stopKeepAlive();
    keepAliveTimerRef.current = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window &&
        window.speechSynthesis.speaking &&
        !window.speechSynthesis.paused
      ) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);
  };

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSuporte(false);
      return;
    }

    // Força o navegador a acordar e carregar as vozes em segundo plano
    window.speechSynthesis.getVoices();

    return () => {
      stopKeepAlive();
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Para a leitura automaticamente se o usuário mudar de rota/página
  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      stopKeepAlive();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [pathname]);

  const limparSimbolos = (str) => {
    return str
      // Remove símbolos gráficos e decorativos que causam leitura estranha
      .replace(/[✓✔♥❤★☆←→↑↓▶⏸⏹►▪●•\u200B-\u200D\uFEFF]/g, "")
      // Substitui barras verticais decorativas por vírgulas para som fluido
      .replace(/\|/g, ", ")
      // Remove emojis gráficos em geral
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

      // Ignora fragmentos que não contenham letras ou números
      if (!/[a-zA-Z0-9À-ÿ]/.test(linha)) continue;

      // Garante uma pontuação ao final de cada bloco de texto para
      // que o sintetizador faça uma pausa natural entre títulos e parágrafos
      const terminaComPontuacao = /[.!?:;,—–-]$/.test(linha);
      const linhaComPontuacao = terminaComPontuacao ? linha : `${linha}.`;
      sentencas.push(linhaComPontuacao);
    }

    return sentencas.join(" ");
  };

  const getTextoParaLer = () => {
    const elementoPrincipal = document.querySelector("main") || document.body;
    if (!elementoPrincipal) return "";

    // Clona o conteúdo para filtrar sem alterar o DOM visível
    const clone = elementoPrincipal.cloneNode(true);

    // Seletores de elementos que NÃO devem ser lidos:
    // - Botões e links (ações, navegação de voltar, ver golpes, etc.)
    // - Formulários (avaliações, inputs, caixas de texto)
    // - Cabeçalhos/rodapés de navegação
    // - Imagens, ícones SVG e elementos marcados para ignorar
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

    // Converte quebras de linha manuais <br> em espaço para evitar cortes no meio de frases
    clone.querySelectorAll("br").forEach((br) => {
      br.replaceWith(" ");
    });

    // Anexa temporariamente no DOM de forma invisível para que innerText calcule
    // corretamente as quebras de linha entre blocos sem exibir nada na tela
    const containerTemporario = document.createElement("div");
    containerTemporario.setAttribute("aria-hidden", "true");
    containerTemporario.style.cssText =
      "position:absolute;left:-9999px;top:-9999px;width:1000px;opacity:0;pointer-events:none;";
    containerTemporario.appendChild(clone);
    document.body.appendChild(containerTemporario);

    const textoBruto = clone.innerText || clone.textContent || "";
    containerTemporario.remove();

    return formatarTextoParaVoz(textoBruto);
  };

  const iniciarLeitura = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      startKeepAlive();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    const texto = getTextoParaLer();
    if (!texto) return;

    window.speechSynthesis.cancel();
    stopKeepAlive();

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.rate = 0.9; // Velocidade confortável para pessoas idosas
    utterance.pitch = 1.0;
    utterance.lang = "pt-BR"; // Fallback padrão

    // Busca as vozes no exato momento do clique, garantindo que já carregaram
    const vozesDisponiveis = window.speechSynthesis.getVoices();

    if (vozesDisponiveis.length > 0) {
      // Procura por vozes do Brasil
      const vozPTBR = vozesDisponiveis.find(
        (voz) =>
          voz.lang.toLowerCase().includes("pt-br") ||
          voz.lang.toLowerCase().includes("pt_br") ||
          voz.name.toLowerCase().includes("brasil") ||
          voz.name.toLowerCase().includes("brazil"),
      );

      if (vozPTBR) {
        utterance.voice = vozPTBR;
        utterance.lang = vozPTBR.lang;
      } else {
        const vozPT = vozesDisponiveis.find((voz) =>
          voz.lang.toLowerCase().includes("pt"),
        );
        if (vozPT) {
          utterance.voice = vozPT;
          utterance.lang = vozPT.lang;
        }
      }
    }

    utterance.onend = () => {
      stopKeepAlive();
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      stopKeepAlive();
      if (e.error !== "interrupted" && e.error !== "canceled") {
        console.error("Erro na leitura de voz:", e);
      }
      setIsSpeaking(false);
      setIsPaused(false);
    };

    startKeepAlive();
    window.speechSynthesis.speak(utterance);

    setIsSpeaking(true);
    setIsPaused(false);
  };

  const pausarLeitura = () => {
    window.speechSynthesis.pause();
    stopKeepAlive();
    setIsPaused(true);
    setIsSpeaking(false);
  };

  const pararLeitura = () => {
    stopKeepAlive();
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!suporte || !deveExibir) return null;

  return (
    <div
      data-leitura-ignorar="true"
      aria-hidden="true"
      className="fixed bottom-6 right-6 bg-white p-4 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] border-2 border-blue-600 flex flex-col gap-3 z-50 w-72"
    >
      <p className="text-base font-bold text-center text-gray-800">
        Assistente de Leitura
      </p>
      <div className="flex gap-2">
        {!isSpeaking ? (
          <button
            onClick={iniciarLeitura}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors cursor-pointer"
            aria-label="Ouvir o conteúdo importante da página"
          >
            ▶️ Ouvir
          </button>
        ) : (
          <button
            onClick={pausarLeitura}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors cursor-pointer"
            aria-label="Pausar leitura"
          >
            ⏸️ Pausar
          </button>
        )}
        <button
          onClick={pararLeitura}
          disabled={!isSpeaking && !isPaused}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
          aria-label="Parar leitura"
        >
          ⏹️ Parar
        </button>
      </div>
    </div>
  );
}
