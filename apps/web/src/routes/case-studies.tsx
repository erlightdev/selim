import { createFileRoute } from "@tanstack/react-router";

import CaseStudiesPage from "@/pages/case-studies";

export const Route = createFileRoute("/case-studies")({
	component: CaseStudiesPage,
	head: () => ({
		meta: [
			{ title: "Case Studies — Real Threats, Real Outcomes" },
			{
				name: "description",
				content:
					"How fintech, healthcare, and logistics teams stopped breaches, contained ransomware, and unified threat surfaces with AI-driven defense.",
			},
			{ name: "robots", content: "index, follow" },
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: "Case Studies — Real Threats, Real Outcomes" },
			{
				property: "og:description",
				content:
					"Threat mitigation, response times, and zero-trust outcomes from production deployments.",
			},
			{ name: "twitter:card", content: "summary_large_image" },
		],
	}),
});
