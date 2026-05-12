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
	{ value: "200+", label: "Organisations protected" },
	{ value: "99.9%", label: "Threat detection accuracy" },
	{ value: "24/7", label: "Kathmandu SOC" },
	{ value: "2076", label: "NIA Guideline advisory" },
] as const;

const values = [
	{
		icon: Eye,
		title: "Vigilance",
		text: "We watch what others miss — round the clock, across endpoints, identities, cloud and people.",
	},
	{
		icon: Compass,
		title: "Clarity",
		text: "High-altitude perspective. Plain reports. Decisions your board can act on, not jargon.",
	},
	{
		icon: ShieldCheck,
		title: "Integrity",
		text: "Honest scopes, honest findings, honest pricing. No fear-selling, no theatre.",
	},
	{
		icon: Sparkle,
		title: "Local Pride",
		text: "Born in Nepal, named after Seim Lake in Humla. Built to defend Nepali organisations first.",
	},
	{
		icon: Brain,
		title: "Resilience",
		text: "From altitude to attack: we engineer systems — and teams — to stand back up faster than they fall.",
	},
] as const;

const capabilities = [
	{ icon: Pulse, label: "SOC as a Service" },
	{ icon: Eye, label: "VAPT" },
	{ icon: BracketsCurly, label: "Cloud Security" },
	{ icon: Lightning, label: "EDR" },
	{ icon: CubeFocus, label: "GRC & Compliance" },
	{ icon: ShieldCheck, label: "DFIR" },
] as const;

const principles = [
	{
		icon: Strategy,
		title: "Prevention before reaction",
		text: "We design for the threat before it fires — VAPT, hardening and awareness training tuned to Nepal's threat landscape.",
	},
	{
		icon: Compass,
		title: "Compliance you can defend",
		text: "ISO 27001, NIA Guideline 2076, PCI-DSS and Nepal Rastra Bank directives — evidence ready for any auditor.",
	},
	{
		icon: Lightning,
		title: "Local team, global tooling",
		text: "Kathmandu-based analysts, world-class SIEM, EDR and cloud security stacks. Local time-zone, local language, local trust.",
	},
] as const;

const certifications = [
	"CISSP",
	"CISM",
	"CEH",
	"ISO 27001 Lead Auditor / Lead Implementer",
	"CompTIA Security+",
	"CCNA / CCNP Security",
	"AWS Security Specialty",
	"Azure Security Specialty",
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
								About Selim Solution
							</div>
							<h1 className="text-balance text-[clamp(2.2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
								Clarity from the <br className="hidden sm:block" />
								highest ground.
							</h1>
							<p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 sm:text-lg">
								Selim Solution is Nepal's Managed Cyber Security Service Provider,
								named after Seim Lake in Humla's Nimi Valley — the far-western
								Himalayas bordering Tibet. From that altitude, we watch over
								Nepal's digital frontier.
							</p>

							<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<a
									href="/contact"
									className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50"
								>
									Talk to our SOC team
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
								Our story
							</div>
							<h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
								Named after a lake. Built for a nation.
							</h2>
							<p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-indigo-100/70">
								High in Humla's Nimi Valley, on the far-western edge of Nepal where
								the Himalayas meet Tibet, lies Seim Lake — a body of glacial water
								that has watched the region for millennia. Clear, still, and
								impossibly high, Seim Lake is a place of vigilance, of perspective,
								and of the kind of quiet resilience that only altitude teaches.
							</p>
							<p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-indigo-100/70">
								Selim Solution carries that name forward. We are Nepal's Managed
								Cyber Security Service Provider — a Kathmandu-based team that stands
								guard over the digital lives of banks, insurers, government bodies,
								telecoms, hospitals and NGOs. From the highest ground, we keep
								watch — so when threats rise, our clients stand resilient.
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
							The seven services we deliver.
						</h2>
						<p className="mt-5 text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
							SOC, VAPT, Cloud, EDR, GRC, DFIR and Security Awareness Training — one
							Kathmandu team, one accountable partner, one vigilant watch.
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

			{/* 6. CERTIFICATIONS */}
			<section id="certifications" className="bg-zinc-50 py-20 sm:py-24 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
						<div>
							<div className="flex items-center gap-2">
								<CirclesThreePlus
									className="size-5 text-indigo-500"
									weight="duotone"
								/>
								<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
									Certifications
								</div>
							</div>
							<h2 className="mt-5 max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
								Credentials our team carries.
							</h2>
							<p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
								Selim Solution's engineers hold internationally recognised
								certifications across security operations, audit, cloud and
								penetration testing.
							</p>
						</div>

						<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							{certifications.map((c) => (
								<li
									key={c}
									className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-[#0d092d]"
								>
									<span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
										<ShieldCheck className="size-4" weight="duotone" />
									</span>
									<span className="text-sm font-medium text-zinc-800 dark:text-indigo-50/90">
										{c}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* 7. TEAM */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							<Users className="size-3.5" weight="duotone" />
							Our team
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Kathmandu-based analysts, auditors and ethical hackers.
						</h2>
						<p className="mt-5 text-base leading-7 text-zinc-600 dark:text-indigo-100/65">
							Selim Solution is staffed by Nepali security professionals with deep
							experience defending banks, insurers, government platforms and
							critical infrastructure. We operate around the clock from Kathmandu —
							so when an incident fires, a human picks up.
						</p>
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
							Ready to see your organisation through our lens?
						</h2>
						<p className="mx-auto mt-5 max-w-xl text-base leading-7 text-indigo-100/70 sm:text-lg">
							Book a free 30-minute consultation. Our Kathmandu team will map your
							risks and show how Selim Solution stands watch.
						</p>

						<ul className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
							{[
								"Free assessment",
								"24/7 SOC, Kathmandu",
								"NIA 2076 advisory",
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
								Get Free Assessment
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href="/case-studies"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
							>
								Read case studies
								<ShieldCheck className="size-4" weight="bold" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
