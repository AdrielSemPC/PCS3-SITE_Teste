
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Step } from "../ui/Cards";

export default function RegraTriplaSection() {
  return (
    <section className="bg-[#173342] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <p className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
            Sua melhor defesa
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Antes de agir, pare e confirme.
          </h2>

          <p className="text-gray-300">
            Três passos simples podem evitar a maioria dos golpes. Não tenha
            pressa: desconfiar é se proteger.
          </p>

          <Link
            href="/regra-tripla"
            className="bg-white text-[#173342] px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Aprender a regra tripla <ArrowRight size={18} />
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 space-y-6">
          <Step
            number="1"
            title="Pare"
            desc="Não clique, não pague e não passe seus dados."
          />

          <div className="border-t border-gray-100"></div>

          <Step
            number="2"
            title="Desconfie"
            desc="Urgência e ameaça são sinais comuns de golpe."
          />

          <div className="border-t border-gray-100"></div>

          <Step
            number="3"
            title="Confirme"
            desc="Ligue para a pessoa ou instituição por outro canal."
          />
        </div>
      </div>
    </section>
  );
}
