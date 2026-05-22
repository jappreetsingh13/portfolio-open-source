import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jappreet Singh | Full Stack Developer",
  description:
    "Portfolio of Jappreet Singh — Full Stack (React, Nextm MongoDB, Express) and AEM Developer(Sites)",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className={inter.className}>
        <>
          {/* Vercel Analytics */}
          <Analytics />

          {/* Vercel Speed Insights */}
          <SpeedInsights />
          {children}
        </>
      </body>
    </html>
  );
}
