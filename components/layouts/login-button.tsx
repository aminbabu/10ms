"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface IProps {
  className?: string;
}

const LoginButton = ({ className }: IProps) => {
  const t = useTranslations("auth");

  return (
    <Button
      size="sm"
      className={cn(
        "cursor-pointer bg-green-600 hover:bg-green-700",
        className,
      )}
    >
      {t("login.text")}
    </Button>
  );
};

export default LoginButton;
