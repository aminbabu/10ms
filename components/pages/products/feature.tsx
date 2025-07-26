import { H3, List, ListItem } from "@/components/common/typography";
import { IFeature } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { RiCheckLine } from "@remixicon/react";
import Image from "next/image";

interface IProps {
  data: IFeature;
  className?: string;
}

const Feature = ({ data, className }: IProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-x-4 gap-y-6 sm:flex-row md:flex-col lg:flex-row lg:items-start",
        className,
      )}
    >
      <div>
        <H3 className="mb-3 md:text-base lg:text-base">{data.title}</H3>
        <List>
          {data.checklist.map((item) => (
            <ListItem key={item} className="flex gap-3">
              <RiCheckLine className="shrink-0 text-blue-500" />
              <p>{item}</p>
            </ListItem>
          ))}
        </List>
      </div>
      <Image
        src={data.file_url}
        alt={data.title}
        width={440}
        height={440}
        className="aspect-square size-64 shrink-0 object-contain sm:size-1/3 md:size-64 lg:size-1/3"
      />
    </div>
  );
};

export default Feature;
