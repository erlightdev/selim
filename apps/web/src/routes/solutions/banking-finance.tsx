import { createFileRoute } from "@tanstack/react-router";

import BankingFinancePage from "@/pages/solutions/banking-finance";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Banking & Finance Nepal | Selim Solution",
	description: "SOC, VAPT and GRC for Nepali banks and finance companies — NRB IT directive aligned, fraud detection, PCI-DSS and SWIFT CSCF support.",
	keywords: "banking cyber security Nepal, NRB compliance, fraud detection bank Nepal",
	path: "/solutions/banking-finance",
});

export const Route = createFileRoute("/solutions/banking-finance")({
	component: BankingFinancePage,
	head: () => head,
});
