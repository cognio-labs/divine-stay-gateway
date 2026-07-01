import { createFileRoute } from "@tanstack/react-router";

import { RoomsPage } from "@/components/site";

export const Route = createFileRoute("/rooms")({
  component: RoomsPage,
});
