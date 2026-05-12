import { ShieldCheck, FileText, ClipboardText, Strategy, Certificate, Scales } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function GrcPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Service",
				title: "GRC & Compliance",
				subtitle: "ISO 27001, NIA Guideline 2076, PCI-DSS and NRB directives — gap assessment, policy drafting, risk register and certification readiness.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to a consultant", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Compliance audit and policy review",
				},
			}}
			stats={[
				{ value: "ISO 27001", label: "ISMS" },
				{ value: "NIA 2076", label: "Insurance" },
				{ value: "PCI-DSS", label: "Cardholder" },
				{ value: "NRB", label: "Banking" },
			]}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "Gap assessment", description: "Side-by-side mapping of current state to your target framework." },
					{ icon: FileText, title: "Policy & procedure pack", description: "Tailored, ready-to-adopt policies signed off by your management." },
					{ icon: Scales, title: "Risk register & treatment plan", description: "Quantified risks, owners, and mitigation timelines." },
					{ icon: Strategy, title: "Implementation roadmap", description: "Prioritised 12-month roadmap with milestones and KPIs." },
					{ icon: ShieldCheck, title: "Internal audit", description: "Pre-certification internal audit and management review pack." },
					{ icon: Certificate, title: "Certification support", description: "Liaison with certification bodies, stage-1 & stage-2 audit prep." },
				],
			}}
			process={{
				heading: "Our GRC engagement",
				steps: [
					{ title: "Discover", description: "Workshops, document review and scoping." },
					{ title: "Assess", description: "Control gaps, risk assessment, and report." },
					{ title: "Implement", description: "Policies, controls and evidence collection." },
					{ title: "Certify", description: "Internal audit, management review and external audit support." },
				],
			}}
			faqs={[
				{ q: "How long does ISO 27001 typically take?", a: "Fast-track 4–6 months; standard 6–9 months. Depends on scope and current maturity." },
				{ q: "Do you handle the external audit?", a: "We don't audit (conflict-of-interest), but we manage the relationship with accredited bodies like BSI, PECB and DNV." },
				{ q: "Can you do multiple frameworks at once?", a: "Yes. ISO 27001 + PCI-DSS + NRB is a common combined engagement and we deduplicate evidence." },
				{ q: "Do you provide ongoing GRC?", a: "Yes — quarterly internal audits, risk reviews and re-certification support are available as a retainer." },
			]}
			cta={{
				heading: "Get certification-ready — without the chaos.",
				subtitle: "Free 60-minute GRC discovery call with a senior consultant.",
				primary: { label: "Book discovery", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nia-guideline-2076", title: "NIA 2076" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives" },
					{ to: "/services/vapt", title: "VAPT" },
				],
			}}
		/>
	);
}
