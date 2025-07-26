import Header from "@/components/layouts/header";
import { routing } from "@/i18n/routing";
import { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Geist_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface IProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<IProps, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<IProps>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          "flex min-h-dvh flex-col overflow-x-hidden font-sans antialiased",
          geistMono.variable,
          inter.variable,
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
