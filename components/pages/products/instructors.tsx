import Section from "@/components/common/section";
import { H2 } from "@/components/common/typography";
import Instructor from "@/components/pages/products/instructor";
import { IInstructor, ISection } from "@/interfaces/product";

interface IProps {
  data: ISection;
  className?: string;
}

const Instructors = ({ data, className }: IProps) => {
  return (
    <Section>
      <H2 className="mb-4">{data.name}</H2>
      <div className="space-y-5">
        {data.values.map((instructor: IInstructor) => (
          <Instructor key={instructor.slug} data={instructor} />
        ))}
      </div>
    </Section>
  );
};

export default Instructors;
