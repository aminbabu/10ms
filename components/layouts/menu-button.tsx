"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/store/use-menu";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "@remixicon/react";

interface IProps {
  className?: string;
}

function MenuButton({ className }: IProps) {
  const isOpen = useMenuStore((state) => state.isOpen);
  const toggle = useMenuStore((state) => state.toggle);

  return (
    <Button
      variant="link"
      onClick={toggle}
      className={cn("size-8 hover:no-underline md:size-9", className)}
    >
      {isOpen ? (
        <RiMenuFoldLine className="transition-transform duration-300 ease-in-out" />
      ) : (
        <RiMenuUnfoldLine className="transition-transform duration-300 ease-in-out" />
      )}
    </Button>
  );
}

export default MenuButton;
