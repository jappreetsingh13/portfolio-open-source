import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jappreet Singh | Full Stack Developer",
  description:
    "Portfolio of Jappreet Singh — Next.js, React, AEM & Full Stack Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
