import { createFileRoute } from "@tanstack/react-router";

import SolutionsIndexPage from "@/pages/solutions/index";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Solutions by Industry — Cyber Security Nepal | Selim",
	description: "Industry-specific cyber security solutions for banking, insurance, government, telecom, healthcare, education and NGOs in Nepal.",
	keywords: "industry cyber security Nepal",
	path: "/solutions",
});

export const Route = createFileRoute("/solutions/")({
	component: SolutionsIndexPage,
	head: () => head,
});
