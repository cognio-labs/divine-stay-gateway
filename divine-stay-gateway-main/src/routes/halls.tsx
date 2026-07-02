import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const HallsPage = lazy(() => import("@/components/site").then((m) => ({ default: m.HallsPage })));

export const Route = createFileRoute("/halls")({
  component: () => (
    <Suspense fallback={null}>
      <HallsPage />
    </Suspense>
  ),
});
