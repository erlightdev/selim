import {
	ArrowRight,
	BracketsCurly,
	Brain,
	CheckCircle,
	CubeFocus,
	Eye,
	FlowArrow,
	Gear,
	Lightning,
	Plugs,
	Pulse,
	ShieldCheck,
	Sparkle,
	Strategy,
} from "@phosphor-icons/react";

const services = [
	{
		id: "detection",
		icon: Eye,
		eyebrow: "Detection",
		title: "AI threat detection",
		text: "Behavioral models surface lateral movement, credential abuse, and data exfiltration that signature-based tools miss.",
		bullets: [
			"User & entity behavior analytics",
			"Real-time anomaly scoring",
			"Threat intel enrichment",
		],
		stat: "98.4%",
		statLabel: "Auto-mitigation rate",
	},
	{
		id: "xdr",
		icon: Lightning,
		eyebrow: "Response",
		title: "Endpoint EDR / XDR",
		text: "Correlated signal across endpoints, identities, and workloads — with one-click containment baked into every alert.",
		bullets: [
			"Cross-domain correlation",
			"Automated isolation playbooks",
			"Forensic timeline per incident",
		],
		stat: "<3min",
		statLabel: "Mean response time",
	},
	{
		id: "zero-trust",
		icon: ShieldCheck,
		eyebrow: "Identity",
		title: "Zero-trust identity",
		text: "Continuous verification across every access path. No implicit trust, no standing privilege, full auditability.",
		bullets: [
			"Conditional access policies",
			"Privileged access management",
			"Session-level risk scoring",
		],
		stat: "0",
		statLabel: "Implicit trust assumptions",
	},
	{
		id: "cloud",
		icon: BracketsCurly,
		eyebrow: "Workloads",
		title: "Cloud workload security",
		text: "Posture, runtime, and supply-chain protection across AWS, Azure, and GCP — agentless where possible.",
		bullets: [
			"CSPM + CIEM in one view",
			"Runtime container protection",
			"IaC scanning in CI/CD",
		],
		stat: "3",
		statLabel: "Major clouds, one console",
	},
	{
		id: "soc",
		icon: Pulse,
		eyebrow: "Operations",
		title: "SOC & SIEM operations",
		text: "24/7 monitoring with senior analysts. We integrate with Splunk, Sentinel, and Chronicle — you keep your system of record.",
		bullets: [
			"Tier-1 & Tier-2 triage",
			"Custom detection engineering",
			"Monthly threat hunts",
		],
		stat: "24/7",
		statLabel: "Live SOC coverage",
	},
	{
		id: "compliance",
		icon: CubeFocus,
		eyebrow: "Governance",
		title: "Compliance & audit",
		text: "Continuous controls monitoring. Evidence collected automatically. Reports your auditors actually want to read.",
		bullets: [
			"SOC 2 Type II ready",
			"HIPAA, ISO 27001, PCI",
			"On-demand audit packages",
		],
		stat: "4h",
		statLabel: "Audit report turnaround",
	},
] as const;

const process = [
	{
		icon: Eye,
		title: "Assess",
		text: "We map your attack surface, existing controls, and coverage gaps in 48 hours.",
	},
	{
		icon: Strategy,
		title: "Design",
		text: "A defense plan scoped to your stack, your team, and your risk tolerance — not a template.",
	},
	{
		icon: Lightning,
		title: "Deploy",
		text: "Agents installed in minutes, detection tuned in days. First production wins inside week one.",
	},
	{
		icon: FlowArrow,
		title: "Operate",
		text: "Continuous tuning, monthly threat hunts, and quarterly executive reviews.",
	},
] as const;

const integrations = [
	{ name: "AWS", slug: "aws" },
	{ name: "Azure", slug: "azure-azure-hybrid-center" },
	{ name: "GCP", slug: "googlecloud" },
	{ name: "Splunk", slug: "splunk" },
	{ name: "Sentinel", slug: "microsoft" },
	{ name: "Chronicle", slug: "google" },
	{ name: "Okta", slug: "okta" },
	{ name: "Cloudflare", slug: "cloudflare" },
	{ name: "PagerDuty", slug: "pagerduty" },
	{ name: "Slack", slug: "slack" },
	{ name: "Datadog", slug: "datadog" },
	{ name: "Jira", slug: "jira" },
] as const;

const compareRows = [
	{
		label: "Time to first detection",
		legacy: "Weeks",
		us: "Hours",
	},
	{
		label: "Mean response time",
		legacy: "30+ min",
		us: "<3 min",
	},
	{
		label: "Coverage model",
		legacy: "Per-layer point tools",
		us: "Unified XDR surface",
	},
	{
		label: "Detection logic",
		legacy: "Static signatures",
		us: "AI behavioral models",
	},
	{
		label: "Compliance reporting",
		legacy: "Manual, quarterly",
		us: "Continuous, on-demand",
	},
];

