import { FileText, ClipboardText, Scales, Strategy, ShieldCheck, Certificate } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function NrbDirectivesPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Compliance",
				title: "Nepal Rastra Bank IT Directives",
				subtitle: "NRB IT Directive compliance for Class A/B/C banks and microfinance — core banking security, SOC coverage and board-level reporting.",
				ctas: [
					{ label: "Start NRB readiness", to: "/contact", variant: "primary" },
					{ label: "Free inspection prep", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Bank of Nepal Rastra",
				},
			}}
			stats={[
				{ value: "Class A/B/C", label: "All BFIs" },
				{ value: "Annual", label: "VAPT mandatory" },
				{ value: "24/7", label: "SOC expected" },
				{ value: "Board", label: "Quarterly reporting" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What it is</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Nepal Rastra Bank's IT Guidelines and unified directives codify cyber security expectations for every bank and financial institution (BFI) in Nepal. They cover IT governance, core banking security, business continuity, vendor management, incident response and mandatory annual VAPT.</p>
						<h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-white">Who it applies to</h3>
						<p className="mt-2 text-zinc-600 dark:text-zinc-300">All Class A commercial banks, Class B development banks, Class C finance companies and Class D microfinance institutions licensed by NRB.</p>
					</div>
				</section>
			}
			process={{
				heading: "Our approach",
				steps: [
					{ title: "Gap assessment", description: "Map current state to NRB IT Guidelines and unified directives." },
					{ title: "Remediation", description: "Policy, control and reporting uplift to close gaps." },
					{ title: "Annual VAPT", description: "NRB-acceptable VAPT and IT audit pack." },
					{ title: "Inspection support", description: "Subject-matter expert during NRB on-site inspections." },
				],
			}}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "Policy & directive pack", description: "All NRB-required IT, security and BCP policies." },
					{ icon: FileText, title: "VAPT & IT audit report", description: "NRB-format report covering apps, infra and core banking." },
					{ icon: Scales, title: "Risk register", description: "Quantified BFI-specific risk register and treatment." },
					{ icon: Strategy, title: "Board reporting pack", description: "Quarterly board-of-directors cyber KPI pack." },
					{ icon: ShieldCheck, title: "SOC reporting", description: "NRB-acceptable SOC monthly and incident reports." },
					{ icon: Certificate, title: "Inspection readiness", description: "Mock NRB inspection and evidence binder." },
				],
			}}
			faqs={[
				{ q: "Are your VAPT reports accepted by NRB?", a: "Yes — our reports have been routinely accepted by NRB IT inspections." },
				{ q: "Do you also cover SWIFT CSCF?", a: "Yes, including self-attestation and independent assessment." },
				{ q: "Can you support Class D microfinance budgets?", a: "Yes — we have grant-friendly packages designed for Class D MFIs." },
			]}
			cta={{
				heading: "Pass your NRB inspection — confidently.",
				primary: { label: "Book readiness call", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/solutions/banking-finance", title: "Banking & Finance" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
				],
			}}
		/>
	);
}
