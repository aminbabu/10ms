import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

const BgHolder = ({
  children,
  img,
  className,
}: {
  children: ReactNode;
  img?: string;
  className?: string;
} & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-[1] overflow-hidden bg-cover bg-center bg-no-repeat",
        className,
      )}
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
};

export default BgHolder;
