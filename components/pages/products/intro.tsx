"use client";

import BgHolder from "@/components/common/bg-holder";
import Container from "@/components/common/container";
import HTML from "@/components/common/html";
import RatingStars from "@/components/common/rating-stars";
import Section from "@/components/common/section";
import { H1 } from "@/components/common/typography";
import Trailers from "@/components/pages/products/trailers";
import { IIntroStore, useIntroStore } from "@/store/use-intro";
import { useEffect, useRef } from "react";

interface Props {
  data: {
    title: string;
    description: string;
  };
  className?: string;
}

const Intro = ({ data, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const setHeight = useIntroStore<IIntroStore>((state) => state.setHeight);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (ref.current && width >= 1024) {
        const computedStyle = getComputedStyle(ref.current);
        const paddingTop = parseFloat(computedStyle.paddingTop);
        const height = ref.current.clientHeight - paddingTop;
        setHeight(height);
      }
    };

    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section className="relative py-12 lg:py-16" ref={ref}>
      <BgHolder img="/images/products/banner.jpeg" />
      <Container className="grid grid-cols-12 items-start gap-y-8 md:gap-x-8 lg:gap-x-12">
        <Trailers className="col-span-12 lg:hidden" />
        <div className="col-span-12 lg:col-span-8">
          <H1 className="text-background">{data?.title}</H1>
          <div className="text-background mb-2 flex flex-wrap items-center gap-2 text-sm lg:text-base">
            <RatingStars />
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </div>
          <HTML
            className="prose-p:text-background/60"
            data={data?.description}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
