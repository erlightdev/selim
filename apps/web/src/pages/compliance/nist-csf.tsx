import { FileText, ClipboardText, Scales, Strategy, ShieldCheck, Eye } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function NistCsfPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Compliance",
				title: "NIST Cybersecurity Framework (CSF)",
				subtitle: "Identify → Protect → Detect → Respond → Recover. Map cyber risk to business priorities with NIST CSF 2.0 — the world's most-adopted security framework.",
				ctas: [
					{ label: "Start with NIST", to: "/contact", variant: "primary" },
					{ label: "Free maturity call", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Cybersecurity strategy meeting",
				},
			}}
			stats={[
				{ value: "v2.0", label: "Latest version" },
				{ value: "6", label: "Functions (incl. Govern)" },
				{ value: "Tiers 1–4", label: "Maturity model" },
				{ value: "Global", label: "De-facto standard" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What it is</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">NIST CSF is a voluntary framework that helps organisations assess and improve their cybersecurity posture. Version 2.0 introduces a "Govern" function alongside Identify, Protect, Detect, Respond and Recover — making it the most well-rounded model for board-level cyber risk conversations.</p>
						<h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-white">Who it applies to</h3>
						<p className="mt-2 text-zinc-600 dark:text-zinc-300">Any organisation that wants a common, business-readable language for cyber risk. Especially valuable for organisations that don't need a certification but want a measurable improvement plan.</p>
					</div>
				</section>
			}
			process={{
				heading: "Our approach",
				steps: [
					{ title: "Profile", description: "Define current and target profiles across all six functions." },
					{ title: "Assess", description: "Score each subcategory and identify gaps." },
					{ title: "Roadmap", description: "Multi-year improvement plan, sequenced by risk reduction." },
					{ title: "Operate", description: "Quarterly reviews, KPI tracking and re-baselining." },
				],
			}}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "Current & target profile", description: "Function-level current state and aspirational target." },
					{ icon: Scales, title: "Gap analysis", description: "Subcategory-level scoring with evidence and rationale." },
					{ icon: Strategy, title: "Multi-year roadmap", description: "Prioritised, costed initiatives mapped to business risk." },
					{ icon: FileText, title: "Board-ready report", description: "Executive narrative and heatmap for board reporting." },
					{ icon: ShieldCheck, title: "Crosswalk", description: "Mapping to ISO 27001, PCI-DSS and other frameworks." },
					{ icon: Eye, title: "Quarterly reviews", description: "Re-baseline progress and update the roadmap." },
				],
			}}
			faqs={[
				{ q: "Is NIST CSF a certification?", a: "No — it's a framework. But it pairs well with ISO 27001 (which is certifiable) for a complete programme." },
				{ q: "How long does the initial assessment take?", a: "4–6 weeks for mid-size organisations." },
				{ q: "Can we use this alongside ISO?", a: "Yes — NIST CSF is excellent for business-readable reporting, ISO 27001 for the formal ISMS. We map both." },
			]}
			cta={{
				heading: "Speak cyber risk in the language of the board.",
				primary: { label: "Book maturity call", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/vapt", title: "VAPT" },
				],
			}}
		/>
	);
}
