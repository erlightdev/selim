import { createFileRoute } from "@tanstack/react-router";

import GovernmentPage from "@/pages/solutions/government";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Government & Public Sector Nepal | Selim",
	description: "E-governance security, citizen data protection and national cyber framework alignment for ministries and agencies in Nepal.",
	keywords: "government cyber security Nepal, e-governance security, public sector cyber Kathmandu",
	path: "/solutions/government",
});

export const Route = createFileRoute("/solutions/government")({
	component: GovernmentPage,
	head: () => head,
});
