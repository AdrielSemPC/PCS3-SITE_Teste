import HeroSection from "../components/home/HeroSection";
import AcaoRapidaSection from "../components/home/AcaoRapidaSection";
import GolpesSection from "../components/home/GolpesSection";
import RegraTriplaSection from "../components/home/RegraTriplaSection";
import AvaliacaoForm from "../components/ui/AvaliacaoForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <div className="mx-auto flex max-w-7xl justify-end px-6 pt-5">
        <Link
          href="/jogos"
          className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-[#173342] shadow-md transition hover:bg-amber-400 hover:shadow-lg"
        >
          Jogos Educativos
        </Link>
      </div>
      <HeroSection />
      <AcaoRapidaSection />
      <GolpesSection />
      <RegraTriplaSection />

      <section className="w-full py-16 flex justify-center bg-gray-50 border-t border-gray-200">
        <AvaliacaoForm />
      </section>

      <Footer />
    </main>
  );
}
