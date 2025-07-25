import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Minute School - The Largest Online Classroom of Bangladesh",
  description:
    "10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-dvh flex-col overflow-x-hidden font-sans antialiased",
          geistMono.variable,
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
