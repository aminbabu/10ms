"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Locale, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitcher = () => {
  const locale = useLocale(); // Current locale
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const getNextLocale = (currentLocale: Locale): Locale => {
    const index = routing.locales.indexOf(currentLocale);
    const nextIndex = (index + 1) % routing.locales.length;

    return routing.locales[nextIndex];
  };

  const onLocaleChange = () => {
    const nextLocale = getNextLocale(locale);

    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  };

  return (
    <Button
      variant="outline"
      className={cn({ "pointer-events-none": isPending })}
      onClick={onLocaleChange}
    >
      {getNextLocale(locale).toUpperCase()}
      <span className="sr-only">Switch language</span>
    </Button>
  );
};

export default LocaleSwitcher;
