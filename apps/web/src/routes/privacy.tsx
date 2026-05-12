import { createFileRoute } from "@tanstack/react-router";

import PrivacyPage from "@/pages/privacy";

export const Route = createFileRoute("/privacy")({
	component: PrivacyPage,
	head: () => ({
		meta: [
			{ title: "Privacy Policy — Selim Solution" },
			{
				name: "description",
				content:
					"How Selim Solution collects, uses, and protects personal data — for visitors, clients, and assessment requesters.",
			},
			{ name: "robots", content: "index, follow" },
		],
	}),
});
