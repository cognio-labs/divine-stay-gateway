import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const GalleryPage = lazy(() => import("@/components/site").then((m) => ({ default: m.GalleryPage })));

export const Route = createFileRoute("/gallery")({
  component: () => (
    <Suspense fallback={null}>
      <GalleryPage />
    </Suspense>
  ),
});
