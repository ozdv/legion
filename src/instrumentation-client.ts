import posthog from "posthog-js";

// Runs once in the browser before the app hydrates (Next.js 15.3+).
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  // Opts into PostHog's current recommended behaviour, including SPA
  // pageviews on App Router navigations ("history_change") and pageleave.
  defaults: "2026-08-30",
  person_profiles: "always",
  enable_heatmaps: true,
  capture_dead_clicks: true,
  session_recording: {
    // Contact form fields contain names/emails; never record what people type.
    maskAllInputs: true,
  },
  loaded: (ph) => {
    ph.register({ app: "legion" });
    if (process.env.NODE_ENV === "development") ph.opt_out_capturing();
  },
});
