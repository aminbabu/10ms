"use client";

import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import { cn } from "@/lib/utils";
import { Geist_Mono, Inter } from "next/font/google";
import { useRouter } from "next/navigation";

import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function GlobalNotFound() {
  const router = useRouter();

  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-dvh flex-col overflow-x-hidden font-sans antialiased",
          geistMono.variable,
          inter.variable,
        )}
      >
        <Main>
          <Section className="flex min-h-dvh items-center justify-center px-4">
            <Container className="max-w-md space-y-8 text-center">
              <div className="space-y-4">
                <div className="text-primary text-6xl font-bold">404</div>
                <h1 className="text-foreground text-2xl font-semibold">
                  Page Not Found
                </h1>
                <p className="text-muted-foreground">
                  Sorry, we couldn&apos;t find the page you&apos;re looking for.
                  The page might have been moved, deleted, or you entered the
                  wrong URL.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => router.back()}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>

              <div className="border-border border-t pt-8">
                <p className="text-muted-foreground text-sm">
                  If you believe this is an error, please{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    contact support
                  </Link>
                </p>
              </div>
            </Container>
          </Section>
        </Main>
      </body>
    </html>
  );
}
