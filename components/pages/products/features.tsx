import Section from "@/components/common/section";
import { H2 } from "@/components/common/typography";
import Feature from "@/components/pages/products/feature";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IFeature, ISection } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface IProps {
  data: ISection;
  className?: string;
}

const Features = ({ data, className }: IProps) => {
  return (
    <Section className="pb-0 md:pb-6">
      <H2 className="mb-4">{data.name}</H2>
      <Card className={cn("py-5", className)}>
        <CardContent className="px-5">
          <div className="space-y-5">
            {data.values.map((feature: IFeature, index: number) => (
              <Fragment key={feature.id}>
                <Feature data={feature} />
                {index < data.values.length - 1 && <Separator />}
              </Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Features;
