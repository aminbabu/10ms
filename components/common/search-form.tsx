"use client";

import Backdrop from "@/components/common/backdrop";
import { H2, List, ListItem } from "@/components/common/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/store/use-search";
import { RiSearch2Line } from "@remixicon/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const result = [
  "HSC Preparation",
  "IELTS Course",
  "IELTS Preparation",
  "English Course",
];

interface IProps extends ComponentProps<"form"> {
  className?: string;
}

export function SearchForm({ className, ...props }: IProps) {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("search");
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);
  const isOpen = useSearchStore((state) => state.isOpen);
  const open = useSearchStore((state) => state.open);
  const close = useSearchStore((state) => state.close);

  const handlePopularSearch = (search: string) => {
    setSearch(search);
    close();

    console.log("Navigating to search page with search:", search);
  };

  // close if user clicks outside of the ref
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, close]);

  return (
    <>
      <form className={cn("relative", className)} {...props}>
        <Backdrop show={isOpen} />
        <div ref={ref} className="group">
          <div className="relative z-10">
            <Label htmlFor="search" className="sr-only">
              {t("label")}
            </Label>
            <Input
              id="search"
              className={cn(
                "bg-background focus-visible:border-border h-10 rounded-3xl pl-11 focus-visible:ring-0",
                {
                  "rounded-b-none": isOpen,
                },
              )}
              placeholder={`${t("placeholder")}...`}
              autoComplete="off"
              value={search}
              onFocus={open}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="24"
              fill="none"
              viewBox="0 0 27 24"
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
            >
              <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
              <path
                className="fill-foreground"
                d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
              ></path>
              <path
                fill="#F1844C"
                d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
              ></path>
            </svg>
          </div>
          {isOpen && (
            <div className="bg-background border-border shadow-3xl absolute top-full right-0 z-10 w-full space-y-2 rounded-b-3xl border border-t-0 px-5 py-4 transition-all duration-300 ease-in-out">
              <H2 className="text-sm md:text-sm lg:text-sm">
                {t("result.title")}
              </H2>
              <List>
                {result.map((item) => (
                  <ListItem
                    key={item}
                    className="text-muted-foreground flex cursor-pointer items-center gap-3 py-1"
                    onClick={() => handlePopularSearch(item)}
                  >
                    <RiSearch2Line className="size-4 shrink-0" />
                    <p className="text-sm">{item}</p>
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
