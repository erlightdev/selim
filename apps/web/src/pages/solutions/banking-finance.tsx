import { Eye, Pulse, Strategy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function BankingFinancePage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Banking & Finance",
				subtitle: "Core banking security, fraud detection and NRB IT Directive alignment for Nepali banks, finance companies and microfinance.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an expert", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Bank building",
				},
			}}
			stats={[
				{ value: "NRB", label: "IT Directive aligned" },
				{ value: "24/7", label: "SOC coverage" },
				{ value: "Annual", label: "VAPT" },
				{ value: "PCI-DSS", label: "Cardholder ready" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Nepali banks operate at the intersection of legacy core systems, modern mobile banking and aggressive fraud actors. Nepal Rastra Bank's IT Directives require continuous monitoring, annual penetration testing, and board-level cyber risk reporting — yet most institutions lack the in-house bench to deliver this on time.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">Add to this PCI-DSS for card programmes, SWIFT CSCF for correspondent banking, and the operational reality of phishing attacks targeting retail customers — and the surface area is enormous.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">Selim Solution acts as your outsourced cyber arm — 24/7 SOC, annual VAPT, GRC support and an on-call DFIR team — so your in-house team can focus on business enablement.</p>
						<div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
							<p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Regulatory anchors</p>
							<div className="mt-3 flex flex-wrap gap-2">
								<a className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-200" href="/compliance/nrb-directives">NRB Directives</a>
								<a className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-200" href="/compliance/pci-dss">PCI-DSS</a>
								<a className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-200" href="/compliance/iso-27001">ISO 27001</a>
							</div>
						</div>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack for banking",
				subtitle: "Top three services we recommend for every Nepali bank.",
				items: [
					{ icon: Pulse, title: "SOC as a Service", description: "24/7 SIEM, fraud-relevant detections, NRB-format reporting." },
					{ icon: Eye, title: "VAPT", description: "Annual application & infrastructure pen tests with NRB-acceptable reports." },
					{ icon: Strategy, title: "GRC & Compliance", description: "ISO 27001 + NRB IT Directive alignment, board reporting." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Are your reports NRB-acceptable?", a: "Yes. Our SOC reporting and VAPT deliverables are routinely accepted by NRB inspections." },
				{ q: "Do you support SWIFT CSCF?", a: "Yes — we deliver CSCF self-attestation support and independent assessment services." },
				{ q: "Can you help with fraud monitoring?", a: "We deploy fraud-oriented detections (impossible travel, mule patterns, mobile-banking anomalies) directly in the SIEM." },
				{ q: "What's the typical engagement model?", a: "Annual retainer with quarterly business reviews, plus on-call DFIR for incident response." },
			]}
			cta={{
				heading: "Built for Nepali banks — by Nepali experts.",
				subtitle: "Schedule a free 60-minute NRB readiness review.",
				primary: { label: "Book a review", to: "/contact" },
				secondary: { label: "View case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
				],
			}}
		/>
	);
}
