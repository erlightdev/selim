import { createFileRoute } from "@tanstack/react-router";

import GrcPage from "@/pages/services/grc-compliance";
import { seo } from "@/components/marketing";

const head = seo({
	title: "GRC & Compliance — ISO 27001, NIA, PCI-DSS, NRB | Selim",
	description: "GRC consulting for ISO 27001, NIA 2076, PCI-DSS and NRB directives — gap assessment, policy, internal audit and certification readiness.",
	keywords: "GRC Nepal, ISO 27001 Nepal, compliance consulting Kathmandu, NIA 2076",
	path: "/services/grc-compliance",
});

export const Route = createFileRoute("/services/grc-compliance")({
	component: GrcPage,
	head: () => head,
});
