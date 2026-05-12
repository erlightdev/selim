import { createFileRoute } from "@tanstack/react-router";

import InsurancePage from "@/pages/solutions/insurance";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Insurance Nepal — NIA 2076 | Selim Solution",
	description: "NIA Guideline 2076 compliance, annual VAPT and IT infrastructure review for insurers across Nepal.",
	keywords: "insurance cyber Nepal, NIA 2076 compliance, insurance VAPT Nepal",
	path: "/solutions/insurance",
});

export const Route = createFileRoute("/solutions/insurance")({
	component: InsurancePage,
	head: () => head,
});
