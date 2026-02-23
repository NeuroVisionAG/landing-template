import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "OpenClaw Lab | Архитекторы ИИ-будущего",
  description: "Развертывание и подготовка ИИ-сотрудников на технологии OpenClaw. Станьте архитектором экосистем ИИ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light">
      <body
        className={`${unbounded.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
