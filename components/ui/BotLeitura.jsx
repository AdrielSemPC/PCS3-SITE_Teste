"use client";
import { useState, useEffect } from "react";

export default function BotLeitura() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [suporte, setSuporte] = useState(true);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSuporte(false);
      return;
    }

    // Força o navegador a acordar e carregar as vozes em segundo plano
    window.speechSynthesis.getVoices();

    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getTextoParaLer = () => {
    const elementoPrincipal = document.querySelector("main");
    return elementoPrincipal
      ? elementoPrincipal.innerText
      : document.body.innerText;
  };

  const iniciarLeitura = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    const texto = getTextoParaLer();
    if (!texto) return;

    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.rate = 0.9; // Velocidade boa para idosos
    utterance.pitch = 1.0;
    utterance.lang = "pt-BR"; // Fallback padrão

    // Busca as vozes no exato momento do clique, garantindo que já carregaram
    const vozesDisponiveis = window.speechSynthesis.getVoices();

    if (vozesDisponiveis.length > 0) {
      // Procura agressivamente por vozes do Brasil ignorando letras maiúsculas/minúsculas
      const vozPTBR = vozesDisponiveis.find(
        (voz) =>
          voz.lang.toLowerCase().includes("pt-br") ||
          voz.lang.toLowerCase().includes("pt_br") ||
          voz.name.toLowerCase().includes("brasil") ||
          voz.name.toLowerCase().includes("brazil"),
      );

      if (vozPTBR) {
        utterance.voice = vozPTBR;
        utterance.lang = vozPTBR.lang; // Sincroniza o idioma com a voz exata encontrada
      } else {
        // Se não achar BR de jeito nenhum, pega qualquer uma em português (ex: Portugal)
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
      setIsSpeaking(false);
      setIsPaused(false);
    };

    // Previne bugs no Chrome cancelando falas anteriores antes de começar a nova
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    setIsSpeaking(true);
    setIsPaused(false);
  };

  const pausarLeitura = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsSpeaking(false);
  };

  const pararLeitura = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!suporte) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white p-4 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] border-2 border-blue-600 flex flex-col gap-3 z-50 w-72">
      <p className="text-base font-bold text-center text-gray-800">
        Assistente de Leitura
      </p>
      <div className="flex gap-2">
        {!isSpeaking ? (
          <button
            onClick={iniciarLeitura}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors"
            aria-label="Ouvir o texto da página"
          >
            ▶️ Ouvir
          </button>
        ) : (
          <button
            onClick={pausarLeitura}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors"
            aria-label="Pausar leitura"
          >
            ⏸️ Pausar
          </button>
        )}
        <button
          onClick={pararLeitura}
          disabled={!isSpeaking && !isPaused}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 text-white p-3 rounded-xl font-bold flex-1 text-lg transition-colors"
          aria-label="Parar leitura"
        >
          ⏹️ Parar
        </button>
      </div>
    </div>
  );
}
