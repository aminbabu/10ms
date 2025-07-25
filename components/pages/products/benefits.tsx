import Section from "@/components/common/section";
import { H2 } from "@/components/common/typography";
import Benefit from "@/components/pages/products/benefit";
import { Card, CardContent } from "@/components/ui/card";
import { IBenefit, ISection } from "@/interfaces/product";
import { cn } from "@/lib/utils";

interface IProps {
  data: ISection;
  className?: string;
}

const Benefits = ({ data, className }: IProps) => {
  return (
    <Section className="pb-0 md:pb-6">
      <H2 className="mb-4">{data.name}</H2>
      <Card
        className={cn(
          "border-b-secondary rounded-none border-0 border-b-8 pt-0 shadow-none sm:rounded-xl sm:border-b-0 md:border md:py-5 md:shadow-sm",
          className,
        )}
      >
        <CardContent className="px-0 md:px-5">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4">
            {data.values.map((benefit: IBenefit) => (
              <Benefit
                key={benefit.id}
                data={benefit}
                className="col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Benefits;
