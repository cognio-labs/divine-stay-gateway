import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const AboutPage = lazy(() => import("@/components/site").then((m) => ({ default: m.AboutPage })));

export const Route = createFileRoute("/about")({
  component: () => (
    <Suspense fallback={null}>
      <AboutPage />
    </Suspense>
  ),
});
