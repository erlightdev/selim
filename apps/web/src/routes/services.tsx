import { createFileRoute } from "@tanstack/react-router";

import ServicesPage from "@/pages/services";

export const Route = createFileRoute("/services")({
	component: ServicesPage,
	head: () => ({
		meta: [
			{ title: "Services — AI-Driven Cybersecurity Platform" },
			{
				name: "description",
				content:
					"Threat detection, zero-trust identity, endpoint EDR/XDR, cloud workload protection, SOC operations, and compliance — one unified platform.",
			},
			{ name: "robots", content: "index, follow" },
			{ property: "og:type", content: "website" },
			{
				property: "og:title",
				content: "Services — AI-Driven Cybersecurity Platform",
			},
			{
				property: "og:description",
				content:
					"Every layer of defense — endpoint, identity, cloud — on one correlated surface.",
			},
			{ name: "twitter:card", content: "summary_large_image" },
		],
	}),
});
