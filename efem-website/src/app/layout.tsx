import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzeria EFEm – Pizzeria & Grill in Nordhorn",
  description:
    "Pizzeria EFEm: Frische Holzofen-Pizza, saftiger Döner und schnelle Lieferung in Nordhorn und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-4">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
