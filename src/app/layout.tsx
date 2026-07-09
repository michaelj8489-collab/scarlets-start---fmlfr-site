import type { Metadata } from "next";
import type { Viewport } from "next";
import { InstallPrompt } from "@/components/pwa/InstallPrompt";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Scarlet Star Broadcasting",
    template: "%s | Scarlet Star",
  },
  description: "A private music community and broadcasting platform giving cover artists a stage.",
  applicationName: "Scarlet Star",
  appleWebApp: {
    capable: true,
    title: "Scarlet Star",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c1121f",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteHeader />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <InstallPrompt />
      </body>
    </html>
  );
}
