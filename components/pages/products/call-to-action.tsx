import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

const CTAButton = ({ children, className, ...props }: IProps) => {
  return (
    <Button
      className={cn(
        "cursor-pointer bg-green-600 text-base font-medium shadow-[0_4px_0_0] shadow-green-800 hover:bg-green-700 hover:shadow-green-700",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
