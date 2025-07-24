import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

export function H1({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"h1">) {
  return (
    <h1 className={cn("text-4xl font-semibold", className)}>{children}</h1>
  );
}

export function H2({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-3xl font-semibold", className)}>{children}</h2>
  );
}

export function H3({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"h3">) {
  return (
    <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>
  );
}

export function H4({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"h4">) {
  return <h4 className={cn("text-xl font-semibold", className)}>{children}</h4>;
}

export function P({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"p">) {
  return (
    <p className={cn("[&:not(:first-child)]:mt-6", className)}>{children}</p>
  );
}

export function Lead({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"p">) {
  return <P className={cn("text-xl", className)}>{children}</P>;
}

export function ListItem({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"li">) {
  return <li className={className}>{children}</li>;
}

export function List({
  children,
  className,
}: { children: ReactNode; className?: string } & ComponentProps<"ul">) {
  return <ul className={cn("grid gap-2", className)}>{children}</ul>;
}
