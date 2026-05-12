import { createFileRoute } from "@tanstack/react-router";

import SocPage from "@/pages/services/soc";
import { seo } from "@/components/marketing";

const head = seo({
	title: "SOC as a Service — 24/7 Managed Detection | Selim Solution",
	description: "24/7 SIEM monitoring, threat detection and incident response from our Kathmandu SOC. NRB & NIA-aligned reporting for Nepali enterprises.",
	keywords: "SOC Nepal, managed SIEM Nepal, threat detection Kathmandu, MDR Nepal",
	path: "/services/soc",
});

export const Route = createFileRoute("/services/soc")({
	component: SocPage,
	head: () => head,
});
