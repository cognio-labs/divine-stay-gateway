import { createFileRoute } from "@tanstack/react-router";

import { GalleryPage } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});
