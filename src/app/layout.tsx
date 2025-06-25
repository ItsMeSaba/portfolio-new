import type { Metadata } from "next";
import { Lenis } from "@/lib/lenis/Lenis";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/sections/footer/Footer";
import { Header } from "@/components/sections/header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saba Silagadze | Full-Stack Developer (Next.js & NestJS)",
  description:
    "Portfolio of Saba Silagadze, a JavaScript-ecosystem developer specializing in Next.js, GSAP animations, and performance-optimized web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Lenis />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
