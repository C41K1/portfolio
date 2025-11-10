import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caiki - Engenheiro de Software",
  description: "Conheça meus projetos e minha trajetória.",
  openGraph: {
    title: 'Caiki - Desenvolvedor de Software',
    description: 'Conheça meus projetos e minha trajetória.',
    url: `https://caiki.vercel.app`,
    siteName: 'Portfólio Caiki',
    images: [
      {
        url: `https://caiki.vercel.app/preview-site.png`,
        width: 1200,
        height: 630,
        alt: 'Preview do site de Caiki',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Caiki - Desenvolvedor de Software',
    description: 'Conheça meus projetos e minha trajetória.',
    images: [`https://caiki.vercel.app/preview-site.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
