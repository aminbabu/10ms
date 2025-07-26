// lib/fetcher.ts
import { API_BASE_URL } from "@/lib/constants";

export interface FetcherOptions extends RequestInit {
  headers?: HeadersInit;
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

export async function fetcher<T = unknown>(
  endpoint: string,
  options: FetcherOptions = {},
): Promise<T> {
  const { headers, ...rest } = options;
  const url = `${API_BASE_URL}${endpoint}`;

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetcher error:", error.message);
      throw new Error(error.message);
    }

    console.error("Fetcher error:", error);
    throw new Error("Failed to fetch data");
  }
}
