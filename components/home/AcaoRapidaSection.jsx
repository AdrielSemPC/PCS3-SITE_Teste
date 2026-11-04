
import {
  AlertTriangle,
  Building2,
  Phone,
  ShieldAlert,
} from "lucide-react";

import { CardAcao } from "../ui/Cards";

export default function AcaoRapidaSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-red-50 p-3 rounded-full text-[#e05943]">
          <AlertTriangle size={28} />
        </div>
      </div>

      <p className="text-[#e05943] font-bold text-sm tracking-wider uppercase mb-2">
        Ação Rápida e Importante
      </p>

      <h2 className="text-3xl font-bold text-[#1a2e35] mb-12">
        Caí em um golpe. E agora?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <CardAcao
          icon={<Building2 />}
          title="Fale com o seu banco"
          desc="Use somente o telefone no verso do cartão."
        />

        <CardAcao
          icon={<Phone />}
          title="Ligue 190"
          desc="Em situações de risco ou ameaça imediata."
        />

        <CardAcao
          icon={<ShieldAlert />}
          title="Disque 100"
          desc="Canal de proteção à pessoa idosa."
        />
      </div>

      <p className="text-gray-500 text-sm mt-8 flex items-center justify-center gap-2">
        <span className="text-red-400">♥</span>
        Respire fundo. Sentir vergonha é comum, mas a culpa nunca é da vítima.
      </p>
    </section>
  );
}
