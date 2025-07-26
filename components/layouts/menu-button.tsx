"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/store/use-menu";
import { RiMenuUnfoldLine } from "@remixicon/react";

interface IProps {
  className?: string;
}

function MenuButton({ className }: IProps) {
  const isOpen = useMenuStore((state) => state.isOpen);
  const toggle = useMenuStore((state) => state.toggle);

  return (
    <Button variant="ghost" size="icon" onClick={toggle} className={className}>
      <RiMenuUnfoldLine
        className={cn("transition-transform duration-300 ease-in-out", {
          "rotate-180": isOpen,
        })}
      />
    </Button>
  );
}

export default MenuButton;
