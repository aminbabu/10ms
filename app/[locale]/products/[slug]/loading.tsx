import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import CarouselLoader from "@/components/loaders/carousel";
import CTAChecklistLoader from "@/components/loaders/cta-checklist";
import IntroLoader from "@/components/loaders/intro";
import SectionLoader from "@/components/loaders/section";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Main>
      <Section className="relative py-12 lg:py-16">
        <Skeleton className="bg-foreground/40 absolute inset-0 rounded-none" />
        <Container className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12">
          <CarouselLoader className="md:hidden" />
          <IntroLoader />
        </Container>
      </Section>
      <Section className="relative py-12 lg:py-16">
        <Container className="flex flex-col gap-y-8 md:flex-row md:items-start md:gap-x-8 lg:gap-x-12">
          <div className="space-y-12 md:grow md:space-y-16">
            <CTAChecklistLoader className="md:hidden" />
            <SectionLoader />
            <SectionLoader />
            <SectionLoader />
            <SectionLoader />
            <SectionLoader />
          </div>
          <div className="bg-background border-border -mt-60 hidden shrink-0 space-y-6 border p-1.5 shadow-sm md:sticky md:top-20 md:block md:basis-[345px] lg:basis-[400px]">
            <CarouselLoader />
            <CTAChecklistLoader />
          </div>
        </Container>
      </Section>
    </Main>
  );
}
