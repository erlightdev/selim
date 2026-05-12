import { createFileRoute } from "@tanstack/react-router";

import HealthcarePage from "@/pages/solutions/healthcare";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Healthcare Nepal — Patient Data | Selim",
	description: "EMR/EHR security, ransomware resilience and HIPAA-aligned controls for hospitals and clinics in Nepal.",
	keywords: "healthcare cyber security Nepal, hospital security Nepal, EMR security Kathmandu",
	path: "/solutions/healthcare",
});

export const Route = createFileRoute("/solutions/healthcare")({
	component: HealthcarePage,
	head: () => head,
});
