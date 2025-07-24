// hooks/useIeltsCourse.ts
import { fetcher } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";

export function useProduct(endpoint: string, lang: string = "en") {
  return useQuery({
    queryKey: ["ielts-course", lang],
    queryFn: () => fetcher(`/products/${endpoint}?lang=${lang}`),
  });
}
