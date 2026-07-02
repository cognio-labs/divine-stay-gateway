import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const RoomsPage = lazy(() => import("@/components/site").then((m) => ({ default: m.RoomsPage })));

export const Route = createFileRoute("/rooms")({
  component: () => (
    <Suspense fallback={null}>
      <RoomsPage />
    </Suspense>
  ),
});
