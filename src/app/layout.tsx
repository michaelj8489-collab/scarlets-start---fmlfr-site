import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scarlet Star Broadcasting",
  description: "Official site of Scarlet Star Broadcasting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <header className="w-full bg-[#050505]/80 border-b border-scarlet/30 p-4 sticky top-0 z-50 backdrop-blur-md shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <nav className="flex items-center gap-6">
              <a href="/" className="font-sans text-gray-300 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase">Home</a>
              <a href="/dashboard" className="font-sans text-gray-300 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase">Dashboard</a>
              <a href="/admin" className="font-sans text-gray-300 hover:text-white transition-colors text-sm font-semibold tracking-widest uppercase">Admin</a>
            </nav>
            <div className="flex items-center gap-5">
              <div className="flex flex-col text-right">
                <span className="font-serif text-scarlet text-2xl tracking-[0.15em] leading-none font-bold">
                  SCARLET STAR
                </span>
                <span className="font-sans text-gray-400 text-xs tracking-[0.4em] font-medium uppercase mt-1.5 mr-0.5">
                  Broadcasting
                </span>
              </div>
              <Image 
                src="/images/logo.png" 
                alt="Scarlet Star Broadcasting Logo" 
                width={64} 
                height={64} 
                className="rounded-lg shadow-[0_0_20px_rgba(193,18,31,0.4)]"
              />
            </div>
          </div>
        </header>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
