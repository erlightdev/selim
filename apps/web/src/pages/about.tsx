import {
	ArrowRight,
	BracketsCurly,
	Brain,
	CheckCircle,
	CirclesThreePlus,
	Compass,
	CubeFocus,
	Eye,
	Lightning,
	Pulse,
	ShieldCheck,
	Sparkle,
	Strategy,
	Users,
} from "@phosphor-icons/react";

const stats = [
	{ value: "12k+", label: "Threats neutralized weekly" },
	{ value: "<3min", label: "Mean response time" },
	{ value: "98.4%", label: "Auto-mitigation rate" },
	{ value: "24/7", label: "SOC monitoring" },
] as const;

const values = [
	{
		icon: ShieldCheck,
		title: "Defense by default",
		text: "Zero-trust assumptions across every endpoint, identity, and workload — no implicit access, ever.",
	},
	{
		icon: Brain,
		title: "AI that explains itself",
		text: "Models surface the signal, not the noise. Every detection ships with the evidence behind it.",
	},
	{
		icon: Lightning,
		title: "Response in seconds",
		text: "Automated containment runs before the on-call pager fires. Humans verify, machines act.",
	},
] as const;

const capabilities = [
	{ icon: Eye, label: "Threat detection" },
	{ icon: ShieldCheck, label: "Zero-trust identity" },
	{ icon: Pulse, label: "Endpoint EDR / XDR" },
	{ icon: BracketsCurly, label: "Cloud workload security" },
	{ icon: CubeFocus, label: "SIEM & SOC ops" },
	{ icon: Sparkle, label: "AI anomaly modeling" },
] as const;

const principles = [
	{
		icon: Strategy,
		title: "Prevention over reaction",
		text: "We design for the threat that hasn't fired yet — behavior models, not signature databases.",
	},
	{
		icon: Compass,
		title: "Coverage you can audit",
		text: "Every policy, decision, and automated action is logged in a surface your auditors can read.",
	},
	{
		icon: Lightning,
		title: "Minutes to deploy",
		text: "Agents install in minutes, integrate with your existing stack, and start protecting on day one.",
	},
] as const;

const milestones = [
	{
		year: "2019",
		label:
			"Founded by SOC engineers tired of chasing alerts that arrived too late.",
	},
	{
		year: "2021",
		label:
			"Shipped the first AI behavioral engine — caught lateral movement no signature tool flagged.",
	},
	{
		year: "2023",
		label:
			"SOC 2 Type II certified. Deployed across regulated fintech and healthcare networks.",
	},
	{
		year: "2025",
		label:
			"Unified XDR platform launched — identity, endpoint, and workload on one threat surface.",
	},
] as const;

const leadership = [
	{
		name: "Mara Voss",
		role: "Co-founder & CEO",
		bio: "Former SOC lead at a top-5 bank. 14 years incident response.",
	},
	{
		name: "Ren Ito",
		role: "Co-founder & CTO",
		bio: "Built behavioral detection systems for two threat intel platforms.",
	},
	{
		name: "Talia Brenner",
		role: "Head of Security Research",
		bio: "Red-team operator, published on identity-layer attacks and AI evasion.",
	},
] as const;

