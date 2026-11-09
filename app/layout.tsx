import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Nomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex items-center justify-center font-serif bg-[linear-gradient(160deg,#1a2332_0%,#2d4a3e_50%,#1a2332_100%)] text-[#f2efe8]">
        {children}
      </body>
    </html>
  );
}
