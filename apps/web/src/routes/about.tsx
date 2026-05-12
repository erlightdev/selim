import { createFileRoute } from "@tanstack/react-router";

import AboutPage from "@/pages/about";

export const Route = createFileRoute("/about")({
	component: AboutPage,
	head: () => ({
		meta: [
			{
				title: "About — AI-Driven Cybersecurity Built for Modern Threats",
			},
			{
				name: "description",
				content:
					"We build AI-driven cybersecurity that detects, prevents, and responds to threats in real time. Meet the team, mission, and principles behind the platform.",
			},
			{
				name: "robots",
				content: "index, follow",
			},
			{ property: "og:type", content: "website" },
			{
				property: "og:title",
				content: "About — AI-Driven Cybersecurity Built for Modern Threats",
			},
			{
				property: "og:description",
				content:
					"AI-driven threat detection, zero-trust architecture, and 24/7 monitoring — deployed in minutes.",
			},
			{ name: "twitter:card", content: "summary_large_image" },
		],
	}),
});
