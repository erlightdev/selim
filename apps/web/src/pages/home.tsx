import {
	ArrowRight,
	BracketsCurly,
	ChartLineUp,
	CheckCircle,
	CirclesFour,
	Code,
	CubeFocus,
	FlowArrow,
	GearSix,
	Headset,
	Lightning,
	Play,
	Pulse,
	Quotes,
	ShieldCheck,
	Sparkle,
	Strategy,
	TrendUp,
	Globe,
	DeviceMobile,
	Cloud,
	Desktop,
	WifiHigh,
	Cpu,
	Rocket,
} from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import { TestimonialsSection } from "@/components/testimonial-v2";

const servicesSlider = [
	{
		icon: Pulse,
		title: "SOC as a Service",
		text: "24/7 SIEM monitoring, threat detection and incident response from our Kathmandu SOC.",
		href: "/services/soc-as-a-service",
		tag: "01 · Managed",
	},
	{
		icon: CubeFocus,
		title: "VAPT",
		text: "Vulnerability assessment and penetration testing across web, mobile, network, APIs and cloud.",
		href: "/services/vapt",
		tag: "02 · Offensive",
	},
	{
		icon: Code,
		title: "Cloud Security",
		text: "AWS, Azure and GCP posture management — misconfigurations caught before attackers find them.",
		href: "/services/cloud-security",
		tag: "03 · Posture",
	},
	{
		icon: CirclesFour,
		title: "EDR",
		text: "Endpoint detection and response — every laptop, server and device watched in real time.",
		href: "/services/edr",
		tag: "04 · Endpoint",
	},
	{
		icon: BracketsCurly,
		title: "GRC & Compliance",
		text: "ISO 27001, NIA 2076, PCI-DSS and Nepal Rastra Bank directives — advisory, audit and evidence.",
		href: "/services/grc-compliance",
		tag: "05 · Compliance",
	},
	{
		icon: FlowArrow,
		title: "DFIR",
		text: "Digital forensics and incident response — rapid containment, root-cause analysis and recovery.",
		href: "/services/dfir",
		tag: "06 · Response",
	},
	{
		icon: Sparkle,
		title: "Awareness Training",
		text: "Phishing simulations and tailored security awareness training that lifts your weakest link.",
		href: "/services/security-awareness-training",
		tag: "07 · People",
	},
] as const;

// --- DATA ---
const clientLogos = [
	"Nepali Commercial Bank",
	"National Insurer",
	"Govt e-Services",
	"Himalayan Telecom",
	"Kathmandu Hospital",
	"NGO Network",
] as const;

const services = [
	{
		icon: Pulse,
		title: "SOC as a Service",
		text: "24/7 SIEM monitoring, threat detection and incident response from our Kathmandu SOC.",
		size: "md:col-span-2 md:row-span-2",
		metric: "01",
		panel: "SOC",
		stat: "24/7",
	},
	{
		icon: CubeFocus,
		title: "VAPT",
		text: "Vulnerability assessment and penetration testing across web, mobile, network, APIs and cloud.",
		size: "md:col-span-1 md:row-span-1",
		metric: "02",
		panel: "VAPT",
		stat: "87%",
	},
	{
		icon: Code,
		title: "Cloud Security",
		text: "AWS, Azure and GCP posture management — misconfigurations caught before attackers find them.",
		size: "md:col-span-1 md:row-span-1",
		metric: "03",
		panel: "Cloud",
		stat: "3",
	},
	{
		icon: CirclesFour,
		title: "EDR",
		text: "Endpoint detection and response — every laptop, server and device watched in real time.",
		size: "md:col-span-1 md:row-span-1",
		metric: "04",
		panel: "EDR",
		stat: "99.9%",
	},
	{
		icon: BracketsCurly,
		title: "GRC & Compliance",
		text: "ISO 27001, NIA Guideline 2076, PCI-DSS and Nepal Rastra Bank directives — advisory, audit and evidence.",
		size: "md:col-span-2 md:row-span-1",
		metric: "05",
		panel: "GRC",
		stat: "100%",
	},
] as const;

const cases = [
	{
		name: "Nepali Commercial Bank",
		sector: "Banking",
		headline: "87% reduction in critical vulnerabilities in 6 weeks",
		metric: "87%",
		metricLabel: "Critical vulns closed",
		summary:
			"Combined SOC, VAPT and GRC engagement aligned the bank with Nepal Rastra Bank directives and hardened core banking systems.",
		stack: ["SOC", "VAPT", "GRC"],
	},
	{
		name: "Regional Insurer",
		sector: "Insurance",
		headline: "Achieved NIA Guideline 2076 compliance",
		metric: "2076",
		metricLabel: "NIA compliant",
		summary:
			"Policies, controls and evidence assembled in line with NIA Guideline 2076 — passed audit on first attempt.",
		stack: ["GRC", "Awareness", "Advisory"],
	},
	{
		name: "Government e-Services",
		sector: "Public sector",
		headline: "Hardened against DDoS and credential attacks",
		metric: "24/7",
		metricLabel: "SOC monitoring",
		summary:
			"Citizen-facing platform now monitored around the clock from our Kathmandu SOC, with DFIR retainer in place.",
		stack: ["SOC", "Cloud", "DFIR"],
	},
] as const;

const technologies = [
	{ name: "React", slug: "react" },
	{ name: "TypeScript", slug: "typescript" },
	{ name: "Tailwind CSS", slug: "tailwindcss" },
	{ name: "Vite", slug: "vite" },
	{ name: "Node.js", slug: "nodedotjs" },
	{ name: "Figma", slug: "figma" },
] as const;

const testimonials = [
	{
		quote:
			"Selim took a product that felt scattered and gave us a clear operating surface in weeks, not quarters.",
		name: "Mara Voss",
		role: "COO, Harbor Ledger",
	},
	{
		quote:
			"The redesign did not just look better. Our team finally understood where every handoff belonged.",
		name: "Talia Brenner",
		role: "Product Lead, Northline Health",
	},
	{
		quote:
			"We stopped debating the interface and started shipping. The system made decisions visible.",
		name: "Ren Ito",
		role: "Founder, Aster Freight",
	},
] as const;

const dashboardRows = [
	{ label: "Exception queue", value: "18 active", tone: "bg-emerald-500" },
	{ label: "Design review", value: "04 changes", tone: "bg-amber-500" },
	{ label: "Release risk", value: "Low", tone: "bg-blue-500" },
] as const;

const collaborationMarkers = [
	{
		label: "Firewall Active",
		icon: ShieldCheck,
		className: "left-[11%] top-[24%] hidden sm:block",
	},
	{
		label: "Threat Blocked",
		icon: Lightning,
		className: "right-[13%] top-[20%] hidden md:block",
	},
	{
		label: "Endpoint Secured",
		icon: Pulse,
		className: "left-[20%] bottom-[13%] hidden md:block",
	},
	{
		label: "AI Monitoring",
		icon: Sparkle,
		className: "right-[23%] bottom-[22%] hidden sm:block",
	},
] as const;

// --- COMPONENTS ---
function TechIcon({ slug, name }: { slug: string; name: string }) {
	return (
		<img
			src={`https://cdn.jsdelivr.net/gh/GLINCKER/thesvg@main/public/icons/${slug}/default.svg`}
			alt={`${name} logo`}
			className="size-7 object-contain opacity-70 grayscale transition-opacity duration-300 group-hover:opacity-100 group-hover:grayscale-0"
			loading="lazy"
		/>
	);
}

