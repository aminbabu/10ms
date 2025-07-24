// lib/fetcher.ts
import { API_BASE_URL } from "@/lib/constants";

export interface FetcherOptions extends RequestInit {
  headers?: HeadersInit;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

export async function fetcher<T = any>(
  endpoint: string,
  options: FetcherOptions = {},
): Promise<T> {
  const { headers, ...rest } = options;
  const url = `${API_BASE_URL}/${endpoint}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-TENMS-SOURCE-PLATFORM": "web",
        ...headers,
      },
      ...rest,
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const message = errorBody?.message || `Request failed: ${res.status}`;
      throw new Error(message);
    }

    const data = await res.json().catch(() => {
      throw new Error("Failed to parse response as JSON");
    });

    return data?.data;
  } catch (error: any) {
    console.error("Fetcher error:", error?.message ?? error);
    throw new Error(error?.message || "Failed to fetch data");
  }
}
