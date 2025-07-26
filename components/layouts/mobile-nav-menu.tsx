"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { INavMenuItem, navMenu } from "@/data/menu";
import { DESKTOP_BREAKPOINT } from "@/lib/constants";
import { useMenuStore } from "@/store/use-menu";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { List, ListItem } from "../common/typography";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const MobileNavMenu = () => {
  const t = useTranslations("navMenu");
  const isOpen = useMenuStore((state) => state.isOpen);
  const toggle = useMenuStore((state) => state.toggle);
  const close = useMenuStore((state) => state.close);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= DESKTOP_BREAKPOINT) {
        close();
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [close]);

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="left" className="w-full">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
        </SheetHeader>
        <Accordion
          type="single"
          collapsible
          className="px-4"
          defaultValue={navMenu[0]?.key}
        >
          {navMenu?.map((navMenuItem: INavMenuItem) =>
            navMenuItem?.items?.length ? (
              <AccordionItem
                key={navMenuItem.key}
                value={navMenuItem.key}
                className="border-b-0"
              >
                <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer px-2 py-2 hover:no-underline">
                  {t(navMenuItem.key)}
                </AccordionTrigger>
                <AccordionContent className="py-2">
                  <List className="gap-1">
                    {navMenuItem?.items?.map((subItem: INavMenuItem) => (
                      <ListItem key={subItem.key} className="grid">
                        <Button variant="ghost" className="px-2" asChild>
                          <Link
                            href={subItem.url}
                            className="justify-start gap-3 font-normal"
                          >
                            {subItem.icon && (
                              <Image
                                src={subItem.icon}
                                alt={subItem.key}
                                width={24}
                                height={24}
                                className="size-6 shrink-0 object-contain"
                              />
                            )}
                            {t(subItem.key)}
                          </Link>
                        </Button>
                      </ListItem>
                    ))}
                    {navMenuItem?.extraItems?.length && (
                      <>
                        <Separator className="border-border border border-dashed bg-transparent" />
                        {navMenuItem?.extraItems?.map(
                          (subItem: INavMenuItem) => (
                            <ListItem key={subItem.key} className="grid">
                              <Button variant="ghost" className="px-2" asChild>
                                <Link
                                  href={subItem.url}
                                  className="justify-start gap-3 font-normal"
                                >
                                  {subItem.icon && (
                                    <Image
                                      src={subItem.icon}
                                      alt={subItem.key}
                                      width={24}
                                      height={24}
                                      className="size-6 shrink-0 object-contain"
                                    />
                                  )}
                                  {t(subItem.key)}
                                </Link>
                              </Button>
                            </ListItem>
                          ),
                        )}
                      </>
                    )}
                  </List>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <Button
                key={navMenuItem.key}
                variant="ghost"
                className="px-2"
                asChild
              >
                <Link
                  href={navMenuItem.url}
                  className="w-full justify-start gap-3 py-2"
                >
                  {t(navMenuItem.key)}
                </Link>
              </Button>
            ),
          )}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
