import { routing } from "@/i18n/routing";
import { isLocale, Locale } from "@/lib/i18n";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: Readonly<Props>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return redirect(`/${routing.defaultLocale}/products/ielts-course`);
  }

  return redirect(`/${locale}/products/ielts-course`);
}
