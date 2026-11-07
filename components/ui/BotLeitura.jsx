"use client";
import { useState, useEffect } from "react";

export default function BotLeitura() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [suporte, setSuporte] = useState(true);
  const [vozes, setVozes] = useState([]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSuporte(false);
      return;
    }

    // Função para carregar as vozes do navegador
    const carregarVozes = () => {
      setVozes(window.speechSynthesis.getVoices());
    };

    // Carrega as vozes imediatamente
    carregarVozes();

    // O Google Chrome carrega as vozes de forma assíncrona, então precisamos deste evento
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = carregarVozes;
    }

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
    utterance.lang = "pt-BR";
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    // Força a seleção de uma voz brasileira
    if (vozes.length > 0) {
      // Procura primeiro pelo português do Brasil
      const vozPTBR = vozes.find(
        (voz) =>
          voz.lang === "pt-BR" ||
          voz.lang === "pt_BR" ||
          voz.lang.includes("pt-BR"),
      );

      if (vozPTBR) {
        utterance.voice = vozPTBR;
      } else {
        // Se não achar BR, pega a primeira em português (ex: Portugal)
        const vozPT = vozes.find((voz) => voz.lang.includes("pt"));
        if (vozPT) utterance.voice = vozPT;
      }
    }

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

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
