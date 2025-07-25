import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"section"> {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className, ...props }: IProps) => {
  return (
    <section className={cn("py-6 lg:py-12", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
