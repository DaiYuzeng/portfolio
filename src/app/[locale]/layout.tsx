import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// For i18n support
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing"


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
  title: "Yuzeng Dai",
  keywords: [
    "Yuzeng Dai",
    "Front End Engineer",
    "Software Engineer",
    "UI Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Web Development",
    "React",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "Web Accessibility",
    "A11y"
  ],
  description: "This is Yuzeng Dai's website, showcasing my experience as a Front End Engineer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
