
import HeroSection from "../components/home/HeroSection";
import GolpesSection from "../components/home/GolpesSection";
import RegraTriplaSection from "../components/home/RegraTriplaSection";
import AcaoRapidaSection from "../components/home/AcaoRapidaSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf7] font-sans text-gray-800">
      <HeroSection />
      <GolpesSection />
      <RegraTriplaSection />
      <AcaoRapidaSection />
      <Footer />
    </main>
  );
}
