import DOMPurify from "isomorphic-dompurify";
import { ComponentProps } from "react";

const HTML = ({ data, ...props }: { data: string } & ComponentProps<"div">) => {
  const sanitizedHtml = DOMPurify.sanitize(data);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} {...props} />;
};

export default HTML;
