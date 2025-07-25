import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"main"> {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: IProps) => {
  return <main className={cn("flex-1", className)}>{children}</main>;
};

export default Main;
