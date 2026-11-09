
const jogos = [
  {
    nome: "Jogo 1",
    descricao: "Jogo com 3 perguntas simples sobre segurança online.",
    link: "https://wordwall.net/pt/resource/53939371/perguntas-para-os-idosos",
  },
  {
    nome: "Jogo 2",
    descricao: "Questionário com 3 perguntas simples sobre segurança online.",
    link: "https://wordwall.net/pt/resource/53939504/mini-questionario-para-idosos",
  },
  {
    nome: "Jogo 3",
    descricao: "Jogo onde você aprende a identificar tentativas de phishing. Você criará um email fictício e o jogo simulará uma caixa de entrada, com emails pra você identificar se é phishing ou não.",
    link: "https://phishingquiz.withgoogle.com/",
  },

];

export default function JogosPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold text-[#173342]">
          Jogos Educativos
        </h1>

        <p className="mb-10 text-gray-600">
          Aprenda a reconhecer situações suspeitas
          por meio de atividades interativas.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {jogos.map((jogo, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <h2 className="mb-2 text-xl font-semibold text-[#173342]">
                {jogo.nome}
              </h2>

              <p className="mb-5 text-gray-600">
                {jogo.descricao}
              </p>

              <a
                href={jogo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#173342] px-5 py-3 text-white hover:bg-[#254c60]"
              >
                Acessar jogo
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
