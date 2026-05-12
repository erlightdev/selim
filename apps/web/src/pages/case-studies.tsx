import {
	ArrowRight,
	Bank,
	ChartLineUp,
	CheckCircle,
	Eye,
	Heartbeat,
	Lightning,
	Pulse,
	ShieldCheck,
	Sparkle,
	Strategy,
	Truck,
} from "@phosphor-icons/react";

const impact = [
	{ value: "200+", label: "Organisations protected" },
	{ value: "99.9%", label: "Threat detection accuracy" },
	{ value: "24/7", label: "Kathmandu SOC" },
	{ value: "2076", label: "NIA Guideline advisory" },
] as const;

const cases = [
	{
		icon: Bank,
		name: "A Nepali Commercial Bank",
		sector: "Banking & Finance",
		headline: "87% reduction in critical vulnerabilities in 6 weeks",
		summary:
			"SOC + VAPT + GRC engagement aligned the bank with Nepal Rastra Bank IT directives and hardened core banking systems.",
		metric: "87%",
		metricLabel: "Critical vulnerabilities closed",
		stack: ["SOC as a Service", "VAPT", "GRC — NRB"],
		outcomes: [
			"Challenge: Pre-audit VAPT surfaced 40+ critical & high vulnerabilities across core banking and mobile apps.",
			"Approach: 24/7 SOC onboarding, 4-phase VAPT, GRC advisory against NRB IT directives.",
			"Results: 87% of critical vulns closed in 6 weeks; clean retest; NRB audit passed.",
			"Compliance: Nepal Rastra Bank directives, ISO 27001 alignment.",
		],
	},
	{
		icon: ShieldCheck,
		name: "A Regional Insurer",
		sector: "Insurance",
		headline: "Achieved NIA Guideline 2076 compliance",
		summary:
			"Gap analysis, policy build-out and evidence package delivered ahead of the Nepal Insurance Authority deadline.",
		metric: "2076",
		metricLabel: "NIA Guideline compliant",
		stack: ["GRC & Compliance", "Awareness Training", "Advisory"],
		outcomes: [
			"Challenge: New NIA Guideline 2076 obligations with limited internal security maturity.",
			"Approach: Full gap analysis, ISMS build-out, board briefings and staff awareness rollout.",
			"Results: Passed first-attempt audit; phishing-click rate cut 90%.",
			"Compliance: NIA Guideline 2076, ISO 27001 aligned.",
		],
	},
	{
		icon: Heartbeat,
		name: "A Government e-Services Platform",
		sector: "Public sector",
		headline: "Hardened against DDoS and credential attacks",
		summary:
			"Citizen-facing platform brought under 24/7 SOC monitoring with a DFIR retainer and cloud security baseline.",
		metric: "24/7",
		metricLabel: "Kathmandu SOC coverage",
		stack: ["SOC as a Service", "Cloud Security", "DFIR"],
		outcomes: [
			"Challenge: Repeated DDoS and credential-stuffing waves against a high-profile public service.",
			"Approach: 24/7 SOC onboarding, cloud posture hardening, DFIR retainer and runbooks.",
			"Results: Downtime eliminated during subsequent attack waves; mean response under 5 minutes.",
			"Compliance: NIST CSF aligned; ISO 27001 advisory in progress.",
		],
	},
] as const;

const sectors = [
	{ icon: Bank, label: "Banking & Finance" },
	{ icon: ShieldCheck, label: "Insurance" },
	{ icon: Truck, label: "Government & Public Sector" },
	{ icon: Pulse, label: "Telecom & ISPs" },
	{ icon: Heartbeat, label: "Healthcare" },
	{ icon: Sparkle, label: "Education & NGOs" },
] as const;

const playbook = [
	{
		icon: Eye,
		title: "Challenge",
		text: "We start with a clear, agreed problem statement — risks, scope, regulators in play.",
	},
	{
		icon: Strategy,
		title: "Approach",
		text: "A right-sized engagement: SOC, VAPT, EDR, GRC, DFIR or training — singly or combined.",
	},
	{
		icon: Lightning,
		title: "Results & Compliance",
		text: "Measurable outcomes mapped to NIA 2076, NRB directives, ISO 27001 or PCI-DSS evidence.",
	},
] as const;

const testimonials = [
	{
		quote:
			"Selim Solution closed 87% of our critical findings in six weeks. The NRB audit went through first attempt.",
		name: "Head of IT Security",
		role: "Commercial Bank, Nepal",
	},
	{
		quote:
			"Our NIA Guideline 2076 readiness moved from spreadsheet to certified in three months. Their advisory team is excellent.",
		name: "CRO",
		role: "Regional Insurer, Nepal",
	},
	{
		quote:
			"Their Kathmandu SOC took the DDoS pressure off our team. Response times in minutes, on Viber if we need it.",
		name: "Director, e-Services",
		role: "Government of Nepal",
	},
] as const;

