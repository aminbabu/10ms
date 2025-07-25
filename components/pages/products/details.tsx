import HTML from "@/components/common/html";
import Section from "@/components/common/section";
import { H2 } from "@/components/common/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { IAbout, ISection } from "@/interfaces/product";
import { cn } from "@/lib/utils";

interface IProps {
  data: ISection;
  className?: string;
}

const Details = ({ data, className }: IProps) => {
  return (
    <Section className="pb-0 md:pb-6">
      <H2 className="mb-4">{data.name}</H2>
      <Card className={cn("py-5", className)}>
        <CardContent className="px-5">
          <Accordion
            type="single"
            collapsible
            defaultValue={`item-${data.values[0].id}`}
          >
            {data.values.map((item: IAbout) => (
              <AccordionItem
                key={item.id}
                value={`item-${item.id}`}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer hover:no-underline">
                  <HTML
                    data={item.title}
                    className="prose-h2:text-base prose-h2:[&>b]:font-bold"
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <HTML data={item.description} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Details;
