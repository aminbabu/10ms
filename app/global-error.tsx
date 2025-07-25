"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="bg-background flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-destructive/10 flex h-16 w-16 items-center justify-center rounded-full">
                  <AlertTriangle className="text-destructive h-8 w-8" />
                </div>
              </div>
              <div className="text-destructive text-6xl font-bold">500</div>
              <h1 className="text-foreground text-2xl font-semibold">
                Application Error
              </h1>
              <p className="text-muted-foreground">
                A critical error occurred. Please try refreshing the page or
                contact support if the problem persists.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button onClick={reset}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
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
          </div>
        </div>
      </body>
    </html>
  );
}
