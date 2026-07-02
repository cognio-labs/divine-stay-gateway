import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const ContactPage = lazy(() => import("@/components/site").then((m) => ({ default: m.ContactPage })));

export const Route = createFileRoute("/contact")({
  component: () => (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  ),
});
