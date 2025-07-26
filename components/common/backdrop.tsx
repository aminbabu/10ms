import { cn } from "@/lib/utils";

interface IProps {
  show?: boolean;
  className?: string;
}

const Backdrop = ({ show = false, className }: IProps) => {
  return (
    <div
      className={cn(
        "bg-foreground/50 pointer-events-none fixed inset-0 top-16 -z-10 opacity-0 transition-all duration-300 ease-in-out",
        {
          "pointer-events-auto opacity-100": show,
        },
        className,
      )}
    ></div>
  );
};

export default Backdrop;
