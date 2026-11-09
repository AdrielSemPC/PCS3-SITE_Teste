import HeroSection from "../components/home/HeroSection";
import AcaoRapidaSection from "../components/home/AcaoRapidaSection";
import GolpesSection from "../components/home/GolpesSection";
import RegraTriplaSection from "../components/home/RegraTriplaSection";
import AvaliacaoForm from "../components/ui/AvaliacaoForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <HeroSection />
      <AcaoRapidaSection />
      <GolpesSection />
      <RegraTriplaSection />

      <section className="w-full py-16 flex justify-center bg-gray-50 border-t border-gray-200">
        <AvaliacaoForm />
      </section>
      <Link
        href="/jogos"
        className="inline-block rounded-lg bg-[#173342] px-6 py-3 text-white hover:bg-[#254c60]"
      >
        Conhecer os jogos educativos
      </Link>
    </main>
  );
}
