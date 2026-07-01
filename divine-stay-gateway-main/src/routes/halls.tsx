import { createFileRoute } from "@tanstack/react-router";

import { HallsPage } from "@/components/site";

export const Route = createFileRoute("/halls")({
  component: HallsPage,
});
