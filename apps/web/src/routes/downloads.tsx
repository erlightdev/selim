import { createFileRoute } from "@tanstack/react-router";

import DownloadsPage from "@/pages/downloads";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Free Cybersecurity Resources & Templates — Nepal | Selim",
	description: "Free downloads: company profile, VAPT pricing, NIA 2076 checklist, cyber self-assessment template and incident response plan.",
	keywords: "cybersecurity templates Nepal, free IR plan, NIA checklist download",
	path: "/downloads",
});

export const Route = createFileRoute("/downloads")({
	component: DownloadsPage,
	head: () => head,
});
