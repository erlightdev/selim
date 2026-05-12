import { createFileRoute } from "@tanstack/react-router";

import VaptPage from "@/pages/services/vapt";
import { seo } from "@/components/marketing";

const head = seo({
	title: "VAPT Services Nepal — Pen Testing & Vulnerability Assessment | Selim",
	description: "Web, mobile, network, API and cloud penetration testing — OWASP, PTES, CREST aligned. NIA & NRB-acceptable reports across Nepal.",
	keywords: "VAPT Nepal, penetration testing Kathmandu, vulnerability assessment Nepal, OWASP testing",
	path: "/services/vapt",
});

export const Route = createFileRoute("/services/vapt")({
	component: VaptPage,
	head: () => head,
});
