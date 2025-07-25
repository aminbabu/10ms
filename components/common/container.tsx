import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
