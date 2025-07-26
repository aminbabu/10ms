"use client";

import CTAChecklist from "@/components/pages/products/cta-checklist";
import Trailers from "@/components/pages/products/trailers";
import { Card, CardContent } from "@/components/ui/card";
import { ICheckList, ICTAText, IMedia } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { useIntroStore } from "@/store/use-intro";
import { RiPhoneFill } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"aside"> {
  ctaChecklist: {
    cta_text: ICTAText;
    checklist: Array<ICheckList>;
  };
  media: Array<IMedia>;
  className?: string;
}

const Sidebar = ({ ctaChecklist, media, className }: IProps) => {
  const t = useTranslations("contact");
  const height = useIntroStore((state) => state.height);

  return (
    <aside
      className={cn(
        "relative h-full transition-all duration-600 ease-in-out",
        className,
      )}
      style={{ marginTop: `-${height}px` }}
    >
      <Card className="rounded-none border-b-0 pt-1 pb-2.5">
        <CardContent className="px-1">
          <Trailers data={media} />
        </CardContent>
      </Card>
      <div className="md:sticky md:top-20">
        <Card className="rounded-none py-4">
          <CardContent className="px-4">
            <CTAChecklist data={ctaChecklist} />
          </CardContent>
        </Card>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm">
          <p className="text-muted-foreground">{t("title")}</p>
          <Link
            href="tel:16910"
            className="flex items-center gap-1 text-green-600 underline transition-colors hover:text-green-700"
          >
            <RiPhoneFill className="size-4" />
            {t("text")} ({t("number")})
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