export default function ServicesPage() {
	return (
		<main className="bg-zinc-50 font-sans text-zinc-950 selection:bg-indigo-200 selection:text-indigo-950 dark:bg-zinc-950 dark:text-zinc-50">
			<style
				dangerouslySetInnerHTML={{
					__html: `
					@keyframes selim-hero-spotlight {
						0%, 100% { transform: translate3d(-6%, 6%, 0) scale(1); opacity: .88; }
						50% { transform: translate3d(8%, -4%, 0) scale(1.08); opacity: 1; }
					}
					.animate-selim-spotlight { animation: selim-hero-spotlight 10s ease-in-out infinite; }
					@media (prefers-reduced-motion: reduce) {
						.animate-selim-spotlight { animation: none; }
					}
				`,
				}}
			/>

			{/* 1. HERO */}
			<section className="relative -mt-24 overflow-hidden pb-10 sm:-mt-28 sm:pb-16">
				<div className="mx-auto px-0 sm:px-2 lg:px-4">
					<div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08051f] px-5 pt-28 pb-16 text-white shadow-[0_40px_140px_-70px_rgba(79,70,229,0.95)] sm:px-10 sm:pt-32 sm:pb-20 lg:px-16 lg:pt-36 lg:pb-24">
						<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:9.5rem_100%,100%_9.5rem]" />
						<div className="animate-selim-spotlight pointer-events-none absolute -left-40 top-0 h-[36rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(49,140,255,0.85)_0%,rgba(79,70,229,0.55)_36%,transparent_72%)] blur-3xl" />
						<div className="pointer-events-none absolute bottom-[-18rem] right-[6%] h-[34rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(94,67,255,0.72)_0%,rgba(79,70,229,0.28)_50%,transparent_75%)] blur-3xl" />
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(8,5,31,0.1)_30%,rgba(8,5,31,0.7)_80%)]" />
						<div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />

						<div className="relative z-10 mx-auto max-w-4xl text-center">
							<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-medium text-indigo-100 backdrop-blur">
								<span className="relative flex size-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-indigo-200" />
								</span>
								Services & capabilities
							</div>
							<h1 className="text-balance text-[clamp(2.2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
								Every layer of defense, <br className="hidden sm:block" />
								one correlated surface.
							</h1>
							<p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 sm:text-lg">
								Endpoint, identity, cloud, and SOC operations — unified into a
								single AI-driven platform that detects, prevents, and responds in
								real time.
							</p>
							<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<a
									href="/contact"
									className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
								>
									Map your coverage
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
								</a>
								<a
									href="#services"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/12"
								>
									Explore services
									<ShieldCheck className="size-4" weight="bold" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. SERVICES GRID */}
			<section
				id="services"
				className="bg-white py-20 sm:py-24 dark:bg-zinc-950"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							Platform services
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Six services. One unified platform.
						</h2>
						<p className="mt-5 text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
							Pick the layers you need. Every service shares one correlated data
							model, so the more you turn on, the sharper the signal gets.
						</p>
					</div>

					<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
						{services.map((s) => {
							const Icon = s.icon;
							return (
								<article
									key={s.id}
									id={s.id}
									className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_-50px_rgba(79,70,229,0.6)] sm:p-7 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
								>
									<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.14),transparent_45%)]" />
									<div className="relative flex flex-1 flex-col">
										<div className="flex items-start justify-between">
											<div className="inline-flex size-12 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
												<Icon className="size-5" weight="duotone" />
											</div>
											<span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-indigo-100/40">
												{s.eyebrow}
											</span>
										</div>

										<h3 className="mt-6 text-xl font-semibold tracking-tight">
											{s.title}
										</h3>
										<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
											{s.text}
										</p>

										<ul className="mt-6 space-y-2">
											{s.bullets.map((b) => (
												<li
													key={b}
													className="flex items-center gap-2 text-sm text-zinc-700 dark:text-indigo-100/80"
												>
													<CheckCircle
														className="size-4 shrink-0 text-indigo-500 dark:text-indigo-300"
														weight="fill"
													/>
													{b}
												</li>
											))}
										</ul>

										<div className="mt-7 flex items-end justify-between border-t border-zinc-200 pt-5 dark:border-white/10">
											<div>
												<p className="font-mono text-2xl font-semibold tracking-tight">
													{s.stat}
												</p>
												<p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500 dark:text-indigo-100/45">
													{s.statLabel}
												</p>
											</div>
											<a
												href="/contact"
												className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-all hover:gap-2.5 dark:text-indigo-300"
											>
												Learn more
												<ArrowRight className="size-4" />
											</a>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* 3. ENGAGEMENT PROCESS */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							How we engage
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							From signed to protected in under two weeks.
						</h2>
					</div>

					<ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{process.map(({ icon: Icon, title, text }, i) => (
							<li
								key={title}
								className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.12),transparent_42%)]" />
								<div className="relative">
									<div className="flex items-center justify-between">
										<div className="inline-flex size-11 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
											<Icon className="size-5" weight="duotone" />
										</div>
										<span className="font-mono text-xs text-zinc-400 dark:text-white/35">
											{String(i + 1).padStart(2, "0")}
										</span>
									</div>
									<h3 className="mt-5 text-lg font-semibold tracking-tight">
										{title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
										{text}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* 4. COMPARISON */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							Why it's different
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Legacy stack vs. one unified platform.
						</h2>
					</div>

					<div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-[#0d092d]">
						<div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-zinc-200 bg-zinc-50/60 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:px-7 dark:border-white/10 dark:bg-white/[0.03] dark:text-indigo-100/55">
							<span>Capability</span>
							<span className="text-center">Legacy tooling</span>
							<span className="text-right text-indigo-600 dark:text-indigo-300">
								Selim
							</span>
						</div>
						{compareRows.map((row) => (
							<div
								key={row.label}
								className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-zinc-100 px-5 py-4 text-sm last:border-b-0 sm:px-7 dark:border-white/[0.06]"
							>
								<span className="font-medium text-zinc-800 dark:text-indigo-100/85">
									{row.label}
								</span>
								<span className="text-center text-zinc-500 dark:text-indigo-100/45">
									{row.legacy}
								</span>
								<span className="flex items-center justify-end gap-2 text-right font-semibold text-zinc-950 dark:text-white">
									<CheckCircle
										className="size-4 text-indigo-500 dark:text-indigo-300"
										weight="fill"
									/>
									{row.us}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 5. INTEGRATIONS */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
								<Plugs className="size-3.5" weight="duotone" />
								Integrations
							</div>
							<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								Plugs into the stack you already run.
							</h2>
							<p className="mt-5 text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
								We don't replace your SIEM or ticketing — we make them sharper.
								Native integrations across cloud, identity, alerting, and ITSM.
							</p>
							<a
								href="/contact"
								className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300"
							>
								Request a custom integration
								<ArrowRight className="size-4" />
							</a>
						</div>

						<ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
							{integrations.map((tool) => (
								<li
									key={tool.name}
									className="group flex h-20 flex-col items-center justify-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3 transition-all hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
								>
									<img
										src={`https://cdn.jsdelivr.net/gh/GLINCKER/thesvg@main/public/icons/${tool.slug}/default.svg`}
										alt={`${tool.name} logo`}
										loading="lazy"
										className="size-8 object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
									/>
									<span className="text-xs font-medium tracking-tight text-zinc-600 dark:text-indigo-100/70">
										{tool.name}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* 6. FEATURE STRIP */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-5 md:grid-cols-3">
						{[
							{
								icon: Brain,
								title: "AI that explains itself",
								text: "Every detection ships with the evidence behind it — no black boxes.",
							},
							{
								icon: Gear,
								title: "Tuned to your environment",
								text: "Behavioral baselines built in week one. Drift caught continuously.",
							},
							{
								icon: Sparkle,
								title: "Senior engineers, on call",
								text: "Tier-2 SOC analysts, not script runners. Mutual escalation guaranteed.",
							},
						].map(({ icon: Icon, title, text }) => (
							<article
								key={title}
								className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-[#0d092d]"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(79,70,229,0.12),transparent_45%)]" />
								<div className="relative">
									<Icon
										className="size-7 text-indigo-500 dark:text-indigo-300"
										weight="duotone"
									/>
									<h3 className="mt-5 text-lg font-semibold tracking-tight">
										{title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
										{text}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 7. CTA */}
			<section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
				<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08051f] px-6 py-20 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.9)] sm:px-16 sm:py-24 lg:px-24">
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
					<div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
					<div className="animate-selim-spotlight pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.85)_0%,rgba(79,70,229,0.4)_42%,transparent_72%)] blur-3xl" />

					<div className="relative mx-auto max-w-3xl text-center">
						<h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
							Pick the services. We'll handle the rest.
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg">
							20-minute walkthrough on your stack. We'll show exactly which
							services close your largest coverage gaps.
						</p>
						<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<a
								href="/contact"
								className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
							>
								Book a walkthrough
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href="/case-studies"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
							>
								See customer outcomes
								<ShieldCheck className="size-4" weight="bold" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
