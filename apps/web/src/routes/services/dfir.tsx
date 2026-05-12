import { createFileRoute } from "@tanstack/react-router";

import DfirPage from "@/pages/services/dfir";
import { seo } from "@/components/marketing";

const head = seo({
	title: "DFIR — Digital Forensics & Incident Response | Selim Solution",
	description: "Post-breach forensics, malware analysis, recovery advisory and courtroom-ready reporting. 24/7 DFIR hotline for retainer clients in Nepal.",
	keywords: "DFIR Nepal, digital forensics Kathmandu, incident response Nepal, malware analysis",
	path: "/services/dfir",
});

export const Route = createFileRoute("/services/dfir")({
	component: DfirPage,
	head: () => head,
});
