import { createFileRoute } from "@tanstack/react-router";

import CaseStudiesPage from "@/pages/case-studies";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});
