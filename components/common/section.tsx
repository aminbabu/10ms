import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

const Section = ({
  children,
  className,
  ...props
}: { children: ReactNode; className?: string } & ComponentProps<"section">) => {
  return (
    <section className={cn("py-6 lg:py-12", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
