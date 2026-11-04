
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e35] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 font-bold text-lg mb-4 md:mb-0">
          <ShieldAlert className="text-[#e05943]" />
          Protege 60+
        </div>

        <p className="text-gray-400">
          Este é um projeto educativo. Em emergências, ligue 190.
        </p>
      </div>
    </footer>
  );
}
