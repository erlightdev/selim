import { createFileRoute } from "@tanstack/react-router";

import EdrPage from "@/pages/services/edr";
import { seo } from "@/components/marketing";

const head = seo({
	title: "EDR — Managed Endpoint Detection & Response | Selim Solution",
	description: "Managed EDR with 24/7 threat hunting, malware analysis and patch advisory. CrowdStrike, SentinelOne and Defender supported.",
	keywords: "EDR Nepal, endpoint security Nepal, managed EDR Kathmandu, threat hunting Nepal",
	path: "/services/edr",
});

export const Route = createFileRoute("/services/edr")({
	component: EdrPage,
	head: () => head,
});
