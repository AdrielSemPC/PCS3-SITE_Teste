
import {
  ArrowRight,
  PhoneCall,
  UserX,
  Building2,
  FileWarning,
} from "lucide-react";

import { CardGolpe } from "../ui/Cards";
import Link from "next/link";

export default function GolpesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[#e05943] font-bold text-sm tracking-wider uppercase mb-2">
            Fique Atento
          </p>

          <h2 className="text-3xl font-bold text-[#1a2e35]">
            Os golpes mais comuns
          </h2>

          <p className="text-gray-500 mt-2">
            Conheça os sinais para identificar uma tentativa de golpe antes
            que seja tarde.
          </p>
        </div>

        <Link
          href="/golpes"
          className="text-[#e05943] font-semibold flex items-center gap-1 hover:underline"
        >
          Ver todos os golpes <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <CardGolpe
          icon={<PhoneCall className="text-red-400" />}
          title="Falso parente"
          desc="Alguém pede dinheiro fingindo ser da família."
        />

        <CardGolpe
          icon={<UserX className="text-yellow-500" />}
          title="Clonagem de voz"
          desc="Uma voz conhecida pode ter sido criada por computador."
        />

        <CardGolpe
          icon={<Building2 className="text-blue-400" />}
          title="Falsa central bancária"
          desc="O banco nunca pede sua senha por telefone."
        />

        <CardGolpe
          icon={<FileWarning className="text-purple-400" />}
          title="Golpe do INSS"
          desc="Cuidado com mensagens e links sobre benefícios."
        />
      </div>
    </section>
  );
}
