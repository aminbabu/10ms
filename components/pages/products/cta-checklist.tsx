"use client";

import CTAButton from "@/components/pages/products/call-to-action";
import Checklist from "@/components/pages/products/checklist";
import { ICheckList, ICTAText } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"div"> {
  data: {
    cta_text: ICTAText;
    checklist: Array<ICheckList>;
  };
  className?: string;
}

const CTAChecklist = ({ data, className }: IProps) => {
  const handleClick = () => {
    console.log("Navigating to checkout");
  };

  return (
    <div className={cn("py-6 md:py-12", className)}>
      <p className="mt-4 mb-2 text-2xl font-semibold md:mt-0 md:mb-5">৳1000</p>
      <CTAButton className="h-8 w-full sm:h-10" onClick={handleClick}>
        {data.cta_text.name}
      </CTAButton>
      <Checklist data={data.checklist} className="mt-8" />
    </div>
  );
};

export default CTAChecklist;
