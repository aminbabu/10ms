import CallToAction from "@/components/pages/products/call-to-action";
import Checklist from "@/components/pages/products/checklist";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const CTAChecklist = ({
  className,
}: { className?: string } & ComponentProps<"div">) => {
  return (
    <div className={cn("py-6 lg:py-12", className)}>
      <CallToAction />
      <Checklist />
    </div>
  );
};

export default CTAChecklist;
