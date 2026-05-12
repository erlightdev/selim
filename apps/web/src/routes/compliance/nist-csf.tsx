import { createFileRoute } from "@tanstack/react-router";

import NistCsfPage from "@/pages/compliance/nist-csf";
import { seo } from "@/components/marketing";

const head = seo({
	title: "NIST CSF Maturity Assessment Nepal | Selim Solution",
	description: "NIST CSF 2.0 profile, gap analysis and multi-year roadmap — map cyber risk to business priorities.",
	keywords: "NIST CSF Nepal, cyber maturity assessment Nepal, NIST framework Kathmandu",
	path: "/compliance/nist-csf",
});

export const Route = createFileRoute("/compliance/nist-csf")({
	component: NistCsfPage,
	head: () => head,
});
