import { cn } from "@/lib/utils";

interface IProps {
  show?: boolean;
}

const Backdrop = ({ show = false }: IProps) => {
  return (
    <div
      className={cn(
        "bg-foreground/50 pointer-events-none fixed inset-0 top-16 -z-10 opacity-0 transition-all duration-300 ease-in-out",
        {
          "pointer-events-auto opacity-100": show,
        },
      )}
    ></div>
  );
};

export default Backdrop;
