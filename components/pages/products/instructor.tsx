import HTML from "@/components/common/html";
import { H3 } from "@/components/common/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { IInstructor } from "@/interfaces/product";
import { RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";

interface IProps {
  data: IInstructor;
  className?: string;
}

const Instructor = ({ data, className }: IProps) => {
  const nameParts = data.name.split(" ");
  return (
    <Card className="border-0 py-0 shadow-none md:border md:py-5 md:shadow-sm">
      <CardContent className="flex gap-4 overflow-hidden px-0 md:px-5">
        <Avatar className="size-[74px]">
          <AvatarImage src={data.image} />
          <AvatarFallback>
            {nameParts[0].charAt(0)}
            {nameParts[1].charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <H3 className="lg:text-lg">
            {data.has_instructor_page ? (
              <Link
                href={`/instructor/${data.slug}`}
                className="group inline-flex items-center transition-colors duration-300 hover:text-green-600"
              >
                {data.name}
                <RiArrowRightSLine className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              data.name
            )}
          </H3>
          <HTML data={data.description} className="-mb-9 text-sm" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Instructor;
