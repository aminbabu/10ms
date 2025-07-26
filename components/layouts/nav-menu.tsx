"use client";

import NavMenuItem from "@/components/layouts/nav-menu-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { INavMenuItem, navMenu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { RiArrowDownSLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface IProps {
  className?: string;
}

const NavMenu = ({ className }: IProps) => {
  const t = useTranslations("navMenu");

  return (
    <div
      className={cn("xl:mx-4 xl:flex xl:items-center xl:gap-x-5", className)}
    >
      {navMenu?.map((navMenuItem: INavMenuItem) => (
        <DropdownMenu key={navMenuItem.key}>
          {navMenuItem?.items?.length ? (
            <DropdownMenuTrigger className="inline-flex cursor-pointer items-center justify-between gap-x-1 text-sm font-medium transition-colors duration-300 hover:text-green-700 focus-visible:border-transparent focus-visible:ring-transparent focus-visible:outline-transparent">
              {t(navMenuItem.key)}
              <RiArrowDownSLine className="size-5" />
            </DropdownMenuTrigger>
          ) : (
            <Link
              href={`${navMenuItem.url}`}
              className="text-sm font-medium transition-colors duration-300 hover:text-green-700"
            >
              {t(navMenuItem.key)}
            </Link>
          )}
          <DropdownMenuContent className="hidden border-none p-2 xl:block xl:min-w-52 xl:shadow-2xl">
            {navMenuItem?.items?.map((subItem: INavMenuItem) => (
              <NavMenuItem key={subItem.key} data={subItem} />
            ))}
            {navMenuItem?.extraItems?.length && (
              <>
                <DropdownMenuSeparator className="border-border border border-dashed bg-transparent" />
                {navMenuItem?.extraItems?.map((extraItem: INavMenuItem) => (
                  <NavMenuItem key={extraItem.key} data={extraItem} />
                ))}
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};

export default NavMenu;
