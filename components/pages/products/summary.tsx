import Section from "@/components/common/section";
import { H2 } from "@/components/common/typography";
import SummaryItem from "@/components/pages/products/summary-item";
import { Card, CardContent } from "@/components/ui/card";
import { ISection, ISummaryItem } from "@/interfaces/product";
import { cn } from "@/lib/utils";

interface IProps {
  data: ISection;
  className?: string;
}

const Summary = ({ data, className }: IProps) => {
  return (
    <Section>
      <H2 className="mb-4">{data.name}</H2>
      <Card className={cn("bg-primary py-5", className)}>
        <CardContent className="px-5">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {data.values.map((summaryItem: ISummaryItem) => (
              <SummaryItem
                key={summaryItem.id}
                data={summaryItem}
                className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Summary;
