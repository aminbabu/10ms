import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

const Section = ({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"section">) => {
  return <main className={cn("py-8 lg:py-10", className)}>{children}</main>;
};

export default Section;
