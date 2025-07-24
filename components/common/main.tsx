import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

const Main = ({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"main">) => {
  return <main className={cn("flex-1", className)}>{children}</main>;
};

export default Main;
