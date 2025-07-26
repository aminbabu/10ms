import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"div"> {
  children?: ReactNode;
  img?: string;
  className?: string;
}

const BgHolder = ({ children, img, className }: IProps) => {
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
