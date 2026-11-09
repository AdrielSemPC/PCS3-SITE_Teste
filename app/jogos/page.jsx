
import Link from "next/link";

const jogos = [
  {
    nome: "Perguntas para os idosos",
    descricao:
      "Uma atividade interativa com perguntas para estimular o conhecimento e a atenção.",
    link: "https://wordwall.net/pt/resource/53939371/perguntas-para-os-idosos",
    cor: "border-emerald-500",
    fundo: "bg-emerald-50",
    botao: "bg-emerald-600 hover:bg-emerald-700",
    numero: "01",
  },
  {
    nome: "Mini questionário para idosos",
    descricao:
      "Teste seus conhecimentos por meio de um pequeno questionário interativo.",
    link: "https://wordwall.net/pt/resource/53939504/mini-questionario-para-idosos",
    cor: "border-amber-500",
    fundo: "bg-amber-50",
    botao: "bg-amber-600 hover:bg-amber-700",
    numero: "02",
  },
  {
    nome: "Phishing Quiz",
    descricao:
      "Aprenda a identificar mensagens e situações suspeitas que podem esconder tentativas de golpe.",
    link: "https://phishingquiz.withgoogle.com/",
    cor: "border-sky-500",
    fundo: "bg-sky-50",
    botao: "bg-sky-600 hover:bg-sky-700",
    numero: "03",
  },
];

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Botão para voltar à página inicial */}
        <div data-leitura-ignorar="true" className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#173342] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#254c60]"
          >
            ← Voltar para o início
          </Link>
        </div>

        {/* Cabeçalho da página */}
        <div className="mb-10 text-center">

          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            Protege 60+ | Aprenda brincando
          </span>

          <h1 className="mb-4 text-4xl font-bold text-[#173342]">
            Jogos Educativos
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Aprenda a reconhecer situações suspeitas e
            teste seus conhecimentos por meio de
            atividades interativas.
          </p>

        </div>

        {/* Cards dos jogos */}
        <div className="grid gap-7 md:grid-cols-2">

          {jogos.map((jogo) => (
            <div
              key={jogo.numero}
              className={`rounded-2xl border-l-8 ${jogo.cor} bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >

              <div className={`mb-5 inline-flex rounded-lg ${jogo.fundo} px-4 py-2 font-bold text-[#173342]`}>
                Atividade {jogo.numero}
              </div>

              <h2 className="mb-3 text-2xl font-bold text-[#173342]">
                {jogo.nome}
              </h2>

              <p className="mb-7 leading-relaxed text-gray-600">
                {jogo.descricao}
              </p>

              <a
                href={jogo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl ${jogo.botao} px-6 py-4 text-center text-lg font-bold text-white shadow-sm transition`}
              >
                Acessar atividade
              </a>

            </div>
          ))}

        </div>

        {/* Mensagem final */}
        <div className="mt-12 rounded-2xl bg-[#173342] p-7 text-center text-white">

          <h2 className="mb-3 text-2xl font-bold">
            Segurança também se aprende!
          </h2>

          <p className="text-blue-100">
            Compartilhe o conhecimento e ajude outras pessoas
            a se protegerem contra golpes digitais.
          </p>

        </div>

      </div>
    </main>
  );
}
