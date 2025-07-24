import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

const Container = ({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"div">) => {
  return (
    <div className={cn("container mx-auto px-4", className)}>{children}</div>
  );
};

export default Container;
