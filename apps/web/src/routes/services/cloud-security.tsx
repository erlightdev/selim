import { createFileRoute } from "@tanstack/react-router";

import CloudSecurityPage from "@/pages/services/cloud-security";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cloud Security Services Nepal — AWS, Azure, GCP | Selim Solution",
	description: "Multi-cloud posture management, CSPM, IAM hardening and zero-trust architecture for cloud-first enterprises in Nepal.",
	keywords: "cloud security Nepal, AWS security Kathmandu, Azure security Nepal, CSPM Nepal",
	path: "/services/cloud-security",
});

export const Route = createFileRoute("/services/cloud-security")({
	component: CloudSecurityPage,
	head: () => head,
});
