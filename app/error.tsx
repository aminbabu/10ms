"use client";

import Container from "@/components/common/container";
import Main from "@/components/common/main";
import Section from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";

import "@/app/globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface IProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function NotFound({ error, reset }: IProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
                <div className="flex justify-center">
                  <div className="bg-destructive/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <AlertTriangle className="text-destructive h-8 w-8" />
                  </div>
                </div>
                <div className="text-destructive text-6xl font-bold">500</div>
                <h1 className="text-foreground text-2xl font-semibold">
                  Something went wrong
                </h1>
                <p className="text-muted-foreground">
                  We encountered an unexpected error. Our team has been notified
                  and is working to fix the issue.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button onClick={reset}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
              </div>

              <div className="border-border border-t pt-8">
                <details className="text-left">
                  <summary className="text-muted-foreground hover:text-foreground cursor-pointer text-sm">
                    Technical Details
                  </summary>
                  <div className="bg-muted text-muted-foreground mt-2 rounded-md p-3 font-mono text-xs break-all">
                    {error.message}
                    {error.digest && (
                      <div className="mt-1">Error ID: {error.digest}</div>
                    )}
                  </div>
                </details>
              </div>
            </Container>
          </Section>
        </Main>
      </body>
    </html>
  );
}
