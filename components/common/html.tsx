import { cn } from "@/lib/utils";
import DOMPurify from "isomorphic-dompurify";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"div"> {
  data: string;
  className?: string;
}

const HTML = ({ data, className, ...props }: IProps) => {
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
