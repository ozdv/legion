"use client";

import { ThemeProvider } from "next-themes";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    person_profiles: "always",
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
