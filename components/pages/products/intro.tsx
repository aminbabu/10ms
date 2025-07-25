"use client";

import BgHolder from "@/components/common/bg-holder";
import Container from "@/components/common/container";
import HTML from "@/components/common/html";
import RatingStars from "@/components/common/rating-stars";
import Section from "@/components/common/section";
import { H1 } from "@/components/common/typography";
import Trailers from "@/components/pages/products/trailers";
import { IMedia } from "@/interfaces/product";
import { MOBILE_BREAKPOINT } from "@/lib/constants";
import { IIntroStore, useIntroStore } from "@/store/use-intro";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

interface IProps {
  data: {
    title: string;
    description: string;
    media: IMedia;
  };
  className?: string;
}

const Intro = ({ data, className }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const setHeight = useIntroStore<IIntroStore>((state) => state.setHeight);
  const t = useTranslations("ProductPage");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (ref.current && width >= MOBILE_BREAKPOINT) {
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
      <Container className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12">
        <Trailers className="md:hidden" data={data.media} />
        <div className="md:basis-[calc(100%-377px)] lg:basis-[calc(100%-448px)]">
          <H1 className="text-background">{data.title}</H1>
          <div className="text-background mb-2 flex flex-wrap items-center gap-2 text-sm lg:text-base">
            <RatingStars />({t("rating.text")})
          </div>
          <HTML
            className="prose-p:text-background/60"
            data={data.description}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Intro;
