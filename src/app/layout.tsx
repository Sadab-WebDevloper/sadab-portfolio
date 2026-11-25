import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import GeminiChatLauncher from '@/components/GeminiChatLauncher';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadab Mamu | Portfolio",
  description: "Portfolio of Sadab Mamu, a passionate Full Stack Developer with expertise in Next.js, React, Node.js, and modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-primary/30 selection:text-primary-dark overflow-x-hidden">
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
          <GeminiChatLauncher />
        </MotionProvider>
      </body>
    </html>
  );
}
