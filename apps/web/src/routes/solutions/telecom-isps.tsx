import { createFileRoute } from "@tanstack/react-router";

import TelecomPage from "@/pages/solutions/telecom-isps";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Telecom & ISPs Nepal | Selim Solution",
	description: "Carrier-grade SOC, DDoS mitigation and OT/ICS hardening for telecom operators and ISPs in Nepal.",
	keywords: "telecom security Nepal, ISP cyber security, DDoS mitigation Nepal",
	path: "/solutions/telecom-isps",
});

export const Route = createFileRoute("/solutions/telecom-isps")({
	component: TelecomPage,
	head: () => head,
});
