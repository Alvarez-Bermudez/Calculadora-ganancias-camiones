import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

export const metadata: Metadata = {
  title: "Calculadora de ganancias para camiones",
  description: "Calculadora para estimar ganancias de cargas para camiones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //${inter.className}
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
