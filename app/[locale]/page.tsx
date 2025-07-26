import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import Benefits from "@/components/pages/products/benefits";
import CTAChecklist from "@/components/pages/products/cta-checklist";
import Details from "@/components/pages/products/details";
import Features from "@/components/pages/products/features";
import Instructors from "@/components/pages/products/instructors";
import Intro from "@/components/pages/products/intro";
import Sidebar from "@/components/pages/products/sidebar";
import Summary from "@/components/pages/products/summary";
import { IProduct } from "@/interfaces/product";
import { getProduct } from "@/lib/api/products/get-product";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: IProps): Promise<Metadata | undefined> {
  try {
    const { locale } = await params;
    const product: IProduct = await getProduct("ielts-course", locale);

    const openGraphData =
      product.seo?.defaultMeta?.reduce(
        (acc, meta) => {
          if (meta.type === "property" && meta.value.startsWith("og:")) {
            acc[meta.value.replace("og:", "")] = meta.content;
          }
          return acc;
        },
        {} as Record<string, string>,
      ) ?? {};

    return {
      title: product.seo?.title || product.title || "IELTS Course",
      description:
        product.seo?.description ||
        product.description ||
        "Explore the IELTS Course at 10 Minute School.",
      keywords: product.seo?.keywords ?? [
        "IELTS Course",
        "IELTS Preparation",
        "IELTS Bangladesh",
      ],
      openGraph: {
        title: openGraphData.title || product.title,
        description: openGraphData.description || product.description,
        images: openGraphData.image
          ? [
              {
                url: openGraphData.image,
                alt: openGraphData["image:alt"] || product.title,
              },
            ]
          : [],
        url:
          openGraphData.url ||
          `https://10minuteschool.com/product/ielts-course`,
        type: "website",
        locale: openGraphData.locale || "en_US",
      },
    };
  } catch (error) {
    console.error("Metadata generation failed:", error);
  }
}

export default async function ProductDetails({ params }: IProps) {
  try {
    const { locale } = await params;
    const product: IProduct = await getProduct("ielts-course", locale);

    if (!product) return notFound();

    const { title, description, media, cta_text, checklist, sections } =
      product;

    const intro = { title, description, media };
    const ctaChecklist = { cta_text, checklist };

    const sectionMap = {
      instructors: sections.find((s) => s.type === "instructors"),
      summary: sections.find((s) => s.type === "features"),
      benefits: sections.find((s) => s.type === "pointers"),
      features: sections.find((s) => s.type === "feature_explanations"),
      details: sections.find((s) => s.type === "about"),
    };

    return (
      <Main>
        <Intro data={intro} />
        <Section className="pt-0 lg:pt-0">
          <Container className="flex flex-col gap-y-8 md:flex-row md:gap-x-8 lg:gap-x-12">
            <div className="md:grow">
              <CTAChecklist
                data={ctaChecklist}
                className="border-b-secondary border-b-8 pt-0 sm:border-b-0 md:hidden"
              />
              {sectionMap?.instructors && (
                <Instructors data={sectionMap.instructors} />
              )}
              {sectionMap?.summary && <Summary data={sectionMap.summary} />}
              {sectionMap?.benefits && <Benefits data={sectionMap.benefits} />}
              {sectionMap?.features && <Features data={sectionMap.features} />}
              {sectionMap?.details && <Details data={sectionMap.details} />}
            </div>
            <aside className="hidden shrink-0 md:block md:basis-[345px] lg:basis-[400px]">
              <Sidebar ctaChecklist={ctaChecklist} media={media} />
            </aside>
          </Container>
        </Section>
      </Main>
    );
  } catch (error) {
    console.error("Error rendering product details:", error);
    return notFound();
  }
}
