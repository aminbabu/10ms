// lib/api/products/get-product.ts
import { IProduct } from "@/interfaces/product";
import { fetcher } from "@/lib/fetcher";

export async function getProduct(
  slug: string,
  lang: string = "en",
  revalidate: number = 60,
  cache: "no-cache" | "no-store" | "reload" = "no-store",
): Promise<IProduct> {
  try {
    const product = await fetcher<IProduct>(`/products/${slug}?lang=${lang}`, {
      next: {
        revalidate,
        cache,
        tags: ["product"],
      },
    });

    return product;
  } catch (error: unknown) {
    const err = error as Error;

    console.error(`Failed to fetch product [${slug}]:`, err.message);

    throw new Error("Unable to load product. Please try again later.");
  }
}
