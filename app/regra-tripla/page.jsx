
import Link from "next/link";
import {
  ArrowLeft,
  Hand,
  Search,
  CheckCircle,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Lock,
} from "lucide-react";

export default function RegraTriplaPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] text-gray-800">

      <section className="bg-[#173342] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div data-leitura-ignorar="true">
            <Link
              href="/"
              className="text-gray-300 flex items-center gap-2 hover:text-white transition"
            >
              <ArrowLeft size={18} />
              Voltar para o início
            </Link>
          </div>

          <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mt-10">
            Sua melhor defesa
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Regras de ouro da prevenção
          </h1>

          <p className="text-gray-300 max-w-2xl mt-5">
            Pequenos cuidados no dia a dia podem fazer uma grande diferença.
            Aprenda a reconhecer situações suspeitas e proteger suas
            informações pessoais.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-[#1a2e35] text-center">
          Aplique a regra tripla
        </h2>

        <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto">
          Diante de qualquer mensagem alarmante, não tenha pressa.
          Pare, respire e siga três passos antes de tomar uma decisão.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm text-center">
            <div className="bg-red-50 text-[#e05943] w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Hand size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#1a2e35] mt-5">
              1. Desconfie
            </h3>

            <p className="text-gray-600 mt-3">
              Não confie imediatamente em mensagens alarmantes,
              pedidos urgentes de dinheiro ou ofertas muito vantajosas.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm text-center">
            <div className="bg-yellow-50 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Search size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#1a2e35] mt-5">
              2. Informe-se
            </h3>

            <p className="text-gray-600 mt-3">
              Procure entender a situação antes de tomar qualquer decisão.
              Não se deixe pressionar pela urgência criada pelo golpista.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm text-center">
            <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={30} />
            </div>

            <h3 className="text-2xl font-bold text-[#1a2e35] mt-5">
              3. Verifique
            </h3>

            <p className="text-gray-600 mt-3">
              Confirme as informações por outros meios e procure os
              canais oficiais antes de fornecer dados ou realizar pagamentos.
            </p>
          </div>

        </div>

        <div className="bg-[#173342] rounded-2xl p-8 mt-12 text-white text-center">
          <h2 className="text-2xl font-bold">
            Lembre-se: a urgência é uma das principais armas do golpista.
          </h2>

          <p className="text-gray-300 mt-3">
            Não tenha pressa. Desconfiar, informar-se e verificar
            são atitudes que ajudam a proteger você.
          </p>
        </div>

      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#1a2e35]">
            Outras regras importantes de segurança
          </h2>

          <p className="text-gray-500 mt-3">
            Além da regra tripla, existem outros cuidados que ajudam
            a proteger suas contas e informações pessoais.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <article className="border border-gray-100 rounded-xl p-6">
              <MessageCircle className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Crie uma palavra-chave familiar
              </h3>

              <p className="text-gray-600 mt-3">
                Combine uma palavra secreta com seus filhos e netos.
                Se alguém ligar pedindo dinheiro utilizando a voz de
                um familiar, peça essa palavra-chave.
              </p>

              <p className="text-gray-600 mt-2">
                Se a pessoa não souber responder, desligue imediatamente.
              </p>
            </article>

            <article className="border border-gray-100 rounded-xl p-6">
              <Smartphone className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Nunca clique em links recebidos por mensagem
              </h3>

              <p className="text-gray-600 mt-3">
                Desconfie de mensagens por SMS ou WhatsApp solicitando
                atualização de dados ou liberação de benefícios.
              </p>

              <p className="text-gray-600 mt-2">
                Procure acessar os serviços pelos canais oficiais.
              </p>
            </article>

            <article className="border border-gray-100 rounded-xl p-6">
              <Lock className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Nunca forneça senhas ou códigos
              </h3>

              <p className="text-gray-600 mt-3">
                Não compartilhe senhas, tokens ou códigos recebidos
                no celular para supostamente proteger sua conta bancária.
              </p>
            </article>

            <article className="border border-gray-100 rounded-xl p-6">
              <ShieldCheck className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Não instale aplicativos a pedido de estranhos
              </h3>

              <p className="text-gray-600 mt-3">
                Não instale programas de acesso remoto no celular
                ou computador a pedido de pessoas desconhecidas.
              </p>
            </article>

            <article className="border border-gray-100 rounded-xl p-6">
              <KeyRound className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Ative a confirmação em duas etapas
              </h3>

              <p className="text-gray-600 mt-3">
                Essa opção adiciona uma senha extra ao WhatsApp
                e ajuda a impedir que criminosos clonem seu aplicativo.
              </p>
            </article>

            <article className="border border-gray-100 rounded-xl p-6">
              <ShieldCheck className="text-[#e05943]" size={30} />

              <h3 className="text-xl font-bold text-[#1a2e35] mt-4">
                Proteja seu CPF gratuitamente
              </h3>

              <p className="text-gray-600 mt-3">
                Utilize ferramentas oficiais e gratuitas, como o
                BC PROTEGE+ do Banco Central e a Proteção do CPF
                no portal Redesim, para ajudar a impedir a abertura
                de contas falsas em seu nome.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#1a2e35]">
          Informação é proteção!
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Quanto mais você conhece os golpes e aprende a reconhecer
          situações suspeitas, mais preparado estará para navegar
          pela internet com segurança.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/golpes"
            className="bg-[#e05943] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c94b37] transition"
          >
            Conhecer os golpes
          </Link>

          <Link
            href="/ajuda"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition"
          >
            Preciso de ajuda
          </Link>
        </div>
      </section>

    </main>
  );
}
