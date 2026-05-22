"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/** Vercel Web Analytics + Speed Insights (production checklist). */
export function VercelInsights() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
