import { Rakkas } from "next/font/google";
import "./globals.css";

const rakkas = Rakkas({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Agendamento Online",
  description: "Esmalteria Eduarda Dias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={rakkas.className}>{children}</body>
    </html>
  );
}