export default function CaseStudiesPage() {
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
								Case studies
							</div>
							<h1 className="text-balance text-[clamp(2.2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
								Real threats. Real Nepali organisations. <br className="hidden sm:block" />
								Real outcomes.
							</h1>
							<p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 sm:text-lg">
								Anonymised engagements from banks, insurers and government platforms
								across Nepal — each one delivered by our Kathmandu SOC.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 2. IMPACT STATS */}
			<section className="border-y border-zinc-200 bg-white py-10 dark:border-white/5 dark:bg-zinc-950/50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-8 flex items-center gap-2">
						<ChartLineUp
							className="size-5 text-indigo-500 dark:text-indigo-300"
							weight="duotone"
						/>
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-indigo-100/55">
							Aggregate impact across deployments
						</p>
					</div>
					<div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
						{impact.map((s) => (
							<div key={s.label}>
								<p className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
									{s.value}
								</p>
								<p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-indigo-100/55">
									{s.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 3. CASE CARDS */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
								Featured engagements
							</div>
							<h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								Three engagements. Three industries. One vigilant team.
							</h2>
						</div>
					</div>

					<div className="space-y-6">
						{cases.map((c, i) => {
							const Icon = c.icon;
							const reverse = i % 2 === 1;
							return (
								<article
									key={c.name}
									className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_30px_80px_-50px_rgba(79,70,229,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
								>
									<div
										className={`grid gap-0 lg:grid-cols-[1.15fr_0.85fr] ${
											reverse ? "lg:[&>*:first-child]:order-2" : ""
										}`}
									>
										<div className="relative p-7 sm:p-10">
											<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(79,70,229,0.12),transparent_45%)]" />
											<div className="relative">
												<div className="flex items-center gap-3">
													<span className="inline-flex size-12 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
														<Icon className="size-6" weight="duotone" />
													</span>
													<div>
														<p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-indigo-100/55">
															{c.sector}
														</p>
														<p className="text-lg font-semibold tracking-tight">
															{c.name}
														</p>
													</div>
												</div>

												<h3 className="mt-6 max-w-lg text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
													{c.headline}
												</h3>
												<p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/70">
													{c.summary}
												</p>

												<ul className="mt-6 space-y-3">
													{c.outcomes.map((o) => (
														<li
															key={o}
															className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-indigo-100/80"
														>
															<CheckCircle
																className="mt-0.5 size-4 shrink-0 text-indigo-500 dark:text-indigo-300"
																weight="fill"
															/>
															<span>{o}</span>
														</li>
													))}
												</ul>

												<div className="mt-7 flex flex-wrap gap-2">
													{c.stack.map((s) => (
														<span
															key={s}
															className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-indigo-100/70"
														>
															{s}
														</span>
													))}
												</div>
											</div>
										</div>

										<div className="relative flex items-center justify-center bg-[#08051f] p-8 text-white sm:p-10">
											<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
											<div className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.7)_0%,transparent_70%)] blur-2xl" />
											<div className="relative w-full max-w-xs text-center">
												<p className="font-mono text-[clamp(2.8rem,6vw,4.2rem)] font-semibold leading-none tracking-tight text-white">
													{c.metric}
												</p>
												<p className="mt-3 text-xs uppercase tracking-[0.18em] text-indigo-200/80">
													{c.metricLabel}
												</p>
												<div className="mt-8 space-y-2.5 text-left">
													{c.stack.map((s, idx) => (
														<div
															key={s}
															className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs backdrop-blur"
														>
															<span className="text-indigo-100/85">{s}</span>
															<span className="font-mono text-indigo-300">
																0{idx + 1}
															</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* 4. SECTORS */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							Industries we secure
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Built for Nepal's regulated and critical sectors.
						</h2>
					</div>

					<ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
						{sectors.map(({ icon: Icon, label }) => (
							<li
								key={label}
								className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_-40px_rgba(79,70,229,0.55)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<span className="inline-flex size-11 items-center justify-center rounded-xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
									<Icon className="size-5" weight="duotone" />
								</span>
								<span className="text-sm font-medium text-zinc-800 dark:text-indigo-50/90">
									{label}
								</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* 5. TESTIMONIALS */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							What customers say
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							From the teams we stand watch over.
						</h2>
					</div>

					<div className="mt-12 grid gap-5 lg:grid-cols-3">
						{testimonials.map((t) => (
							<figure
								key={t.name}
								className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 dark:border-white/10 dark:bg-[#0d092d]"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(79,70,229,0.12),transparent_45%)]" />
								<blockquote className="relative text-base leading-relaxed text-zinc-800 dark:text-indigo-50/90">
									"{t.quote}"
								</blockquote>
								<figcaption className="relative mt-6 border-t border-zinc-200 pt-4 dark:border-white/10">
									<p className="text-sm font-semibold tracking-tight">{t.name}</p>
									<p className="mt-1 text-xs text-zinc-500 dark:text-indigo-100/55">
										{t.role}
									</p>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			{/* 6. PLAYBOOK */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							How we structure every engagement
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Challenge. Approach. Results & Compliance.
						</h2>
					</div>

					<div className="mt-12 grid gap-5 lg:grid-cols-3">
						{playbook.map(({ icon: Icon, title, text }, i) => (
							<article
								key={title}
								className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.14),transparent_40%)]" />
								<div className="relative">
									<div className="flex items-center justify-between">
										<div className="inline-flex size-12 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
											<Icon className="size-5" weight="duotone" />
										</div>
										<span className="font-mono text-xs text-zinc-400 dark:text-white/35">
											{String(i + 1).padStart(2, "0")}
										</span>
									</div>
									<h3 className="mt-6 text-xl font-semibold tracking-tight">
										{title}
									</h3>
									<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
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
							Want outcomes like these in your organisation?
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg">
							Book a free 30-minute consultation. Our Kathmandu team will scope an
							engagement to your risks and regulatory drivers.
						</p>
						<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<a
								href="/contact"
								className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
							>
								Get Free Assessment
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href="/about"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
							>
								About the team
								<ShieldCheck className="size-4" weight="bold" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
