import { createFileRoute } from "@tanstack/react-router";

import ContactPage from "@/pages/contact";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
	head: () => ({
		meta: [
			{ title: "Contact — Talk to a Security Engineer" },
			{
				name: "description",
				content:
					"Book a 20-minute walkthrough or send your environment details. We map your coverage gaps and show AI-driven defense in your stack.",
			},
			{ name: "robots", content: "index, follow" },
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: "Contact — Talk to a Security Engineer" },
			{
				property: "og:description",
				content:
					"Reach the team. Map your coverage gaps. See AI-driven defense in your stack.",
			},
			{ name: "twitter:card", content: "summary_large_image" },
		],
	}),
});
