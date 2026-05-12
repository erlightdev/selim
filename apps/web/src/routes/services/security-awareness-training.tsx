import { createFileRoute } from "@tanstack/react-router";

import AwarenessPage from "@/pages/services/security-awareness-training";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Security Awareness Training Nepal — Phishing & Staff | Selim",
	description: "Bilingual security awareness training, phishing simulation and executive cyber-risk briefings for organisations in Nepal.",
	keywords: "security awareness training Nepal, phishing simulation Kathmandu, staff training cyber Nepal",
	path: "/services/security-awareness-training",
});

export const Route = createFileRoute("/services/security-awareness-training")({
	component: AwarenessPage,
	head: () => head,
});
