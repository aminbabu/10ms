"use client";

import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NotFound({ error, reset }: IProps) {
  const router = useRouter();
  const t = useTranslations("NotFoundPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Main>
      <Section className="flex min-h-dvh items-center justify-center px-4">
        <Container className="max-w-md space-y-8 text-center">
          <div className="space-y-4">
            <div className="text-primary text-6xl font-bold">{t("code")}</div>
            <h1 className="text-foreground text-2xl font-semibold">
              {t("title")}
            </h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button onClick={reset}>
              <Home className="mr-2 h-4 w-4" />
              {t("goHome")}
            </Button>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 size-4" />
              Go Back
            </Button>
          </div>

          <div className="border-border border-t pt-8">
            <p className="text-muted-foreground text-sm">
              {t("supportMessage")}{" "}
              <Link href="/contact" className="text-primary hover:underline">
                {t("contactSupport")}
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
