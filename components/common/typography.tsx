import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: IProps & ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: IProps & ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "mb-2 text-xl font-semibold md:text-2xl lg:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className }: IProps & ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "mb-2 text-lg font-semibold md:text-xl lg:text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: IProps & ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "mb-2 text-base font-semibold md:text-lg lg:text-xl",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, className }: IProps & ComponentProps<"p">) {
  return (
    <p className={cn("[&:not(:first-child)]:mt-6", className)}>{children}</p>
  );
}

export function Lead({ children, className }: IProps & ComponentProps<"p">) {
  return <P className={cn("text-xl", className)}>{children}</P>;
}

export function ListItem({
  children,
  className,
}: IProps & ComponentProps<"li">) {
  return <li className={className}>{children}</li>;
}

export function List({ children, className }: IProps & ComponentProps<"ul">) {
  return <ul className={cn("grid gap-2", className)}>{children}</ul>;
}
