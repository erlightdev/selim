import { FileText, ClipboardText, Scales, Certificate, ShieldCheck, Strategy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function Iso27001Page() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Compliance",
				title: "ISO 27001 — Information Security Management",
				subtitle: "The international ISMS standard. End-to-end support: gap assessment, policy, implementation, internal audit and certification readiness.",
				ctas: [
					{ label: "Start your ISO journey", to: "/contact", variant: "primary" },
					{ label: "Free gap call", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "ISO certification audit",
				},
			}}
			stats={[
				{ value: "4–9 mo", label: "Typical timeline" },
				{ value: "114", label: "Controls (Annex A)" },
				{ value: "ISO 27002", label: "Mapped" },
				{ value: "Surveillance", label: "Year 2 & 3 support" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What it is</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">ISO/IEC 27001 is the global standard for Information Security Management Systems (ISMS). It defines requirements for how an organisation establishes, operates, monitors and continually improves its security posture across people, processes and technology.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">Certification proves to customers, regulators and partners that you have a measurable, audited security programme — not just tooling.</p>
						<h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-white">Who it applies to</h3>
						<p className="mt-2 text-zinc-600 dark:text-zinc-300">Any organisation that handles sensitive data and wants market credibility: SaaS, BPO, finance, healthcare, government contractors, and increasingly Nepali exporters of software services.</p>
					</div>
				</section>
			}
			process={{
				heading: "Our approach",
				steps: [
					{ title: "Gap assessment", description: "Map your current state to ISO 27001 and identify priorities." },
					{ title: "Remediation", description: "Policy pack, control implementation, evidence collection." },
					{ title: "Internal audit", description: "Pre-certification internal audit and management review." },
					{ title: "Certification", description: "Stage-1 & Stage-2 audit support with accredited bodies." },
				],
			}}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "Statement of Applicability", description: "Tailored SoA covering all Annex A controls." },
					{ icon: FileText, title: "Policy & procedure pack", description: "Ready-to-adopt policies aligned to ISO 27002." },
					{ icon: Scales, title: "Risk register", description: "Quantified, owner-mapped, treatment-tracked." },
					{ icon: Strategy, title: "ISMS roadmap", description: "12-month plan with KPIs and management-review cadence." },
					{ icon: ShieldCheck, title: "Evidence library", description: "Audit-ready evidence repository, indexed to controls." },
					{ icon: Certificate, title: "Certification support", description: "Stage-1 & Stage-2 audit liaison with BSI / PECB / DNV." },
				],
			}}
			faqs={[
				{ q: "How long does ISO 27001 take?", a: "Fast-track 4–6 months, standard 6–9 months. Depends on scope and current maturity." },
				{ q: "Which body should we certify with?", a: "We help you choose based on industry, customer expectations and cost — BSI, PECB, DNV, TÜV are common." },
				{ q: "Do you do the certification audit too?", a: "No — that would be a conflict of interest. We manage the relationship with the independent certification body." },
				{ q: "What's the surveillance audit cycle?", a: "Annual surveillance for years 2 and 3, then full recertification in year 3." },
			]}
			cta={{
				heading: "Get ISO 27001 certified — without losing a year to it.",
				subtitle: "Free 60-minute gap call to estimate effort and timeline.",
				primary: { label: "Book gap call", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
					{ to: "/compliance/nia-guideline-2076", title: "NIA 2076" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/soc", title: "SOC as a Service" },
				],
			}}
		/>
	);
}
