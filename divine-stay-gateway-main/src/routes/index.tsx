import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/components/site").then((m) => ({ default: m.HomePage })));

export const Route = createFileRoute("/")({
  component: () => (
    <Suspense fallback={null}>
      <HomePage />
    </Suspense>
  ),
});
