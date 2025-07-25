import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import Benefits from "@/components/pages/products/benefits";
import CTAChecklist from "@/components/pages/products/cta-checklist";
import Details from "@/components/pages/products/details";
import Features from "@/components/pages/products/features"; // Fixed typo in import
import Instructors from "@/components/pages/products/instructors";
import Intro from "@/components/pages/products/intro";
import Sidebar from "@/components/pages/products/sidebar";
import Summary from "@/components/pages/products/summary";
import { IProduct } from "@/interfaces/product";
import { getProduct } from "@/lib/api/products/get-product";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface IProps {
  params: { slug: string };
}

type OpenGraphType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const product = await getProduct<IProduct>(slug);

    // Extract OpenGraph metadata from the seo.defaultMeta array
    const openGraphData =
      product.seo?.defaultMeta?.reduce(
        (acc, meta) => {
          if (meta.type === "property" && meta.value.startsWith("og:")) {
            acc[meta.value.replace("og:", "")] = meta.content;
          }
          return acc;
        },
        {} as Record<string, string>,
      ) || {};

    return {
      title: product?.seo?.title || product?.title || "IELTS Course",
      description:
        product?.seo?.description ||
        product?.description ||
        "Explore the IELTS Course at 10 Minute School.",
      keywords: product?.seo?.keywords || [
        "IELTS Course",
        "IELTS Preparation",
        "IELTS Bangladesh",
      ],
      openGraph: {
        title: openGraphData?.title || product?.title,
        description: openGraphData?.description || product?.description,
        images: openGraphData?.image
          ? [
              {
                url: openGraphData?.image,
                alt: openGraphData["image:alt"] || product?.title,
              },
            ]
          : [],
        url: openGraphData?.url || `https://10minuteschool.com/product/${slug}`,
        type: "website",
        locale: openGraphData?.locale || "en_US",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "IELTS Course",
      description: "Explore the IELTS Course at 10 Minute School.",
      keywords: ["IELTS Course", "IELTS Preparation", "IELTS Bangladesh"],
    };
  }
}

export default async function ProductDetails({ params }: IProps) {
  try {
    const { slug } = await params;

    if (!slug) {
      throw new Error("Missing slug");
    }

    const product = await getProduct<IProduct>(slug);

    if (!product) {
      throw new Error("Product not found");
    }

    const intro = {
      title: product.title,
      description: product.description,
      media: product.media,
    };
    const media = product.media;
    const ctaChecklist = {
      cta_text: product.cta_text,
      checklist: product.checklist,
    };
    const instructors = product.sections.find(
      (section) => section.type === "instructors",
    );
    const summary = product.sections.find(
      (section) => section.type === "features",
    );

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
              <Instructors data={instructors} />
              <Summary data={summary} />
              <Benefits data={product} />
              <Features data={product} />
              <Details data={product} />
            </div>
            <div className="hidden shrink-0 md:block md:basis-[345px] lg:basis-[400px]">
              <Sidebar ctaChecklist={ctaChecklist} media={media} />
            </div>
          </Container>
        </Section>
      </Main>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return notFound();
  }
}
