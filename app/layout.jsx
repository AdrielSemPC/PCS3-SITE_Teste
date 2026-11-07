import "./globals.css";
import Footer from "../components/layout/Footer";
import BotLeitura from "../components/ui/BotLeitura";

export const metadata = {
  title: "PCS3 - Proteção Digital",
  description: "Educação e proteção contra golpes digitais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Footer />
        <BotLeitura />
      </body>
    </html>
  );
}
