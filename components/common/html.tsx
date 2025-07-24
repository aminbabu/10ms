import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import { ComponentProps } from "react";

const HTML = ({
  data,
  className,
  ...props
}: { data: string; className?: string } & ComponentProps<"div">) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      className={cn("prose max-w-none", className)}
      {...props}
    />
  );
};

export default HTML;
