import { createFileRoute } from "@tanstack/react-router";

import EducationNgosPage from "@/pages/solutions/education-ngos";
import { seo } from "@/components/marketing";

const head = seo({
	title: "Cyber Security for Education & NGOs Nepal | Selim Solution",
	description: "Affordable, grant-compatible security packages for schools, universities, NGOs and INGOs across Nepal.",
	keywords: "NGO cyber security Nepal, education security Nepal, school cyber Kathmandu",
	path: "/solutions/education-ngos",
});

export const Route = createFileRoute("/solutions/education-ngos")({
	component: EducationNgosPage,
	head: () => head,
});
