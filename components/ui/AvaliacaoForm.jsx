"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AvaliacaoForm() {
  const [nota, setNota] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState({ tipo: "", texto: "" });
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nota === 0) {
      setStatus({
        tipo: "erro",
        texto: "Por favor, selecione uma nota de 1 a 5 estrelas.",
      });
      return;
    }

    setEnviando(true);
    setStatus({ tipo: "", texto: "" });

    const { error } = await supabase
      .from("avaliacoes")
      .insert([{ nota, mensagem }]);

    if (error) {
      console.error(error);
      setStatus({
        tipo: "erro",
        texto: "Ocorreu um erro ao enviar. Tente novamente.",
      });
    } else {
      setStatus({
        tipo: "sucesso",
        texto: "Avaliação enviada com sucesso! Obrigado.",
      });
      setNota(0);
      setMensagem("");
    }

    setEnviando(false);
  };

  return (
    <form
      data-leitura-ignorar="true"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md border border-gray-100"
    >
      <h3 className="text-xl font-bold text-gray-800">Avalie o Site</h3>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Nota:
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`text-3xl transition-colors hover:text-yellow-400 focus:outline-none ${
                nota >= star ? "text-yellow-400" : "text-gray-200"
              }`}
              onClick={() => setNota(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Sua experiência:
        </label>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Conte-nos o que achou..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-md transition-colors"
      >
        {enviando ? "Enviando..." : "Enviar Avaliação"}
      </button>

      {status.texto && (
        <p
          className={`text-sm text-center font-medium ${status.tipo === "sucesso" ? "text-green-600" : "text-red-500"}`}
        >
          {status.texto}
        </p>
      )}
    </form>
  );
}
