import { createFileRoute } from "@tanstack/react-router";

import WorksPage from "@/pages/works";

export const Route = createFileRoute("/works")({
	component: WorksPage,
});
