import {
	Bug,
	ShieldCheck,
	Globe,
	DeviceMobile,
	Cloud,
	Plugs,
	WifiHigh,
	FileMagnifyingGlass,
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

const scopes = [
	{ icon: Globe, title: "Web applications", description: "OWASP Top 10, business logic flaws, auth bypass, IDOR." },
	{ icon: DeviceMobile, title: "Mobile (iOS / Android)", description: "OWASP MASVS, reverse engineering, insecure storage." },
	{ icon: WifiHigh, title: "Network & infrastructure", description: "External & internal pen tests, AD review, misconfigurations." },
	{ icon: Plugs, title: "APIs", description: "REST & GraphQL — schema fuzzing, broken object-level auth." },
	{ icon: Cloud, title: "Cloud (AWS/Azure/GCP)", description: "Misconfig, privilege escalation, exposed assets, CSPM." },
	{ icon: FileMagnifyingGlass, title: "Source code review", description: "SAST, dependency review, secure-coding gaps." },
];

const process = [
	{ title: "Discover", description: "Scoping, asset enumeration, threat modelling." },
	{ title: "Analyse", description: "Manual + automated testing, exploit chain validation." },
	{ title: "Report", description: "CVSS-scored findings, executive summary, technical detail." },
	{ title: "Retest", description: "Free retest of remediated findings within 30 days." },
];

const boxes = [
	{ title: "Black Box", description: "Zero internal knowledge. Mimics a real-world external attacker." },
	{ title: "Grey Box", description: "Limited credentials. Simulates a phished or insider scenario." },
	{ title: "White Box", description: "Full access including source code. Maximum coverage, deepest findings." },
];

const stats = [
	{ value: "87%", label: "Critical vulns closed" },
	{ value: "30d", label: "Free retest window" },
	{ value: "OWASP", label: "& PTES aligned" },
	{ value: "100%", label: "Manual validation" },
];

const faqs = [
	{ q: "What's the difference between VA and PT?", a: "Vulnerability Assessment is broad and automated; Penetration Testing is targeted, manual, and proves exploitability. We deliver both as one engagement." },
	{ q: "Is your report acceptable to NIA / NRB auditors?", a: "Yes. Our reports follow CERT-In, OWASP, and PTES structures and are routinely accepted by Nepal Insurance Authority and Nepal Rastra Bank auditors." },
	{ q: "How long does a typical engagement take?", a: "Web app: 1–2 weeks. Mobile: 1–2 weeks. Internal network: 2–3 weeks. Larger scopes are phased and reported per milestone." },
	{ q: "Will testing disrupt production?", a: "We can test in production with rate limits, or in staging. Disruptive tests (DoS) are scheduled with written change approval." },
	{ q: "Do you provide retest?", a: "Yes. One free retest within 30 days of report delivery is included in every engagement." },
];

export default function VaptPage() {
	return (
		<main>
			<PageHero
				eyebrow="Service"
				title="VAPT — Vulnerability Assessment & Penetration Testing"
				subtitle="Web, mobile, network, API and cloud — Black, Grey and White Box testing aligned to OWASP, PTES and CREST. CERT-In and NIA-acceptable reporting."
				ctas={[
					{ label: "Get a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to a tester", to: "/contact", variant: "secondary" },
				]}
				image={{
					src: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Penetration tester analysing code",
				}}
			/>
			<StatStrip stats={stats} />
			<FeatureGrid heading="Scope coverage" subtitle="One vendor for every layer of your attack surface." items={scopes} />
			<section className="bg-white py-16 dark:bg-zinc-950">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Testing types</h2>
					<div className="grid gap-4 sm:grid-cols-3">
						{boxes.map((b) => (
							<div key={b.title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/40">
								<div className="mb-3 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
									<Bug className="size-5" weight="duotone" />
								</div>
								<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{b.title}</h3>
								<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{b.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<ProcessSteps heading="Our 4-phase testing process" steps={process} />
			<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Who it's for</h2>
					<div className="flex flex-wrap gap-3">
						{[
							{ label: "Banking & Finance", to: "/solutions/banking-finance" },
							{ label: "Insurance", to: "/solutions/insurance" },
							{ label: "Healthcare", to: "/solutions/healthcare" },
							{ label: "Telecom & ISPs", to: "/solutions/telecom-isps" },
							{ label: "Government", to: "/solutions/government" },
						].map((c) => (
							<a key={c.to} href={c.to} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:border-indigo-400/40 dark:hover:text-indigo-300">
								<ShieldCheck className="size-4" weight="duotone" />
								{c.label}
							</a>
						))}
					</div>
				</div>
			</section>
			<FAQ items={faqs} />
			<CTASection
				heading="Find the gaps before attackers do."
				subtitle="Schedule a scoping call and receive a fixed-price proposal within 48 hours."
				primary={{ label: "Get a quote", to: "/contact" }}
				secondary={{ label: "Download VAPT brief", to: "/downloads" }}
			/>
			<RelatedLinks
				items={[
					{ to: "/services/soc", title: "SOC as a Service", description: "Continuous monitoring" },
					{ to: "/services/cloud-security", title: "Cloud Security", description: "Multi-cloud posture" },
					{ to: "/services/dfir", title: "DFIR", description: "Breach response" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS", description: "Cardholder data" },
					{ to: "/compliance/iso-27001", title: "ISO 27001", description: "ISMS standard" },
					{ to: "/compliance/nia-guideline-2076", title: "NIA 2076", description: "Insurance compliance" },
				]}
			/>
		</main>
	);
}
