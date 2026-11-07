import HeroSection from "../components/home/HeroSection";
import AcaoRapidaSection from "../components/home/AcaoRapidaSection";
import GolpesSection from "../components/home/GolpesSection";
import RegraTriplaSection from "../components/home/RegraTriplaSection";
import AvaliacaoForm from "../components/ui/AvaliacaoForm";

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
    </main>
  );
}
