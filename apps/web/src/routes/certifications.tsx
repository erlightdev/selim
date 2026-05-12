import { createFileRoute } from "@tanstack/react-router";

import CertificationsPage from "@/pages/certifications";

export const Route = createFileRoute("/certifications")({
	component: CertificationsPage,
	head: () => ({
		meta: [
			{
				title: "Certifications — Selim Solution",
			},
			{
				name: "description",
				content:
					"Team certifications and frameworks delivered by Selim Solution — CISSP, CISM, CEH, ISO 27001, NIA 2076, NRB directives, PCI-DSS, NIST CSF.",
			},
			{ name: "robots", content: "index, follow" },
		],
	}),
});
