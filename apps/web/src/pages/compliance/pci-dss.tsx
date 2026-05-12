import { FileText, ClipboardText, Scales, Certificate, ShieldCheck, Strategy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function PciDssPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Compliance",
				title: "PCI-DSS — Payment Card Industry Data Security Standard",
				subtitle: "For any organisation that stores, processes or transmits cardholder data — scoping, gap assessment, remediation and ASV scanning coordination.",
				ctas: [
					{ label: "Start PCI journey", to: "/contact", variant: "primary" },
					{ label: "Free scoping call", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Credit card payment",
				},
			}}
			stats={[
				{ value: "v4.0", label: "Current version" },
				{ value: "12", label: "Requirements" },
				{ value: "ASV", label: "Scan coordination" },
				{ value: "SAQ / RoC", label: "Both supported" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What it is</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">PCI-DSS is the Payment Card Industry Data Security Standard — the global baseline for any organisation that stores, processes or transmits cardholder data. It defines 12 high-level requirements across network security, vulnerability management, access control and monitoring.</p>
						<h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-white">Who it applies to</h3>
						<p className="mt-2 text-zinc-600 dark:text-zinc-300">Banks, payment processors, e-commerce, gateways and any merchant handling card data. Scope depends on transaction volume and integration model (SAQ A, A-EP, B, C, D — or full RoC).</p>
					</div>
				</section>
			}
			process={{
				heading: "Our approach",
				steps: [
					{ title: "Scoping", description: "Determine merchant level, SAQ type and CDE boundary." },
					{ title: "Gap assessment", description: "Map current state to PCI-DSS v4.0 requirements." },
					{ title: "Remediate", description: "Segmentation, encryption, logging and policy uplift." },
					{ title: "Validate", description: "ASV scans, internal vulnerability scans and pen test." },
				],
			}}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "Scope diagram", description: "Cardholder data flow and CDE boundary documentation." },
					{ icon: FileText, title: "Policy pack", description: "All 12 requirement-area policies and procedures." },
					{ icon: Scales, title: "Risk treatment", description: "Targeted risk analysis for compensating controls." },
					{ icon: Strategy, title: "Pen test report", description: "Internal & external PCI-aligned penetration test." },
					{ icon: ShieldCheck, title: "ASV scan coordination", description: "Quarterly ASV scans with remediation support." },
					{ icon: Certificate, title: "SAQ / RoC support", description: "Help completing your SAQ or supporting your QSA." },
				],
			}}
			faqs={[
				{ q: "Are you a QSA?", a: "We partner with QSAs but operate as your independent advisory and remediation partner — avoiding conflict of interest." },
				{ q: "Do you run ASV scans?", a: "We coordinate with an accredited ASV and handle remediation, re-scan and reporting." },
				{ q: "How long does PCI-DSS take?", a: "3–9 months depending on scope, segmentation and tech debt." },
			]}
			cta={{
				heading: "Get PCI-DSS ready — and stay there.",
				primary: { label: "Book scoping call", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/solutions/banking-finance", title: "Banking & Finance" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives" },
				],
			}}
		/>
	);
}