export default function AboutPage() {
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
								About the company
							</div>
							<h1 className="text-balance text-[clamp(2.2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
								Built by defenders, for the threats <br className="hidden sm:block" />
								that haven't fired yet.
							</h1>
							<p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 sm:text-lg">
								We are a cybersecurity team building AI-driven detection, zero-trust
								enforcement, and automated response — so security stops being the
								thing that slows your team down.
							</p>

							<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<a
									href="/contact"
									className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50"
								>
									Talk to the team
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
								</a>
								<a
									href="/case-studies"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12"
								>
									See customer outcomes
									<ShieldCheck className="size-4" weight="bold" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. STATS STRIP */}
			<section className="border-y border-zinc-200 bg-white py-10 dark:border-white/5 dark:bg-zinc-950/50">
				<div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
					{stats.map((s) => (
						<div key={s.label} className="text-center lg:text-left">
							<p className="font-mono text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
								{s.value}
							</p>
							<p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-indigo-100/55">
								{s.label}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* 3. MISSION + VALUES */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
						<div>
							<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
								Our mission
							</div>
							<h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
								Make modern defense feel obvious — not optional.
							</h2>
							<p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-indigo-100/70">
								Most security stacks were built to react. We build to prevent. Our
								platform unifies endpoint, identity, and cloud workloads into one
								surface that AI watches continuously — so threats get contained
								before they become incidents.
							</p>
						</div>

						<div className="grid gap-4">
							{values.map(({ icon: Icon, title, text }) => (
								<article
									key={title}
									className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
								>
									<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(79,70,229,0.12),transparent_45%)] opacity-90" />
									<div className="relative flex items-start gap-4">
										<div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
											<Icon className="size-5" weight="duotone" />
										</div>
										<div>
											<h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
												{title}
											</h3>
											<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/70">
												{text}
											</p>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 4. WHAT WE COVER */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							Capabilities
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							A single surface for every layer of defense.
						</h2>
						<p className="mt-5 text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
							From the endpoint to the cloud workload, every signal funnels into
							one correlated view your team can actually act on.
						</p>
					</div>

					<ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
						{capabilities.map(({ icon: Icon, label }) => (
							<li
								key={label}
								className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_-40px_rgba(79,70,229,0.55)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
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

			{/* 5. PRINCIPLES */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
								How we think
							</div>
							<h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								Principles that shape every release.
							</h2>
						</div>
					</div>

					<div className="mt-12 grid gap-5 lg:grid-cols-3">
						{principles.map(({ icon: Icon, title, text }, i) => (
							<article
								key={title}
								className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_34px_90px_-54px_rgba(79,70,229,0.7)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.14),transparent_38%)]" />
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

			{/* 6. TIMELINE */}
			<section className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
						<div>
							<div className="flex items-center gap-2">
								<CirclesThreePlus
									className="size-5 text-indigo-500"
									weight="duotone"
								/>
								<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
									Timeline
								</div>
							</div>
							<h2 className="mt-5 max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								Six years of staying ahead of the attacker.
							</h2>
							<p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
								The platform has evolved with the threat landscape — every release
								shaped by what we caught in production.
							</p>
						</div>

						<ol className="relative space-y-6 border-l border-zinc-200 pl-6 dark:border-white/10">
							{milestones.map((m) => (
								<li key={m.year} className="relative">
									<span className="absolute -left-[1.7rem] top-1 inline-flex size-3 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-[#0d092d]" />
									<div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-[#0d092d]">
										<p className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-300">
											{m.year}
										</p>
										<p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-indigo-100/75">
											{m.label}
										</p>
									</div>
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>

			{/* 7. LEADERSHIP */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							<Users className="size-3.5" weight="duotone" />
							Leadership
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							A small team of operators who've been on the other end of the alert.
						</h2>
					</div>

					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{leadership.map((person) => (
							<article
								key={person.name}
								className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(79,70,229,0.14),transparent_45%)]" />
								<div className="relative">
									<div className="flex size-14 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-lg font-semibold text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
										{person.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<h3 className="mt-5 text-lg font-semibold tracking-tight">
										{person.name}
									</h3>
									<p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">
										{person.role}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
										{person.bio}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 8. CTA */}
			<section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
				<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08051f] px-6 py-20 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.9)] sm:px-16 sm:py-24 lg:px-24">
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
					<div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
					<div className="animate-selim-spotlight pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.85)_0%,rgba(79,70,229,0.4)_42%,transparent_72%)] blur-3xl" />

					<div className="relative mx-auto max-w-3xl text-center">
						<h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
							Ready to see your environment through our lens?
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg">
							Book a 20-minute walkthrough. We'll map your current coverage gaps
							and show what AI-driven defense looks like in your stack.
						</p>

						<ul className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
							{[
								"No commitment",
								"Deploys in minutes",
								"SOC 2 Type II",
							].map((item) => (
								<li
									key={item}
									className="flex items-center gap-2 text-sm text-indigo-100/85"
								>
									<CheckCircle
										className="size-4 shrink-0 text-indigo-300"
										weight="fill"
									/>
									{item}
								</li>
							))}
						</ul>

						<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<a
								href="/contact"
								className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
							>
								Get Protected Now
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href="/case-studies"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
							>
								Read customer stories
								<ShieldCheck className="size-4" weight="bold" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
