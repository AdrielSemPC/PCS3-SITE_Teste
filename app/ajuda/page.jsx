
import Link from "next/link";
import {
  ArrowLeft,
  AlertTriangle,
  Building2,
  Camera,
  KeyRound,
  FileText,
  Phone,
  ShieldAlert,
} from "lucide-react";

export default function AjudaPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] text-gray-800">

      <section className="bg-[#173342] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="text-gray-300 flex items-center gap-2 hover:text-white transition"
          >
            <ArrowLeft size={18} />
            Voltar para o início
          </Link>

          <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mt-10">
            Orientação e proteção
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Caí em um golpe. E agora?
          </h1>

          <p className="text-gray-300 max-w-2xl mt-5">
            Se você suspeita que foi vítima de uma fraude, mantenha a calma
            e procure agir rapidamente. Algumas medidas podem ajudar a
            proteger suas contas e reunir informações importantes.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-10">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-[#e05943]" size={28} />

            <h2 className="text-xl font-bold text-[#1a2e35]">
              Agir rapidamente é importante
            </h2>
          </div>

          <p className="text-gray-600 mt-3">
            Não tenha vergonha de procurar ajuda. Golpes podem acontecer
            com qualquer pessoa. O importante é tomar as medidas necessárias
            assim que perceber o problema.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#1a2e35] mb-8">
          O que você deve fazer?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <Building2 className="text-[#e05943]" size={30} />

            <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
              1. Entre em contato com seu banco
            </h3>

            <p className="text-gray-600 mt-3">
              Utilize o número de telefone oficial impresso no verso do
              seu cartão bancário.
            </p>

            <p className="text-gray-600 mt-3">
              Solicite o bloqueio das senhas e dos cartões, além do
              acionamento do mecanismo de devolução do dinheiro, caso
              tenha realizado uma transferência.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <Camera className="text-[#e05943]" size={30} />

            <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
              2. Guarde as provas
            </h3>

            <p className="text-gray-600 mt-3">
              Registre e preserve todas as informações relacionadas
              ao ocorrido.
            </p>

            <p className="text-gray-600 mt-3">
              Tire fotos da tela do celular, salve as mensagens recebidas,
              os números de telefone envolvidos e os comprovantes
              de transferência.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <KeyRound className="text-[#e05943]" size={30} />

            <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
              3. Altere suas senhas
            </h3>

            <p className="text-gray-600 mt-3">
              Modifique as senhas das suas contas bancárias e do seu
              e-mail principal.
            </p>

            <p className="text-gray-600 mt-3">
              Faça essas alterações utilizando um dispositivo seguro.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <FileText className="text-[#e05943]" size={30} />

            <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
              4. Faça um Boletim de Ocorrência
            </h3>

            <p className="text-gray-600 mt-3">
              Registre o ocorrido na Delegacia de Polícia mais próxima
              ou utilize a Delegacia Virtual do seu estado.
            </p>
          </article>

        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 mt-10 shadow-sm">
          <div className="flex items-center gap-3">
            <Phone className="text-[#e05943]" size={28} />

            <h2 className="text-2xl font-bold text-[#1a2e35]">
              5. Canais oficiais de consulta
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-[#1a2e35]">
                Central do INSS
              </p>

              <p className="text-3xl font-bold text-[#e05943] mt-2">
                135
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Utilize o telefone para tirar dúvidas sobre seus benefícios.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="font-bold text-[#1a2e35]">
                Aplicativo Meu INSS
              </p>

              <p className="text-gray-600 mt-3">
                Acesse somente pelo aplicativo oficial ou pelo site
                cujo endereço termine exatamente com .gov.br.
              </p>
            </div>

          </div>
        </div>

        <div className="bg-[#173342] rounded-2xl p-8 mt-10 text-white">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-yellow-400" size={28} />

            <h2 className="text-2xl font-bold">
              Continue se protegendo
            </h2>
          </div>

          <p className="text-gray-300 mt-4">
            Conhecer os golpes e aprender a reconhecer situações suspeitas
            ajuda a evitar novas tentativas de fraude.
          </p>

          <Link
            href="/regra-tripla"
            className="inline-flex mt-6 bg-white text-[#173342] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Conhecer as regras de prevenção
          </Link>
        </div>

      </section>
    </main>
  );
}
