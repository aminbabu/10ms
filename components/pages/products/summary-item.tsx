import { H3 } from "@/components/common/typography";
import { ISummaryItem } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  data: ISummaryItem;
  className?: string;
}

const SummaryItem = ({ data, className }: IProps) => {
  return (
    <div className={cn("flex gap-3", className)}>
      <Image
        src={data.icon}
        alt={data.title}
        width={72}
        height={72}
        className="size-9 shrink-0 object-contain"
      />
      <div className="flex-1">
        <H3 className="text-background lg:text-lg">{data.title}</H3>
        <p className="text-background/70 text-sm">{data.subtitle}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
