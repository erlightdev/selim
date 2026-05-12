import { createFileRoute } from "@tanstack/react-router";

import PciDssPage from "@/pages/compliance/pci-dss";
import { seo } from "@/components/marketing";

const head = seo({
	title: "PCI-DSS Compliance Nepal — Cardholder Data | Selim Solution",
	description: "Scoping, gap assessment, remediation and ASV scan coordination for PCI-DSS v4.0 compliance in Nepal.",
	keywords: "PCI-DSS Nepal, payment card security Nepal, ASV scan Nepal",
	path: "/compliance/pci-dss",
});

export const Route = createFileRoute("/compliance/pci-dss")({
	component: PciDssPage,
	head: () => head,
});
