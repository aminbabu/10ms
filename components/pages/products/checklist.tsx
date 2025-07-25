"use client";

import { H2, List, ListItem } from "@/components/common/typography";
import { ICheckList } from "@/interfaces/product";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"div"> {
  data: Array<ICheckList>;
  className?: string;
}
const Checklist = ({ data, className }: IProps) => {
  const t = useTranslations("ProductPage");

  return (
    <div className={className}>
      <H2 className="mb-4 text-base md:text-lg lg:text-xl">
        {t("checkList.title")}
      </H2>
      <List className="gap-3">
        {data.map((item, index) => (
          <ListItem key={index} className="flex gap-x-4">
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.text}
                width={20}
                height={20}
                className="size-5 shrink-0 object-contain"
              />
            )}
            {item.text}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Checklist;
