import { createFileRoute } from "@tanstack/react-router";

import ComplianceIndexPage from "@/pages/compliance/index";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Compliance & Frameworks — ISO, NIA, PCI, NRB | Selim",
	description: "Compliance frameworks we deliver: ISO 27001, NIA 2076, PCI-DSS, NIST CSF and NRB IT Directives — for Nepali organisations.",
	keywords: "compliance frameworks Nepal",
	path: "/compliance",
});

export const Route = createFileRoute("/compliance/")({
	component: ComplianceIndexPage,
	head: () => head,
});
