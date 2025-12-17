import type { Metadata } from "next";
import { Inconsolata, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({ subsets: ["latin"], variable: "--font-inconsolata" });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Kisagu - Yapay Zeka Destekli Güvenlik Analiz Platformu",
  description:
    "Gelişmiş AI algoritmaları ile siber tehditleri gerçek zamanlı tespit edin. 7/24 koruma, otomatik tehdit engelleme ve kapsamlı güvenlik raporları.",
  keywords: [
    "siber güvenlik",
    "yapay zeka",
    "tehdit analizi",
    "güvenlik platformu",
    "AI security",
  ],
};

import { ToastProvider } from "@/components/ui/toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inconsolata.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
