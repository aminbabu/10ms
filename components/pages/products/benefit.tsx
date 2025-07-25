import { IBenefit } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { RiCheckLine } from "@remixicon/react";

interface IProps {
  data: IBenefit;
  className?: string;
}

const Benefit = ({ data, className }: IProps) => {
  return (
    <div className={cn("flex gap-3", className)}>
      <RiCheckLine className="size-5 shrink-0 text-blue-500" />
      <p>{data.text}</p>
    </div>
  );
};

export default Benefit;
