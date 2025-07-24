import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import Benefits from "@/components/pages/products/benefits";
import Details from "@/components/pages/products/details";
import Features from "@/components/pages/products/featrues";
import Instructors from "@/components/pages/products/instructors";
import Intro from "@/components/pages/products/intro";
import Sidebar from "@/components/pages/products/sidebar";
import Summary from "@/components/pages/products/summary";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container className="grid grid-cols-12 items-start gap-y-8 md:gap-x-8 lg:gap-x-12">
          <div className="col-span-8">
            <Intro />
            <Instructors />
            <Summary />
            <Benefits />
            <Features />
            <Details />
          </div>
          <div className="col-span-4 lg:sticky lg:top-6">
            <Sidebar />
          </div>
        </Container>
      </Section>
    </Main>
  );
}
