"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { INavMenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  data: INavMenuItem;
  className?: string;
}

const NavMenuItem = ({ data, className, ...props }: IProps) => {
  const t = useTranslations("navMenu");

  return (
    <DropdownMenuItem asChild>
      <Link
        href={data.url}
        className={cn(
          "flex cursor-pointer items-center gap-3 py-2.5",
          className,
        )}
        {...props}
      >
        {data.icon && (
          <Image
            src={data.icon}
            alt={data.key}
            width={24}
            height={24}
            className="size-6 shrink-0 object-contain"
          />
        )}
        {t(data.key)}
      </Link>
    </DropdownMenuItem>
  );
};

export default NavMenuItem;
