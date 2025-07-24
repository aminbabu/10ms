// lib/api/products/get-product.ts
import { Product } from "@/interfaces/product";
import { fetcher } from "@/lib/fetcher";

export async function getProduct(
  slug: string,
  revalidate: number = 60,
): Promise<Product> {
  try {
    const product = await fetcher<Product>(`products/${slug}?lang=en`, {
      next: {
        revalidate,
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
