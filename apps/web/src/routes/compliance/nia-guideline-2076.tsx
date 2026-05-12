import { createFileRoute } from "@tanstack/react-router";

import Nia2076Page from "@/pages/compliance/nia-guideline-2076";
import { seo } from "@/components/marketing";

const head = seo({
	title: "NIA Guideline 2076 Compliance Nepal | Selim Solution",
	description: "Nepal Insurance Authority annual VAPT, IT infrastructure review and policy controls — built for every Nepali insurer.",
	keywords: "NIA 2076 Nepal, insurance compliance Nepal, NIA VAPT",
	path: "/compliance/nia-guideline-2076",
});

export const Route = createFileRoute("/compliance/nia-guideline-2076")({
	component: Nia2076Page,
	head: () => head,
});
