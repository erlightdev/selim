import {
	Pulse,
	ShieldCheck,
	Eye,
	Lightning,
	Brain,
	Strategy,
	Bank,
	Buildings,
} from "@phosphor-icons/react";

import {
	PageHero,
	FeatureGrid,
	ProcessSteps,
	StatStrip,
	CTASection,
	FAQ,
	RelatedLinks,
} from "@/components/marketing";

const features = [
	{ icon: Pulse, title: "24/7 SIEM monitoring", description: "Round-the-clock event correlation across endpoints, network, cloud and identity." },
	{ icon: Eye, title: "Threat detection & hunting", description: "MITRE ATT&CK-mapped detections, hypothesis-driven hunts every month." },
	{ icon: Lightning, title: "Incident response", description: "Tier-1 to Tier-3 analysts, playbooks, containment and eradication." },
	{ icon: Brain, title: "Detection engineering", description: "Custom rules tuned to your environment, false-positive minimisation." },
	{ icon: ShieldCheck, title: "Threat intelligence", description: "Curated IoCs, dark-web monitoring and regional Nepal-specific feeds." },
	{ icon: Strategy, title: "Monthly reporting", description: "Executive dashboards, KPIs, MTTR/MTTD trends, board-ready output." },
];

const process = [
	{ title: "Onboard", description: "Asset inventory, log source mapping and connector setup." },
	{ title: "Tune", description: "Baseline traffic, normalise telemetry, deploy custom detections." },
	{ title: "Monitor", description: "24/7 triage by our Kathmandu SOC analysts." },
	{ title: "Respond", description: "Containment, eradication, post-incident review and uplift." },
];

const stats = [
	{ value: "24/7", label: "SOC coverage" },
	{ value: "< 15m", label: "Median MTTR" },
	{ value: "99.9%", label: "Platform uptime" },
	{ value: "100+", label: "Detections shipped" },
];

const faqs = [
	{ q: "Do you require us to replace our SIEM?", a: "No. We work with your existing stack (Splunk, Sentinel, Elastic, Wazuh) or deploy ours — whichever fits your budget and compliance requirements." },
	{ q: "Where are your analysts based?", a: "All Tier-1 to Tier-3 analysts are based in our Kathmandu SOC, with on-call coverage for nights and public holidays." },
	{ q: "How quickly can you onboard us?", a: "Most environments are live in 2–4 weeks. Critical detections are typically online within the first 7 days." },
	{ q: "Can you integrate with our ticketing tool?", a: "Yes — Jira, ServiceNow, Freshservice, Zoho and email-based workflows are supported out of the box." },
	{ q: "Is this aligned with NRB / NIA directives?", a: "Yes. Our reporting templates map directly to NRB IT Guidelines and NIA Guideline 2076 audit requirements." },
];

export default function SocPage() {
	return (
		<main>
			<PageHero
				eyebrow="Service"
				title="SOC as a Service"
				subtitle="24/7 SIEM, threat detection and incident response from our Kathmandu SOC — analyst-led, regulation-aligned, and ready to defend Nepali enterprises."
				ctas={[
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an engineer", to: "/contact", variant: "secondary" },
				]}
				image={{
					src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Security operations centre with monitors",
				}}
			/>
			<StatStrip stats={stats} />
			<FeatureGrid heading="What's included" subtitle="Everything you need to detect, respond, and improve — managed end-to-end." items={features} />
			<ProcessSteps heading="Our SOC delivery process" steps={process} />
			<section className="bg-white py-16 dark:bg-zinc-950">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Who it's for</h2>
					<div className="flex flex-wrap gap-3">
						{[
							{ label: "Banking & Finance", to: "/solutions/banking-finance", icon: Bank },
							{ label: "Insurance", to: "/solutions/insurance", icon: ShieldCheck },
							{ label: "Government", to: "/solutions/government", icon: Buildings },
							{ label: "Telecom & ISPs", to: "/solutions/telecom-isps", icon: Lightning },
							{ label: "Healthcare", to: "/solutions/healthcare", icon: ShieldCheck },
						].map((c) => (
							<a key={c.to} href={c.to} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-white/10 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300">
								<c.icon className="size-4" weight="duotone" />
								{c.label}
							</a>
						))}
					</div>
					<div className="mt-10">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Tooling & stack</p>
						<div className="mt-3 flex flex-wrap gap-2">
							{["Splunk", "Microsoft Sentinel", "Elastic SIEM", "Wazuh", "CrowdStrike", "SentinelOne", "MITRE ATT&CK", "Sigma", "TheHive", "MISP"].map((t) => (
								<span key={t} className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">{t}</span>
							))}
						</div>
					</div>
				</div>
			</section>
			<FAQ items={faqs} />
			<CTASection
				heading="Ready to harden your operations?"
				subtitle="Get a free SOC readiness assessment and pricing tailored to your environment."
				primary={{ label: "Request quote", to: "/contact" }}
				secondary={{ label: "View case studies", to: "/case-studies" }}
			/>
			<RelatedLinks
				items={[
					{ to: "/services/edr", title: "EDR", description: "Endpoint detection & response" },
					{ to: "/services/dfir", title: "DFIR", description: "Forensics & breach response" },
					{ to: "/services/vapt", title: "VAPT", description: "Pen testing & assessment" },
					{ to: "/compliance/iso-27001", title: "ISO 27001", description: "ISMS certification" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives", description: "Banking compliance" },
					{ to: "/compliance/nist-csf", title: "NIST CSF", description: "Risk framework" },
				]}
			/>
		</main>
	);
}
