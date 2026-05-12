import { createFileRoute } from "@tanstack/react-router";

import NrbDirectivesPage from "@/pages/compliance/nrb-directives";
import { seo } from "@/components/marketing";

const head = seo({
	title: "NRB IT Directive Compliance Nepal — Banks | Selim Solution",
	description: "Nepal Rastra Bank IT Directive compliance for Class A/B/C/D banks — SOC, VAPT, IT audit and inspection readiness.",
	keywords: "NRB directives Nepal, NRB IT guidelines, bank compliance Nepal",
	path: "/compliance/nrb-directives",
});

export const Route = createFileRoute("/compliance/nrb-directives")({
	component: NrbDirectivesPage,
	head: () => head,
});
