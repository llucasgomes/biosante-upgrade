import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
import { inter } from "./ui/fonts";

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Biosanté",
  description:
    "Chegou a nova geração de colágeno para tratamento de rugas, unhas e celulite. O Colágeno Bioplus da Biosanté é o mais completo do mercado: Colágeno Verisol + Colágeno Hidrolisado Tipo 1 e Tipo 3. Além do mix da beleza completo de vitaminas e sais mineiras: vitaminas A, C, E e B5, biotina, selênio, zinco e ácido fólico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
