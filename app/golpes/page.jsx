
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function GolpesPage() {
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
            Fique atento
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Conheça os golpes digitais
          </h1>

          <p className="text-gray-300 max-w-2xl mt-5">
            Conhecer as estratégias utilizadas pelos criminosos é um dos
            primeiros passos para proteger seus dados, seu dinheiro e sua
            família.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-6">

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              1. WhatsApp Clonado, Falso Parente e Falso Advogado
            </h2>

            <p className="text-gray-600 mt-4">
              No golpe do falso parente, o criminoso utiliza a foto de um
              familiar e envia mensagens de um número novo, dizendo que
              trocou de aparelho. Depois, inventa uma emergência e solicita
              uma transferência de dinheiro urgente.
            </p>

            <p className="text-gray-600 mt-3">
              No golpe do falso advogado, o criminoso utiliza informações
              reais de processos judiciais para fingir ser um advogado e
              exigir pagamentos de falsas taxas para liberar indenizações.
            </p>

            <div className="bg-red-50 rounded-lg p-4 mt-5">
              <p className="font-bold text-[#e05943]">Sinais de alerta</p>
              <p className="text-gray-600 text-sm mt-2">
                Pedidos urgentes de dinheiro, exigência de segredo e
                orientações para não ligar para o número antigo do familiar.
              </p>
            </div>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              2. Clonagem de Voz por Inteligência Artificial
            </h2>

            <p className="text-gray-600 mt-4">
              Programas de Inteligência Artificial podem criar vídeos falsos
              e imitar vozes humanas. Criminosos utilizam pequenos trechos
              de áudios publicados nas redes sociais para reproduzir a voz
              de familiares.
            </p>

            <p className="text-gray-600 mt-3">
              Depois, realizam ligações simulando acidentes, prisões ou
              emergências médicas, exigindo transferências imediatas via Pix.
            </p>

            <div className="bg-red-50 rounded-lg p-4 mt-5">
              <p className="font-bold text-[#e05943]">Como identificar?</p>
              <p className="text-gray-600 text-sm mt-2">
                Mesmo que a voz pareça familiar, não confie apenas nela.
                Procure confirmar a situação por outro meio.
              </p>
            </div>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              3. Phishing, Links Falsos e Golpes do INSS
            </h2>

            <p className="text-gray-600 mt-4">
              Phishing é uma técnica em que o criminoso utiliza mensagens,
              e-mails ou avisos alarmantes para tentar obter informações
              pessoais.
            </p>

            <p className="text-gray-600 mt-3">
              Um exemplo é a mensagem falsa informando que é necessário
              atualizar o cadastro do INSS, realizar a Prova de Vida Digital
              ou desbloquear um benefício.
            </p>

            <p className="text-gray-600 mt-3">
              Os links podem direcionar para sites falsos que imitam páginas
              do governo ou de bancos. Ao fornecer dados, documentos ou
              fotos, a vítima pode ter suas informações utilizadas
              indevidamente.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              4. Falsa Central Bancária e Vishing
            </h2>

            <p className="text-gray-600 mt-4">
              Vishing é um golpe realizado por meio de chamadas telefônicas.
              O criminoso se apresenta como funcionário do banco e afirma
              que a conta foi invadida ou que existe uma compra suspeita.
            </p>

            <p className="text-gray-600 mt-3">
              Para supostamente resolver o problema, solicita senhas,
              códigos recebidos no celular ou a instalação de aplicativos
              de acesso remoto, como AnyDesk e TeamViewer.
            </p>

            <div className="bg-red-50 rounded-lg p-4 mt-5">
              <p className="font-bold text-[#e05943]">Atenção</p>
              <p className="text-gray-600 text-sm mt-2">
                Nunca forneça senhas ou códigos e não instale aplicativos
                a pedido de desconhecidos.
              </p>
            </div>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              5. Empréstimo Consignado e Assédio Financeiro
            </h2>

            <p className="text-gray-600 mt-4">
              Criminosos e empresas mal-intencionadas podem utilizar dados
              vazados da Previdência Social para oferecer empréstimos com
              juros supostamente baixos ou depositar valores não solicitados
              na conta da vítima.
            </p>

            <p className="text-gray-600 mt-3">
              A vítima pode ser induzida a aceitar contratos sem explicações
              claras, gerando descontos automáticos e indevidos na
              aposentadoria.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              6. Falso Suporte Técnico de Computador
            </h2>

            <p className="text-gray-600 mt-4">
              Uma janela de aviso aparece na tela do computador ou celular,
              informando que o aparelho está infectado por um vírus grave.
              A mensagem apresenta um telefone para suposto suporte técnico.
            </p>

            <p className="text-gray-600 mt-3">
              Ao entrar em contato, o falso técnico pode exigir pagamentos
              ou solicitar acesso remoto ao aparelho para roubar arquivos
              e senhas bancárias.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              7. Golpe do Romance e Falsos Namorados Virtuais
            </h2>

            <p className="text-gray-600 mt-4">
              O criminoso cria um perfil falso em redes sociais ou
              aplicativos de namoro. Aos poucos, conquista a confiança
              da vítima e constrói um relacionamento afetivo à distância.
            </p>

            <p className="text-gray-600 mt-3">
              Depois de estabelecer uma relação de confiança, começa a
              inventar problemas financeiros, viagens de emergência ou
              situações de saúde para solicitar dinheiro e presentes.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              8. Falsos Investimentos e Criptomoedas
            </h2>

            <p className="text-gray-600 mt-4">
              Golpistas oferecem oportunidades de investimento com ganhos
              elevados e sem riscos. Para convencer a vítima, utilizam
              plataformas e gráficos falsos que simulam o rendimento
              do dinheiro.
            </p>

            <p className="text-gray-600 mt-3">
              Quando a vítima tenta retirar o valor investido, os criminosos
              exigem novas taxas ou desaparecem com o dinheiro.
            </p>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#1a2e35]">
              9. Lojas Falsas Online e Captura de Mulas Financeiras
            </h2>

            <p className="text-gray-600 mt-4">
              Lojas falsas anunciam produtos populares por preços muito
              baixos. Depois do pagamento por boleto ou Pix, o produto
              nunca é entregue.
            </p>

            <p className="text-gray-600 mt-3">
              Também existem falsas ofertas de emprego que prometem ganhos
              fáceis trabalhando em casa. Na realidade, os criminosos
              utilizam a conta bancária da vítima para receber e repassar
              dinheiro de outros golpes.
            </p>
          </article>

        </div>

        <div className="bg-[#173342] rounded-2xl p-8 mt-12 text-white">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-bold">
              Proteja-se!
            </h2>
          </div>

          <p className="text-gray-300 mt-4">
            Desconfie de pedidos urgentes, ofertas muito vantajosas e
            solicitações de informações pessoais. Antes de agir, procure
            confirmar a situação.
          </p>

          <Link
            href="/regra-tripla"
            className="inline-flex mt-6 bg-white text-[#173342] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Aprender a se proteger
          </Link>
        </div>
      </section>
    </main>
  );
}
