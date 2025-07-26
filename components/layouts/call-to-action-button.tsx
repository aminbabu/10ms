"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiPhoneFill, RiPhoneLine } from "@remixicon/react";
import { useTranslations } from "next-intl";

interface IProps {
  className?: string;
}

const CTAButton = ({ className, ...props }: IProps) => {
  const t = useTranslations("contact");

  return (
    <Button
      variant="link"
      className={cn(
        "size-8 hover:text-green-700 hover:no-underline md:w-auto md:text-green-600",
        className,
      )}
      {...props}
    >
      <span className="hidden items-center md:inline-flex md:gap-1">
        <RiPhoneFill className="size-5" />
        {t("number")}
      </span>
      <RiPhoneLine className="size-5 md:hidden" />
    </Button>
  );
};

export default CTAButton;
