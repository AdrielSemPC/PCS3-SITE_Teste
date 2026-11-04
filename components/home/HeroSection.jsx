
import { ArrowRight, HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-[#1a2e35]">
          Navegue com <br />
          <span className="text-[#e05943]">segurança</span> e <br />
          tranquilidade.
        </h1>

        <p className="text-gray-600 max-w-md">
          Aprenda a reconhecer golpes digitais e saiba o que fazer para
          proteger você e sua família.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/golpes"
            className="bg-[#e05943] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#c94b37] transition"
          >
            Conhecer os golpes <ArrowRight size={18} />
          </Link>

          <Link
            href="/ajuda"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition"
          >
            Preciso de ajuda agora
          </Link>
        </div>

        <p className="text-xs text-gray-400 flex items-center gap-1 pt-2">
          <span className="text-green-500 text-lg">✓</span>
          Conteúdo simples, gratuito e sem propagandas.
        </p>
      </div>

      <div className="relative">
        <div className="rounded-t-full rounded-b-3xl overflow-hidden border-8 border-white shadow-xl h-[400px] w-[80%] ml-auto relative bg-gray-200">
          <Image
            src="/placeholder-casal.jpg"
            alt="Casal de idosos a usar o telemóvel"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 max-w-xs">
          <div className="bg-red-50 p-2 rounded-full text-[#e05943]">
            <HeartHandshake size={24} />
          </div>

          <div>
            <p className="font-bold text-sm">Você não está sozinho</p>
            <p className="text-xs text-gray-500">
              Estamos aqui para ajudar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