function ServiceBentoCard({
	icon: Icon,
	title,
	text,
	size,
	metric,
	panel,
	stat,
}: (typeof services)[number]) {
	return (
		<article
			className={`group relative flex min-h-[18rem] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_34px_100px_-54px_rgba(79,70,229,0.8)] dark:border-white/10 dark:bg-[#0d092d] ${size}`}
		>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(79,70,229,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_38%)] opacity-90" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-indigo-500/10 to-transparent" />

			<div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
				<div className="flex items-start justify-between gap-4">
					<div className="inline-flex size-11 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 shadow-inner shadow-white dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
						<Icon className="size-5" weight="duotone" />
					</div>
					<span className="font-mono text-xs text-zinc-400 dark:text-white/38">
						{metric}
					</span>
				</div>

				<div className="mt-6 max-w-md">
					<h3 className="font-semibold text-xl text-zinc-950 tracking-tight dark:text-white">
						{title}
					</h3>
					<p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-indigo-100/62">
						{text}
					</p>
				</div>

				<div className="relative mt-auto pt-8">
					<div className="relative h-36 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-inner dark:border-white/10 dark:bg-[#08051f]">
						<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(79,70,229,0.08)_1px,transparent_1px)] bg-[size:2.4rem_2.4rem]" />
						<div className="absolute top-5 left-5 flex items-center gap-2">
							<span className="size-2 rounded-full bg-indigo-400" />
							<span className="font-semibold text-[10px] text-zinc-500 uppercase tracking-[0.18em] dark:text-indigo-100/55">
								{panel}
							</span>
						</div>
						<div className="absolute top-5 right-5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1 font-mono font-semibold text-indigo-600 text-xs shadow-sm dark:border-white/10 dark:bg-white/8 dark:text-indigo-100">
							{stat}
						</div>
						<div className="absolute right-5 bottom-5 left-5 space-y-2.5">
							<div className="h-2 w-4/5 rounded-full bg-indigo-200/80 dark:bg-white/14">
								<div className="h-full w-3/5 rounded-full bg-indigo-500 transition-all duration-700 group-hover:w-[82%]" />
							</div>
							<div className="grid grid-cols-3 gap-2">
								<span className="h-12 rounded-xl border border-zinc-200 bg-white/80 dark:border-white/10 dark:bg-white/8" />
								<span className="h-12 rounded-xl border border-zinc-200 bg-white/60 dark:border-white/10 dark:bg-white/[0.06]" />
								<span className="h-12 rounded-xl border border-zinc-200 bg-white/40 dark:border-white/10 dark:bg-white/[0.04]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

const everythingItems = [
	{
		title: "24/7 SOC Monitoring",
		text: "Round-the-clock SIEM monitoring from our Kathmandu SOC. Threats triaged, contained and escalated within minutes — not hours.",
	},
	{
		title: "VAPT & Penetration Testing",
		text: "Web, mobile, network, API and cloud assessments mapped to OWASP, MITRE ATT&CK and Nepali regulatory expectations.",
	},
	{
		title: "Cloud Security Posture",
		text: "Continuous AWS, Azure and GCP misconfiguration detection. Identity, workload and data risks surfaced before attackers find them.",
	},
	{
		title: "Endpoint Detection & Response",
		text: "Every laptop, server and device watched in real time with behavioural analytics and automated containment playbooks.",
	},
	{
		title: "GRC & Compliance",
		text: "ISO 27001, NIA Guideline 2076, PCI-DSS and NRB directives — advisory, audit prep and evidence collection end-to-end.",
	},
	{
		title: "Incident Response & DFIR",
		text: "On-call forensics retainer with rapid containment, root-cause analysis and post-incident hardening.",
	},
] as const;

function ServicesScrollSlider() {
	const trackRef = useRef<HTMLDivElement | null>(null);

	const scrollBy = (dir: 1 | -1) => {
		const el = trackRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-card]");
		const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
		el.scrollBy({ left: step * dir, behavior: "smooth" });
	};

	return (
		<div className="relative">
			<div
				ref={trackRef}
				className="services-track flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 py-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)] [-webkit-mask-composite:source-in]"
			>
				{servicesSlider.map(({ icon: Icon, ...s }) => (
					<a
						key={s.title}
						data-card
						href={s.href}
						className="group relative flex shrink-0 basis-[85%] snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_-40px_rgba(79,70,229,0.45)] sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:backdrop-blur dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_30px_80px_-40px_rgba(79,70,229,0.7)]"
					>
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.18),transparent_55%)]" />
						<div className="relative flex items-start justify-between gap-4">
							<div className="flex size-12 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-200 dark:shadow-inner dark:shadow-indigo-500/10">
								<Icon className="size-6" weight="duotone" />
							</div>
							<span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest dark:text-indigo-200/55">
								{s.tag}
							</span>
						</div>
						<h3 className="relative mt-6 font-semibold text-lg text-zinc-950 tracking-tight dark:text-white">
							{s.title}
						</h3>
						<p className="relative mt-2 flex-1 text-sm text-zinc-600 leading-relaxed dark:text-indigo-100/65">
							{s.text}
						</p>
						<div className="relative mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo-600 text-sm transition-transform group-hover:translate-x-0.5 dark:text-indigo-300">
							Learn more
							<ArrowRight className="size-4" />
						</div>
					</a>
				))}
			</div>

			<div className="mt-2 flex items-center justify-end gap-3">
				<button
					type="button"
					onClick={() => scrollBy(-1)}
					aria-label="Previous services"
					className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-indigo-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-indigo-200 dark:shadow-none dark:backdrop-blur dark:hover:border-indigo-400/50 dark:hover:bg-indigo-600 dark:hover:text-white"
				>
					<ArrowRight className="size-4 rotate-180" weight="bold" />
				</button>
				<button
					type="button"
					onClick={() => scrollBy(1)}
					aria-label="Next services"
					className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-indigo-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-indigo-200 dark:shadow-none dark:backdrop-blur dark:hover:border-indigo-400/50 dark:hover:bg-indigo-600 dark:hover:text-white"
				>
					<ArrowRight className="size-4" weight="bold" />
				</button>
			</div>

			<style
				dangerouslySetInnerHTML={{
					__html: `
						.services-track::-webkit-scrollbar { display: none; }
						.services-track { -ms-overflow-style: none; scrollbar-width: none; }
					`,
				}}
			/>
		</div>
	);
}

