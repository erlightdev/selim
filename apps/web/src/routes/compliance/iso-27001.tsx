import { createFileRoute } from "@tanstack/react-router";

import Iso27001Page from "@/pages/compliance/iso-27001";
import { seo } from "@/components/marketing";

const head = seo({
	title: "ISO 27001 Certification Nepal — ISMS Consulting | Selim",
	description: "End-to-end ISO 27001 support: gap assessment, policy, internal audit and certification readiness with accredited bodies.",
	keywords: "ISO 27001 Nepal, ISMS Nepal, ISO certification Kathmandu",
	path: "/compliance/iso-27001",
});

export const Route = createFileRoute("/compliance/iso-27001")({
	component: Iso27001Page,
	head: () => head,
});
