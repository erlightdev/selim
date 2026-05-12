import { createFileRoute } from "@tanstack/react-router";

import TermsPage from "@/pages/terms";

export const Route = createFileRoute("/terms")({
	component: TermsPage,
	head: () => ({
		meta: [
			{ title: "Terms of Service — Selim Solution" },
			{
				name: "description",
				content:
					"Terms governing use of selimsolution.com and the free resources we publish.",
			},
			{ name: "robots", content: "index, follow" },
		],
	}),
});