function EverythingInOneSection() {
	const [open, setOpen] = useState(0);

	return (
		<section className="relative overflow-hidden bg-[#08051f] py-16 text-white sm:py-20">
			<div className="pointer-events-none absolute top-1/3 -left-32 size-[28rem] rounded-full bg-indigo-600/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-32 bottom-0 size-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<h2 className="font-semibold text-3xl tracking-tight sm:text-4xl">
						Everything you need in one place.
					</h2>
					<p className="mt-4 max-w-2xl text-base text-indigo-100/70 leading-relaxed">
						Selim Solution delivers a proactive, end-to-end cyber security
						programme — protecting your people, data and digital assets from
						threats before they cause harm. One Kathmandu team. One accountable
						partner.
					</p>
				</div>

				<div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
					{/* LEFT — Accordion */}
					<div>
						<p className="font-semibold text-indigo-300 text-xs uppercase tracking-[0.22em]">
							Equip your organisation, today
						</p>
						<div className="mt-5 flex flex-col gap-2.5">
							{everythingItems.map((item, i) => {
								const isOpen = open === i;
								return (
									<button
										key={item.title}
										type="button"
										onClick={() => setOpen(isOpen ? -1 : i)}
										className={`group w-full rounded-xl border text-left transition-all duration-300 ${
											isOpen
												? "border-indigo-400/40 bg-indigo-600/15 shadow-[0_18px_50px_-30px_rgba(79,70,229,0.9)]"
												: "border-white/10 bg-white/[0.03] hover:border-indigo-400/30 hover:bg-white/[0.06]"
										}`}
									>
										<div className="flex items-center gap-3 px-4 py-3.5">
											<span
												className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-all ${
													isOpen
														? "bg-indigo-500 text-white"
														: "bg-white/10 text-indigo-200 group-hover:bg-indigo-500/40"
												}`}
											>
												<ArrowRight
													className={`size-3 transition-transform duration-300 ${
														isOpen ? "rotate-90" : ""
													}`}
													weight="bold"
												/>
											</span>
											<span className="flex-1 font-semibold text-sm text-white tracking-tight">
												{item.title}
											</span>
										</div>
										<div
											className={`grid overflow-hidden transition-all duration-300 ${
												isOpen
													? "grid-rows-[1fr] opacity-100"
													: "grid-rows-[0fr] opacity-0"
											}`}
										>
											<div className="overflow-hidden">
												<p className="px-4 pb-4 pl-[3.25rem] text-sm text-indigo-100/70 leading-relaxed">
													{item.text}
												</p>
											</div>
										</div>
									</button>
								);
							})}
						</div>
					</div>

					{/* RIGHT — Dashboard mockup */}
					<div className="relative">
						<div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-600/20 via-transparent to-indigo-500/10 blur-2xl" />

						{/* Main dashboard panel */}
						<div className="relative rounded-2xl border border-white/10 bg-[#0d092d]/90 p-4 shadow-[0_40px_120px_-50px_rgba(79,70,229,0.6)] backdrop-blur">
							<div className="flex items-center gap-1.5 pb-3">
								<span className="size-2 rounded-full bg-rose-400/70" />
								<span className="size-2 rounded-full bg-amber-400/70" />
								<span className="size-2 rounded-full bg-emerald-400/70" />
								<span className="ml-3 font-mono text-[10px] text-indigo-100/40 uppercase tracking-widest">
									selim.soc / threat-overview
								</span>
							</div>

							<div className="flex items-center justify-between border-white/5 border-t border-b py-2.5">
								<span className="font-semibold text-[11px] text-indigo-100/60 uppercase tracking-wider">
									Threat Actor Landscape
								</span>
								<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 font-medium text-[10px] text-emerald-300">
									<span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
									Live
								</span>
							</div>

							<div className="mt-4 grid grid-cols-3 gap-3">
								{[
									{ label: "APT Group", val: "32", tone: "bg-rose-500" },
									{ label: "Hacktivist", val: "14", tone: "bg-amber-500" },
									{ label: "Insider", val: "07", tone: "bg-indigo-500" },
								].map((s) => (
									<div
										key={s.label}
										className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5"
									>
										<div className="flex items-center gap-1.5">
											<span className={`size-1.5 rounded-full ${s.tone}`} />
											<span className="text-[9px] text-indigo-100/55 uppercase tracking-wider">
												{s.label}
											</span>
										</div>
										<div className="mt-1.5 font-mono font-semibold text-lg text-white">
											{s.val}
										</div>
									</div>
								))}
							</div>

							<div className="mt-4">
								<div className="mb-2 flex items-center justify-between">
									<span className="font-semibold text-[10px] text-indigo-100/55 uppercase tracking-wider">
										Signal volume / 24h
									</span>
									<span className="font-mono text-[10px] text-indigo-200">
										+18.4%
									</span>
								</div>
								<div className="flex items-end gap-1 h-16">
									{[40, 65, 35, 80, 55, 90, 60, 75, 45, 95, 70, 88].map(
										(h, i) => (
											<div
												key={i}
												className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-indigo-400/90"
												style={{ height: `${h}%` }}
											/>
										),
									)}
								</div>
							</div>

							<div className="mt-4 space-y-2">
								{[
									{
										label: "Brute force / IAM",
										val: "Contained",
										tone: "text-emerald-300 bg-emerald-500/10",
									},
									{
										label: "Phishing campaign",
										val: "Investigating",
										tone: "text-amber-300 bg-amber-500/10",
									},
									{
										label: "Cloud misconfig",
										val: "Remediated",
										tone: "text-indigo-200 bg-indigo-500/15",
									},
								].map((row) => (
									<div
										key={row.label}
										className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
									>
										<span className="text-[11px] text-indigo-100/75">
											{row.label}
										</span>
										<span
											className={`rounded-full px-2 py-0.5 font-medium text-[10px] ${row.tone}`}
										>
											{row.val}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Floating card 1 — Targeted industries */}
						<div className="absolute -top-6 -right-4 hidden w-52 rounded-xl border border-white/10 bg-[#0d092d]/95 p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur sm:block">
							<div className="flex items-center justify-between pb-2">
								<span className="font-semibold text-[10px] text-indigo-100/60 uppercase tracking-wider">
									Targeted Industries
								</span>
								<span className="size-1.5 animate-pulse rounded-full bg-indigo-400" />
							</div>
							{[
								{ label: "Banking", val: 32 },
								{ label: "Insurance", val: 24 },
								{ label: "Government", val: 17 },
								{ label: "Healthcare", val: 12 },
							].map((r) => (
								<div
									key={r.label}
									className="flex items-center justify-between py-1 text-[11px]"
								>
									<span className="flex items-center gap-1.5 text-indigo-100/75">
										<ShieldCheck
											className="size-3 text-indigo-300"
											weight="duotone"
										/>
										{r.label}
									</span>
									<span className="font-mono font-semibold text-white">
										{r.val}
									</span>
								</div>
							))}
						</div>

						{/* Floating card 2 — Detection rate */}
						<div className="absolute -bottom-5 -left-3 hidden w-44 rounded-xl border border-white/10 bg-[#0d092d]/95 p-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur sm:block">
							<div className="flex items-center gap-1.5 pb-2">
								<Pulse
									className="size-3 text-indigo-300"
									weight="duotone"
								/>
								<span className="font-semibold text-[10px] text-indigo-100/60 uppercase tracking-wider">
									Detection rate
								</span>
							</div>
							<div className="font-mono font-semibold text-2xl text-white">
								99.9<span className="text-indigo-400">%</span>
							</div>
							<div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
								<div className="h-full w-[99%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300" />
							</div>
							<p className="mt-2 text-[10px] text-indigo-100/55">
								Pre-payload across 200+ Nepali orgs
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function HomePage() {
	return (
		<main className="bg-zinc-50 font-sans text-zinc-950 selection:bg-indigo-200 selection:text-indigo-950 dark:bg-zinc-950 dark:text-zinc-50">
			{/* Injecting keyframes safely for the marquee without needing tailwind.config.js changes */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
				@keyframes infinite-scroll {
					from { transform: translateX(0); }
					to { transform: translateX(-50%); }
				}
				@keyframes selim-hero-spotlight {
					0%, 100% { transform: translate3d(-6%, 6%, 0) scale(1); opacity: .88; }
					50% { transform: translate3d(8%, -4%, 0) scale(1.08); opacity: 1; }
				}
				@keyframes selim-marker-float {
					0%, 100% { transform: translate3d(0, 0, 0); }
					50% { transform: translate3d(0, -10px, 0); }
				}
				.animate-infinite-scroll {
					animation: infinite-scroll 30s linear infinite;
				}
				.animate-selim-spotlight {
					animation: selim-hero-spotlight 10s ease-in-out infinite;
				}
				.animate-selim-marker {
					animation: selim-marker-float 6s ease-in-out infinite;
				}
				.hide-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.hide-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.cases-swiper { padding-bottom: 4.5rem !important; overflow: hidden !important; }
				.cases-swiper .swiper-wrapper { align-items: stretch; }
				.cases-swiper .swiper-slide { height: auto; display: flex; }
				.cases-swiper .swiper-slide > article { width: 100%; }
				@media (min-width: 640px) {
					.cases-swiper { overflow: visible !important; }
				}
				@media (max-width: 639px) {
					.cases-swiper > .swiper-button-prev,
					.cases-swiper > .swiper-button-next { display: none !important; }
					.cases-swiper > .swiper-pagination {
						left: 50% !important;
						transform: translateX(-50%);
						text-align: center !important;
					}
				}
				.cases-swiper > .swiper-button-prev,
				.cases-swiper > .swiper-button-next {
					top: auto !important;
					bottom: 0 !important;
					width: 44px !important;
					height: 44px !important;
					margin-top: 0 !important;
					border-radius: 9999px !important;
					border: 1px solid rgb(228 228 231) !important;
					background: #ffffff !important;
					color: #18142f !important;
					transition: all 0.2s ease !important;
					box-shadow: 0 12px 30px -18px rgba(79,70,229,0.45) !important;
				}
				.dark .cases-swiper > .swiper-button-prev,
				.dark .cases-swiper > .swiper-button-next {
					background: #0d092d !important;
					border-color: rgba(255,255,255,0.1) !important;
					color: #c7d2fe !important;
				}
				.cases-swiper > .swiper-button-prev:hover,
				.cases-swiper > .swiper-button-next:hover {
					background: #4f46e5 !important;
					border-color: #4f46e5 !important;
					color: #ffffff !important;
					transform: translateY(-2px);
				}
				.cases-swiper > .swiper-button-prev { left: auto !important; right: 56px !important; }
				.cases-swiper > .swiper-button-next { left: auto !important; right: 0 !important; }
				.cases-swiper > .swiper-button-prev::after,
				.cases-swiper > .swiper-button-next::after {
					font-size: 14px !important;
					font-weight: 800 !important;
				}
				.cases-swiper > .swiper-button-disabled { opacity: 0.4 !important; }
				.cases-swiper > .swiper-pagination {
					bottom: 16px !important;
					top: auto !important;
					left: 0 !important;
					text-align: left;
					width: auto !important;
				}
				.cases-swiper .swiper-pagination-bullet {
					width: 22px;
					height: 4px;
					border-radius: 9999px;
					background: rgb(212 212 216);
					opacity: 1;
					transition: all 0.3s ease;
				}
				.dark .cases-swiper .swiper-pagination-bullet {
					background: rgba(255,255,255,0.18);
				}
				.cases-swiper .swiper-pagination-bullet-active {
					width: 36px;
					background: #4f46e5;
				}
			`,
				}}
			/>

			{/* 1. HERO SECTION */}
			<section className="relative -mx-1.5 -mt-40 overflow-hidden pt-0 pb-8 sm:-mx-4 sm:-mt-44 sm:pb-20 lg:-mx-6 lg:pb-6">
				<div className="w-full">
					<div className="relative min-h-[550px] w-full overflow-hidden border-white/10 border-b bg-[#08051f] px-5 pt-52 pb-16 text-white shadow-[0_40px_140px_-70px_rgba(79,70,229,0.95)] sm:min-h-[720px] sm:px-10 sm:pt-60 sm:pb-24 lg:min-h-[780px] lg:px-16 lg:pt-56">
						<video
							src="/hero-video.mp4"
							autoPlay
							loop
							muted
							playsInline
							className="pointer-events-none absolute inset-0 size-full object-cover opacity-60"
						/>
						<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#08051f]/70 via-[#08051f]/50 to-[#08051f]/85" />

						{collaborationMarkers.map((marker, index) => {
							const Icon = marker.icon;
							return (
								<div
									key={marker.label}
									className={`absolute z-10 animate-selim-marker ${marker.className}`}
									style={{ animationDelay: `${index * 0.9}s` }}
								>
									<span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-[#0d092d]/85 px-3 py-1.5 font-medium text-indigo-200 text-xs shadow-[0_12px_34px_-18px_rgba(79,70,229,0.6)] backdrop-blur lg:text-sm">
										<Icon className="size-3.5 text-indigo-400" weight="fill" />
										{marker.label}
									</span>
								</div>
							);
						})}

						<div className="relative z-20 mx-auto flex min-h-[400px] max-w-5xl flex-col items-center justify-center text-center sm:min-h-[420px] lg:min-h-[460px]">
							<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 font-medium text-indigo-100 text-xs shadow-inner shadow-white/5 backdrop-blur">
								<span className="relative flex size-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-indigo-200" />
								</span>
								Nepal's Managed Cyber Security Service Provider
							</div>

							<h1 className="max-w-7xl text-balance font-semibold text-[clamp(2.4rem,9vw,3.2rem)] text-white leading-[0.93] tracking-tight">
								Protect your business from cyber threats.
							</h1>

							<p className="mt-7 max-w-2xl text-pretty text-base text-indigo-100/74 leading-7 sm:text-lg">
								Selim Solution is Nepal's leading Managed Cyber Security Service
								Provider — named after the Seim Lake of Humla's Nimi Valley,
								standing guard over your business like the Himalayas stand over
								the horizon.
							</p>

							<ul className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
								{[
									"200+ organisations protected",
									"24/7/365 SOC monitoring",
									"99.9% threat detection accuracy",
									"NIA Guideline 2076 advisory",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-2 text-indigo-100/85 text-sm"
									>
										<CheckCircle
											className="size-4 shrink-0 text-indigo-300"
											weight="fill"
										/>
										{item}
									</li>
								))}
							</ul>

							<div className="mt-10 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
								<a
									href="/contact"
									className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-[#151032] text-sm shadow-[0_20px_60px_-28px_rgba(255,255,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 active:translate-y-0 sm:w-auto"
								>
									Get a Free Security Assessment
									<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
								</a>
								<a
									href="/services"
									className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/16 bg-white/8 px-6 font-semibold text-sm text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12 active:translate-y-0 sm:w-auto"
								>
									Explore Our Services
									<ShieldCheck className="size-4" weight="bold" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. LOGO MARQUEE */}
			<section className="border-zinc-200 border-y bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950/50">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
						<div className="flex w-max animate-infinite-scroll items-center gap-12 pr-12">
							{[...clientLogos, ...clientLogos, ...clientLogos].map(
								(client, index) => (
									<span
										key={index}
										className="whitespace-nowrap font-bold text-lg text-zinc-400 tracking-tight dark:text-zinc-600"
									>
										{client}
									</span>
								),
							)}
						</div>
					</div>
				</div>
			</section>

			{/* 3. ABOUT */}
			<section className="relative overflow-hidden bg-[#f4f7fb] py-12 text-zinc-950 sm:py-14 dark:bg-[#06031a] dark:text-white">
				<div className="pointer-events-none absolute top-0 right-0 h-72 w-72 bg-indigo-500/[0.08] blur-3xl" />

				<div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[22rem_1fr] lg:gap-12 lg:px-8">
					<div className="relative min-h-[20rem] overflow-hidden rounded-2xl bg-[#08051f] shadow-[0_24px_60px_-40px_rgba(8,5,31,0.75)] lg:min-h-[24rem]">
						<img
							src="https://images.pexels.com/photos/8720617/pexels-photo-8720617.jpeg"
							alt="Cyber security team reviewing digital threat monitoring dashboard"
							className="absolute inset-0 size-full object-cover opacity-[0.78]"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,5,31,0.12),rgba(8,5,31,0.42)),radial-gradient(circle_at_35%_15%,rgba(99,102,241,0.28),transparent_42%)]" />
						<span className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_18px_42px_-18px_rgba(79,70,229,0.9)] ring-[12px] ring-indigo-600/25">
							<Play className="ml-1 size-6" weight="fill" />
						</span>
						<div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-lg border border-white/14 bg-[#08051f]/70 px-3 py-2 text-white backdrop-blur-md">
							<span className="font-semibold text-xs">Kathmandu SOC</span>
							<span className="font-mono text-indigo-100/75 text-[10px]">
								24/7 LIVE
							</span>
						</div>
					</div>

					<div className="relative z-10">
						<div className="inline-flex items-center gap-2 font-semibold text-indigo-600 text-xs uppercase tracking-[0.18em] dark:text-indigo-300">
							<span className="size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
							About Selim Solution
						</div>

						<h2 className="mt-4 max-w-2xl text-balance font-semibold text-3xl text-zinc-950 leading-tight tracking-tight sm:text-4xl dark:text-white">
							Intelligent cyber security, built for Nepal.
						</h2>

						<p className="mt-4 max-w-2xl text-base text-zinc-600 leading-relaxed dark:text-indigo-100/70">
							Selim Solution protects Nepali organisations with managed SOC,
							VAPT, cloud security, EDR, GRC and incident response — local team,
							global-grade tooling.
						</p>

						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							<article className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-[#0d092d]">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-white/5 dark:text-indigo-300">
									<GearSix className="size-5" weight="duotone" />
								</div>
								<div>
									<h3 className="font-semibold text-sm text-zinc-950 tracking-tight dark:text-white">
										Best services
									</h3>
									<p className="mt-1 text-xs text-zinc-600 leading-relaxed dark:text-indigo-100/65">
										SOC, VAPT and compliance from one accountable Kathmandu team.
									</p>
								</div>
							</article>

							<article className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-[#0d092d]">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-white/5 dark:text-indigo-300">
									<Headset className="size-5" weight="duotone" />
								</div>
								<div>
									<h3 className="font-semibold text-sm text-zinc-950 tracking-tight dark:text-white">
										24/7 call support
									</h3>
									<p className="mt-1 text-xs text-zinc-600 leading-relaxed dark:text-indigo-100/65">
										Human analysts ready when incidents need fast response.
									</p>
								</div>
							</article>
						</div>

						<div className="mt-6 flex flex-wrap items-center gap-5">
							<a
								href="/about"
								className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 font-semibold text-sm text-white shadow-[0_12px_32px_-18px_rgba(79,70,229,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#f4f7fb] dark:focus:ring-offset-[#06031a]"
							>
								Explore More
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
							</a>

							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-zinc-200 text-indigo-700 ring-2 ring-white dark:from-indigo-500/20 dark:to-white/5 dark:text-indigo-200 dark:ring-white/10">
									<ShieldCheck className="size-5" weight="duotone" />
								</div>
								<div>
									<p className="font-semibold text-sm text-zinc-950 dark:text-white">
										Selim SOC Team
									</p>
									<p className="text-xs text-zinc-500 dark:text-indigo-100/55">
										Cyber Security Partner
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3.5 EVERYTHING IN ONE PLACE */}
			<EverythingInOneSection />

			{/* 3.6 BENEFITS */}
			<section className="bg-white py-16 sm:py-20 dark:bg-[#06031a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 text-xs uppercase tracking-[0.18em] dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
							<span className="size-1.5 rounded-full bg-indigo-500" />
							Why Selim
						</div>
						<h2 className="mt-5 font-semibold text-3xl text-zinc-950 tracking-tight sm:text-4xl dark:text-white">
							Benefits that compound, day after day.
						</h2>
						<p className="mt-4 text-base text-zinc-600 leading-relaxed dark:text-indigo-100/70">
							A measurable security programme — not a checklist. Here is what
							changes for your team from week one.
						</p>
					</div>

					<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								icon: ShieldCheck,
								title: "Proactive protection",
								text: "Threats detected and contained before payload — across endpoints, identities and cloud workloads.",
							},
							{
								icon: Lightning,
								title: "Faster response",
								text: "Median containment under 15 minutes from our Kathmandu SOC. No tickets lost overnight.",
							},
							{
								icon: ChartLineUp,
								title: "Risk you can measure",
								text: "Monthly executive reporting on exposure, MTTR and compliance posture — in plain English.",
							},
							{
								icon: BracketsCurly,
								title: "Nepal-first compliance",
								text: "NIA 2076, NRB directives, PCI-DSS and ISO 27001 — mapped to your controls, evidence assembled.",
							},
							{
								icon: TrendUp,
								title: "Lower total cost",
								text: "One accountable MSSP partner replaces fragmented tools, vendors and one-off audits.",
							},
							{
								icon: Headset,
								title: "Always-on human support",
								text: "Local analysts on call 24/7/365. Real people, not a queue — fluent in Nepali and English.",
							},
							{
								icon: CubeFocus,
								title: "Reduced attack surface",
								text: "Continuous VAPT and posture management keep misconfigurations and shadow IT in check.",
							},
							{
								icon: Sparkle,
								title: "Security-aware culture",
								text: "Phishing simulations and tailored training lift your weakest link — your people.",
							},
							{
								icon: FlowArrow,
								title: "Incident-ready playbooks",
								text: "DFIR retainer, tested runbooks and tabletop exercises — so you are never improvising in a crisis.",
							},
						].map(({ icon: Icon, title, text }) => (
							<article
								key={title}
								className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_-40px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/40"
							>
								<div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_0%,rgba(79,70,229,0.1),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								<div className="relative flex size-11 items-center justify-center rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white text-indigo-600 shadow-inner shadow-white dark:border-white/10 dark:from-indigo-500/20 dark:to-[#0d092d] dark:text-indigo-200">
									<Icon className="size-5" weight="duotone" />
								</div>
								<h3 className="relative mt-5 font-semibold text-base text-zinc-950 tracking-tight dark:text-white">
									{title}
								</h3>
								<p className="relative mt-2 text-sm text-zinc-600 leading-relaxed dark:text-indigo-100/65">
									{text}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 3.7 SERVICES SLIDER */}
			<section className="relative overflow-hidden bg-[#f4f7fb] py-16 text-zinc-950 sm:py-20 dark:bg-[#08051f] dark:text-white">
				<div className="pointer-events-none absolute -top-32 right-0 size-[28rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/20" />
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(79,70,229,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 font-semibold text-indigo-600 text-xs uppercase tracking-[0.22em] dark:text-indigo-300">
								<span className="size-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
								Services
							</div>
							<h2 className="mt-4 font-semibold text-3xl tracking-tight sm:text-4xl">
								One Kathmandu team. Every layer of defence.
							</h2>
							<p className="mt-3 text-base text-zinc-600 leading-relaxed dark:text-indigo-100/70">
								From SOC monitoring to forensics — slide through what we deliver
								across managed, offensive and compliance practices.
							</p>
						</div>
						<a
							href="/services"
							className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 self-start rounded-xl border border-zinc-200 bg-white px-5 font-semibold text-sm text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 sm:self-end dark:border-white/15 dark:bg-white/5 dark:text-white dark:shadow-none dark:backdrop-blur dark:hover:border-indigo-400/40 dark:hover:bg-white/10 dark:hover:text-white"
						>
							View all services
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>

					<ServicesScrollSlider />
				</div>
			</section>

			{/* 3.8 OUR OFFERING — COVERAGE SURFACES */}
			<section className="relative overflow-hidden bg-white py-16 text-zinc-950 sm:py-20 dark:bg-[#08051f] dark:text-white">
				<div className="pointer-events-none absolute top-1/2 -right-10 hidden h-96 w-96 -translate-y-1/2 opacity-40 lg:block dark:opacity-30">
					<svg viewBox="0 0 400 400" fill="none" className="size-full">
						<g stroke="currentColor" strokeWidth="1" className="text-indigo-400/60 dark:text-indigo-400/45">
							<path d="M0 80 L120 80 L160 120 L260 120 L300 80 L400 80" />
							<path d="M0 180 L80 180 L120 220 L240 220 L280 180 L400 180" />
							<path d="M0 280 L140 280 L180 240 L300 240 L340 280 L400 280" />
							<path d="M60 0 L60 60 L100 100 L100 200" />
							<path d="M200 0 L200 80 L240 120 L240 240" />
							<path d="M340 0 L340 60 L300 100 L300 220" />
						</g>
						<g fill="currentColor" className="text-indigo-500 dark:text-indigo-400">
							<circle cx="120" cy="80" r="3" />
							<circle cx="260" cy="120" r="3" />
							<circle cx="240" cy="220" r="3" />
							<circle cx="180" cy="240" r="3" />
							<circle cx="100" cy="200" r="3" />
							<circle cx="300" cy="220" r="3" />
						</g>
					</svg>
				</div>
				<div className="pointer-events-none absolute -bottom-32 -left-20 size-[24rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/15" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 text-xs uppercase tracking-[0.22em] dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-200">
								<span className="size-1.5 rounded-full bg-indigo-500 dark:bg-indigo-300" />
								Our Offering
							</div>
							<h2 className="mt-5 font-semibold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
								Enhance and pioneer using
								<br className="hidden sm:block" /> technology trends.
							</h2>
						</div>
						<a
							href="/services"
							className="group inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-semibold text-sm text-white shadow-[0_20px_50px_-20px_rgba(79,70,229,0.9)] transition-all hover:-translate-y-0.5 hover:bg-indigo-500"
						>
							Explore More
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>

					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
						{[
							{ icon: Globe, label: "Web" },
							{ icon: DeviceMobile, label: "Mobile" },
							{ icon: Cloud, label: "Cloud" },
							{ icon: Desktop, label: "Endpoint" },
							{ icon: WifiHigh, label: "Network" },
							{ icon: Cpu, label: "IoT" },
						].map(({ icon: Icon, label }) => (
							<a
								key={label}
								href="/services"
								className="group relative flex flex-col items-center pt-9"
							>
								<div className="absolute top-0 z-10 flex size-16 items-center justify-center rounded-full border border-indigo-200 bg-white shadow-[0_16px_40px_-18px_rgba(79,70,229,0.45)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-500 group-hover:bg-indigo-600 dark:border-indigo-400/30 dark:bg-[#0d092d] dark:shadow-[0_16px_40px_-18px_rgba(79,70,229,0.8)] dark:group-hover:border-indigo-400">
									<Icon
										className="size-7 text-indigo-600 transition-colors group-hover:text-white dark:text-indigo-300"
										weight="duotone"
									/>
								</div>
								<div className="flex h-28 w-full items-end justify-center rounded-2xl border border-zinc-200 bg-zinc-50 pb-5 transition-all duration-300 group-hover:border-indigo-200 group-hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:backdrop-blur dark:group-hover:border-indigo-400/40 dark:group-hover:bg-white/[0.06]">
									<span className="font-semibold text-base text-zinc-950 tracking-tight dark:text-white">
										{label}
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* 4. BENTO GRID — CYBERSECURITY CAPABILITIES */}
			<section className="py-16 dark:bg-[#06031a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<h2 className="font-semibold text-base text-indigo-600 uppercase tracking-widest dark:text-indigo-300">
								Capabilities
							</h2>
							<p className="mt-4 font-bold text-3xl text-zinc-900 tracking-tight sm:text-4xl dark:text-white">
								Seven services. One vigilant team.
							</p>
							<p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
								SOC, VAPT, Cloud, EDR, GRC, DFIR and Security Awareness Training
								— delivered 24/7 from our Kathmandu SOC.
							</p>
						</div>
						<a
							href="/services"
							className="group inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-xl border border-zinc-200 bg-white px-5 font-semibold text-sm text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 sm:self-end dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400/40 dark:hover:text-indigo-200"
						>
							View all services
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>

					<div className="grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
						{/* Brand mark / shield card */}
						<article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(79,70,229,0.28),transparent_55%)]" />
							<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
							<div className="relative flex h-full flex-col items-center justify-center p-6">
								<div className="relative">
									<div className="absolute inset-0 -z-10 rounded-3xl bg-indigo-500/40 blur-2xl" />
									<div className="flex size-24 items-center justify-center rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white shadow-[0_30px_60px_-20px_rgba(79,70,229,0.6)] dark:border-white/10 dark:from-indigo-500/30 dark:to-[#0d092d]">
										<ShieldCheck
											className="size-12 text-indigo-600 dark:text-indigo-200"
											weight="duotone"
										/>
									</div>
								</div>
								<p className="mt-8 text-center font-medium text-sm text-zinc-700 dark:text-indigo-100/75">
									Vigilant. Resilient. Nepali.
								</p>
							</div>
						</article>

						{/* Code / security snippet — large card */}
						<article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 md:col-span-2 dark:border-white/10 dark:bg-[#0d092d]">
							<div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-indigo-500/30 blur-3xl" />
							<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(79,70,229,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(79,70,229,0.06)_1px,transparent_1px)] bg-[size:2.4rem_2.4rem]" />
							<div className="relative flex h-full flex-col p-6 sm:p-8">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-medium text-indigo-700 text-xs dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
										<span className="size-1.5 rounded-full bg-indigo-500" />
										SOC Engine
									</div>
									<Code
										className="size-5 text-zinc-400 dark:text-indigo-200/50"
										weight="duotone"
									/>
								</div>

								<div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-mono text-[13px] leading-relaxed shadow-inner dark:border-white/10 dark:bg-[#08051f]">
									<div className="flex items-center gap-1.5 pb-3">
										<span className="size-2.5 rounded-full bg-rose-400/70" />
										<span className="size-2.5 rounded-full bg-amber-400/70" />
										<span className="size-2.5 rounded-full bg-emerald-400/70" />
									</div>
									<pre className="whitespace-pre-wrap text-zinc-700 dark:text-indigo-100/80">
										{`const selim = soc.watch({
  signals: ["siem", "endpoint", "cloud"],
  region: "np-kathmandu",
});
selim.on("incident", (e) => respond(e));`}
									</pre>
								</div>

								<div className="mt-5 flex items-center gap-2">
									<ShieldCheck
										className="size-4 text-indigo-600 dark:text-indigo-300"
										weight="fill"
									/>
									<span className="text-sm text-zinc-600 dark:text-indigo-100/70">
										Detections tuned to NIA 2076 and NRB directives
									</span>
								</div>
							</div>
						</article>

						{/* Global threat tracking */}
						<article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 md:row-span-2 dark:border-white/10 dark:bg-[#0d092d]">
							<div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-indigo-500/15 to-transparent" />
							<div className="relative flex h-full flex-col p-6 sm:p-8">
								<div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-700 text-xs dark:bg-white/8 dark:text-indigo-200">
									<Lightning weight="fill" className="size-3" />
									Live
								</div>
								<h3 className="mt-6 font-semibold text-2xl text-zinc-950 leading-tight tracking-tight dark:text-white">
									24/7 SOC
									<br /> from Kathmandu
								</h3>
								<p className="mt-3 text-sm text-zinc-600 dark:text-indigo-100/65">
									Local analysts, global tooling. Watching every endpoint,
									identity and cloud workload the moment it shifts.
								</p>

								{/* Globe-like dot grid */}
								<div className="relative mt-auto flex justify-center pt-8">
									<div className="relative size-48 sm:size-56">
										<div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(79,70,229,0.55),transparent_60%)] blur-2xl" />
										<div
											className="absolute inset-0 rounded-full opacity-90 [mask-image:radial-gradient(circle_at_50%_60%,black_55%,transparent_70%)]"
											style={{
												backgroundImage:
													"radial-gradient(rgba(79,70,229,0.85) 1.4px, transparent 1.4px)",
												backgroundSize: "10px 10px",
											}}
										/>
										<div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
									</div>
								</div>
							</div>
						</article>

						{/* Detection metric */}
						<article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.18),transparent_55%)]" />
							<div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
								<div>
									<p className="font-semibold text-xs text-zinc-500 uppercase tracking-[0.18em] dark:text-indigo-200/60">
										Detection accuracy
									</p>
									<p className="mt-4 font-semibold text-6xl text-zinc-950 tracking-tight dark:text-white">
										99.9<span className="text-indigo-500">%</span>
									</p>
								</div>
								<p className="text-sm text-zinc-600 dark:text-indigo-100/65">
									Threats detected before payload across 200+ Nepali
									organisations.
								</p>
							</div>
						</article>

						{/* AI monitoring pulse */}
						<article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_80px_-52px_rgba(79,70,229,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-[#0d092d]">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(79,70,229,0.2),transparent_55%)]" />
							<div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
								<div className="flex items-center gap-2">
									<Pulse
										className="size-5 text-indigo-600 dark:text-indigo-300"
										weight="duotone"
									/>
									<span className="font-semibold text-xs text-zinc-500 uppercase tracking-[0.18em] dark:text-indigo-200/60">
										SOC Pulse
									</span>
								</div>
								<svg
									viewBox="0 0 200 60"
									className="w-full text-indigo-500 dark:text-indigo-300"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									role="img"
									aria-label="AI monitoring signal waveform"
								>
									<path d="M0 40 L25 40 L35 20 L45 50 L55 30 L70 30 L80 10 L90 50 L105 30 L120 30 L130 24 L145 40 L200 40" />
								</svg>
								<p className="text-sm text-zinc-600 dark:text-indigo-100/65">
									24/7 SIEM signals across users, devices and Nepali cloud
									workloads.
								</p>
							</div>
						</article>

						{/* CTA card */}
						<article className="group relative overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-[0_30px_90px_-40px_rgba(79,70,229,0.8)] transition-all duration-500 hover:-translate-y-1 md:col-span-2 dark:border-white/10">
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.35),transparent_55%)]" />
							<div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-white/10 blur-2xl" />
							<div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
								<div>
									<p className="font-semibold text-indigo-200 text-xs uppercase tracking-[0.18em]">
										Get started
									</p>
									<h3 className="mt-3 font-semibold text-2xl leading-tight tracking-tight">
										Ready to secure your organisation?
										<br /> Start with a free consultation.
									</h3>
								</div>
								<div className="mt-6 flex flex-wrap gap-3">
									<a
										href="/contact"
										className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-5 font-semibold text-indigo-700 text-sm transition-transform hover:-translate-y-0.5"
									>
										Book a Call
										<ArrowRight className="size-4" />
									</a>
									<a
										href="/contact"
										className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 font-semibold text-sm text-white backdrop-blur transition-transform hover:-translate-y-0.5"
									>
										Download Company Profile
									</a>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* 5. CASE STUDIES */}
			<section className="bg-white py-24 sm:py-32 dark:bg-[#06031a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 text-xs uppercase tracking-[0.18em] dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
								<span className="size-1.5 rounded-full bg-indigo-500" />
								Case studies
							</div>
							<h2 className="mt-5 font-semibold text-3xl text-zinc-950 tracking-tight sm:text-4xl dark:text-white">
								Real threats. Real Nepali organisations. Real outcomes.
							</h2>
							<p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
								How banks, insurers and government platforms across Nepal use
								Selim Solution to detect, contain and respond.
							</p>
						</div>
						<a
							href="/case-studies"
							className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-zinc-200 px-5 font-semibold text-sm text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
						>
							All case studies
							<ArrowRight className="size-4" />
						</a>
					</div>

					<div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
						{cases.map((item, index) => (
							<article
								key={item.name}
								className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_90px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.1),transparent_45%)]" />

								<div className="relative flex items-center justify-between p-6 pb-0">
									<span className="font-mono text-xs text-zinc-400 dark:text-indigo-200/50">
										{String(index + 1).padStart(2, "0")} /{" "}
										{String(cases.length).padStart(2, "0")}
									</span>
									<span className="rounded-full border border-zinc-200 px-2.5 py-0.5 font-semibold text-[10px] text-zinc-500 uppercase tracking-[0.14em] dark:border-white/10 dark:text-indigo-200/70">
										{item.sector}
									</span>
								</div>

								<div className="relative p-6">
									<div className="flex items-baseline gap-2">
										<span className="font-semibold text-4xl text-zinc-950 tracking-tight dark:text-white">
											{item.metric}
										</span>
										<span className="text-xs text-zinc-500 dark:text-indigo-100/55">
											{item.metricLabel}
										</span>
									</div>

									<h3 className="mt-6 font-semibold text-lg text-zinc-950 leading-snug tracking-tight dark:text-white">
										{item.headline}
									</h3>
									<p className="mt-3 text-sm text-zinc-600 leading-relaxed dark:text-indigo-100/65">
										{item.summary}
									</p>
								</div>

								<div className="relative mt-auto border-zinc-100 border-t px-6 py-4 dark:border-white/10">
									<div className="flex flex-wrap items-center justify-between gap-3">
										<div className="flex flex-wrap gap-1.5">
											{item.stack.map((tag) => (
												<span
													key={tag}
													className="rounded-md bg-zinc-100 px-2 py-0.5 font-medium text-[11px] text-zinc-600 dark:bg-white/5 dark:text-indigo-100/70"
												>
													{tag}
												</span>
											))}
										</div>
										<span className="font-medium text-sm text-zinc-900 dark:text-white">
											{item.name}
										</span>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 6. SECURITY LAYERS */}
			<section className="relative overflow-hidden rounded-lg bg-white py-16 text-zinc-950 dark:bg-[#06031a] dark:text-white">
				<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
				<div className="pointer-events-none absolute top-1/3 -left-32 size-[28rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 text-xs uppercase tracking-[0.18em] dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
								<span className="size-1.5 rounded-full bg-indigo-500" />
								Defense stack
							</div>
							<h2 className="mt-5 font-semibold text-3xl tracking-tight sm:text-4xl">
								Clarity from the highest ground.
							</h2>
							<p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
								Selim Solution takes its name from Seim Lake in Humla's Nimi
								Valley — Nepal's far-western Himalayas. Like that lake at
								altitude, our SOC keeps watch over your business with
								high-altitude clarity, vigilance and resilience.
							</p>

							<ul className="mt-8 space-y-3">
								{[
									"ISO 27001 & NIA Guideline 2076 advisory",
									"Kathmandu SOC, 24/7/365 coverage",
									"Local team, global tooling",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-sm text-zinc-700 dark:text-indigo-100/75"
									>
										<CheckCircle
											className="size-5 shrink-0 text-indigo-500 dark:text-indigo-300"
											weight="fill"
										/>
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
							{[
								{ icon: Pulse, label: "SOC as a Service" },
								{ icon: ShieldCheck, label: "VAPT" },
								{ icon: BracketsCurly, label: "Cloud Security" },
								{ icon: Lightning, label: "EDR" },
								{ icon: CubeFocus, label: "GRC" },
								{ icon: FlowArrow, label: "DFIR" },
								{ icon: Sparkle, label: "Awareness Training" },
								{ icon: Code, label: "NIA 2076" },
								{ icon: Strategy, label: "ISO 27001" },
							].map(({ icon: Icon, label }) => (
								<div
									key={label}
									className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-[0_18px_40px_-26px_rgba(79,70,229,0.5)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/40"
								>
									<div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.12),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
									<div className="relative flex size-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
										<Icon className="size-5" weight="duotone" />
									</div>
									<span className="relative font-medium text-xs text-zinc-700 tracking-wide dark:text-indigo-100/80">
										{label}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 7. TESTIMONIALS */}
			<TestimonialsSection />

			{/* 7.5 INSIGHTS / BLOG */}
			<section className="bg-white py-24 sm:py-32 dark:bg-[#06031a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700 text-xs uppercase tracking-[0.18em] dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
								<span className="size-1.5 rounded-full bg-indigo-500" />
								Insights
							</div>
							<h2 className="mt-5 font-semibold text-3xl text-zinc-950 tracking-tight sm:text-4xl dark:text-white">
								Threat intelligence, Nepal-first.
							</h2>
							<p className="mt-4 text-lg text-zinc-600 dark:text-indigo-100/65">
								Research, regulatory breakdowns and field notes from our
								Kathmandu SOC team.
							</p>
						</div>
						<a
							href="/blog"
							className="inline-flex h-11 w-fit items-center gap-2 rounded-full border border-zinc-200 px-5 font-semibold text-sm text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
						>
							View all articles
							<ArrowRight className="size-4" />
						</a>
					</div>

					<div className="grid gap-6 lg:grid-cols-3">
						{[
							{
								tag: "NIA 2076",
								date: "May 8, 2026",
								readTime: "6 min read",
								title:
									"What NIA Guideline 2076 really expects from Nepali insurers",
								excerpt:
									"A practical walk-through of the controls our GRC team uses to get insurance clients audit-ready in 90 days.",
								image:
									"https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
								icon: ShieldCheck,
								featured: true,
							},
							{
								tag: "NRB Directives",
								date: "April 24, 2026",
								readTime: "4 min read",
								title: "Nepal Rastra Bank IT directives: a VAPT checklist",
								excerpt:
									"What every Nepali commercial bank should be testing before its next NRB audit — straight from our engagements.",
								image:
									"https://images.pexels.com/photos/6266307/pexels-photo-6266307.jpeg?auto=compress&cs=tinysrgb&w=800",
								icon: CubeFocus,
								featured: false,
							},
							{
								tag: "DFIR",
								date: "April 11, 2026",
								readTime: "5 min read",
								title: "Ransomware in 90 seconds: a DFIR playbook for Nepal",
								excerpt:
									"How our DFIR team contained a payload mid-encryption inside a Kathmandu enterprise network.",
								image:
									"https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
								icon: Lightning,
								featured: false,
							},
						].map(({ icon: Icon, ...post }) => (
							<article
								key={post.title}
								className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_90px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d]"
							>
								<div className="relative h-44 overflow-hidden bg-[#08051f]">
									<img
										src={post.image}
										alt={post.title}
										loading="lazy"
										className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-indigo-800/35 to-[#08051f]/85" />
									<div className="absolute top-5 right-5 inline-flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
										<Icon className="size-6 text-white" weight="duotone" />
									</div>
									<div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-semibold text-[11px] text-white uppercase tracking-[0.16em] backdrop-blur">
										{post.tag}
									</div>
								</div>

								<div className="flex flex-1 flex-col p-6">
									<div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-indigo-100/55">
										<span>{post.date}</span>
										<span className="size-1 rounded-full bg-zinc-300 dark:bg-indigo-100/30" />
										<span>{post.readTime}</span>
									</div>

									<h3 className="mt-3 font-semibold text-lg text-zinc-950 leading-snug tracking-tight transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
										{post.title}
									</h3>
									<p className="mt-3 line-clamp-3 flex-1 text-sm text-zinc-600 leading-relaxed dark:text-indigo-100/65">
										{post.excerpt}
									</p>

									<a
										href="/blog"
										className="mt-6 inline-flex items-center gap-1.5 font-semibold text-indigo-600 text-sm transition-transform group-hover:translate-x-0.5 dark:text-indigo-300"
									>
										Read article
										<ArrowRight className="size-4" />
									</a>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* 8. CTA FOOTER */}
			<section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-4">
				<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08051f] px-6 py-20 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.9)] sm:px-16 sm:py-24 lg:px-24">
					{/* grid */}
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
					{/* dot pattern */}
					<div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
					{/* vignette */}
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(8,5,31,0.4)_60%,rgba(8,5,31,0.85)_100%)]" />
					{/* animated spotlights */}
					<div className="pointer-events-none absolute top-0 -left-32 size-[32rem] animate-selim-spotlight rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.9)_0%,rgba(79,70,229,0.45)_40%,transparent_72%)] blur-3xl" />
					<div className="pointer-events-none absolute right-[-8%] -bottom-40 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.6)_0%,rgba(79,70,229,0.25)_50%,transparent_75%)] blur-3xl" />

					<div className="relative flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
						<div className="max-w-2xl">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-semibold text-indigo-200 text-xs uppercase tracking-[0.18em] backdrop-blur">
								<span className="relative flex size-2">
									<span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo-300 opacity-75" />
									<span className="relative inline-flex size-2 rounded-full bg-indigo-200" />
								</span>
								Ready when you are
							</div>

							<h2 className="mt-6 font-semibold text-3xl text-white tracking-tight sm:text-5xl">
								Ready to secure
								<br /> your organisation?
							</h2>
							<p className="mt-5 max-w-xl text-base text-indigo-100/70 leading-7 sm:text-lg">
								Start with a free consultation. Our Kathmandu team will map your
								risks and walk you through the right MSSP services.
							</p>

							<ul className="mt-8 flex flex-col gap-3 sm:items-center lg:items-start">
								{[
									"24/7 SOC monitoring from Kathmandu",
									"VAPT, EDR, Cloud and DFIR on demand",
									"ISO 27001, NIA 2076 and NRB-aligned advisory",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-indigo-100/85"
									>
										<CheckCircle
											className="size-5 shrink-0 text-indigo-300"
											weight="fill"
										/>
										<span className="text-base">{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="mt-10 flex flex-col gap-4 sm:w-full sm:max-w-sm lg:mt-0 lg:shrink-0">
							<a
								href="/contact"
								className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white px-8 font-semibold text-[#151032] text-base shadow-[0_20px_60px_-24px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#08051f]"
							>
								Book a Call
								<ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
							</a>
							<a
								href="/contact"
								className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 font-semibold text-base text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
							>
								Download Company Profile
								<FlowArrow className="size-5" />
							</a>
							<div className="mt-2 flex justify-center gap-5 text-indigo-100/60 text-sm">
								<span className="flex items-center gap-1.5">
									<Lightning weight="fill" className="size-4 text-indigo-300" />
									Kathmandu, Nepal
								</span>
								<span className="flex items-center gap-1.5">
									<ShieldCheck
										weight="fill"
										className="size-4 text-indigo-300"
									/>
									ISO 27001 advisory
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
