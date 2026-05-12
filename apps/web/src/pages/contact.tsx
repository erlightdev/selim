import {
	ArrowRight,
	CalendarDots,
	CheckCircle,
	ChatCircleDots,
	Clock,
	EnvelopeSimple,
	Headset,
	Lightning,
	MapPin,
	Phone,
	ShieldCheck,
	Sparkle,
} from "@phosphor-icons/react";

const CONTACT_EMAIL = "hello@selim.security";
const CONTACT_PHONE = "+1 (415) 555-0142";

const contactMethods = [
	{
		icon: EnvelopeSimple,
		label: "Email the team",
		value: CONTACT_EMAIL,
		href: `mailto:${CONTACT_EMAIL}`,
		hint: "Reply within 4 business hours.",
	},
	{
		icon: CalendarDots,
		label: "Book a walkthrough",
		value: "20-minute live demo",
		href: `mailto:${CONTACT_EMAIL}?subject=Demo%20request`,
		hint: "See the platform on your stack.",
	},
	{
		icon: Headset,
		label: "Incident response",
		value: "24/7 SOC hotline",
		href: `tel:${CONTACT_PHONE.replace(/\s|\(|\)|-/g, "")}`,
		hint: "Active breach? Call immediately.",
	},
] as const;

const interests = [
	"Endpoint EDR / XDR",
	"Zero-trust identity",
	"Cloud workload security",
	"AI threat detection",
	"SOC / SIEM ops",
	"Compliance & audit",
] as const;

const responsePromises = [
	{
		icon: Clock,
		title: "4-hour response SLA",
		text: "Business hours. After-hours incidents route to the on-call SOC engineer.",
	},
	{
		icon: ShieldCheck,
		title: "NDA on first reply",
		text: "Mutual NDA available before any environment details are shared.",
	},
	{
		icon: Lightning,
		title: "POC in days, not quarters",
		text: "Most pilots are scoped, deployed, and producing signal inside two weeks.",
	},
] as const;

const faqs = [
	{
		q: "How fast can we deploy?",
		a: "Agents install in minutes. Most teams see their first correlated detections inside the first hour.",
	},
	{
		q: "Do you replace our existing SIEM?",
		a: "No — we integrate with Splunk, Sentinel, Chronicle, and others. You keep the system of record, we add the AI layer.",
	},
	{
		q: "Is the platform SOC 2 certified?",
		a: "Yes — SOC 2 Type II, ISO 27001, and HIPAA-ready deployments available.",
	},
	{
		q: "Pricing model?",
		a: "Annual per-endpoint with volume tiers. Pilots are scoped flat-rate so cost is predictable upfront.",
	},
] as const;

const fieldShell = "space-y-2";
const inputClass =
	"flex h-11 w-full rounded-xl border border-zinc-200 bg-white px-3.5 text-sm text-zinc-950 ring-offset-white transition-all placeholder:text-zinc-400 focus-visible:border-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/30 dark:border-white/10 dark:bg-[#0d092d] dark:text-white dark:ring-offset-[#08051f] dark:placeholder:text-indigo-100/30";
const labelClass =
	"text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:text-indigo-100/70";

export default function ContactPage() {
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
								Security team online — replies in hours
							</div>
							<h1 className="text-balance text-[clamp(2.2rem,8vw,3.4rem)] font-semibold leading-[0.95] tracking-tight">
								Talk to a security engineer.
								<br className="hidden sm:block" /> Not a sales sequence.
							</h1>
							<p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-indigo-100/75 sm:text-lg">
								Share what you're trying to protect, what's already in place, and
								where the gaps feel widest. You'll get a real response with
								specific next steps.
							</p>

							<div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-left sm:mx-auto sm:grid-cols-3">
								{[
									{ icon: Clock, label: "4-hour SLA" },
									{ icon: ShieldCheck, label: "Mutual NDA on request" },
									{ icon: Lightning, label: "POC in 2 weeks" },
								].map(({ icon: Icon, label }) => (
									<div
										key={label}
										className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-indigo-100/85 backdrop-blur"
									>
										<Icon className="size-4 shrink-0 text-indigo-300" weight="fill" />
										{label}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2. CONTACT METHODS */}
			<section className="bg-white py-16 sm:py-20 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-4 md:grid-cols-3">
						{contactMethods.map(({ icon: Icon, label, value, href, hint }) => (
							<a
								key={label}
								href={href}
								className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_80px_-50px_rgba(79,70,229,0.6)] dark:border-white/10 dark:bg-[#0d092d] dark:hover:border-indigo-400/30"
							>
								<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(79,70,229,0.14),transparent_42%)]" />
								<div className="relative">
									<div className="inline-flex size-12 items-center justify-center rounded-2xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
										<Icon className="size-5" weight="duotone" />
									</div>
									<p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-indigo-100/55">
										{label}
									</p>
									<p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
										{value}
									</p>
									<p className="mt-2 text-sm text-zinc-600 dark:text-indigo-100/65">
										{hint}
									</p>
									<span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-all group-hover:gap-2.5 dark:text-indigo-300">
										Open
										<ArrowRight className="size-4" />
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* 3. FORM + SIDEBAR */}
			<section className="bg-zinc-50 py-16 sm:py-20 dark:bg-[#06041a]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
						<form
							action={`mailto:${CONTACT_EMAIL}`}
							method="post"
							encType="text/plain"
							className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(79,70,229,0.45)] sm:p-8 dark:border-white/10 dark:bg-[#0d092d]"
						>
							<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(79,70,229,0.1),transparent_45%)]" />
							<div className="relative">
								<div className="flex items-center gap-2">
									<ChatCircleDots
										className="size-5 text-indigo-500 dark:text-indigo-300"
										weight="duotone"
									/>
									<h2 className="text-xl font-semibold tracking-tight">
										Send us the details
									</h2>
								</div>
								<p className="mt-2 text-sm text-zinc-600 dark:text-indigo-100/65">
									The more concrete the context, the sharper the first response.
								</p>

								<div className="mt-7 grid gap-5 sm:grid-cols-2">
									<div className={fieldShell}>
										<label htmlFor="name" className={labelClass}>
											Name
										</label>
										<input
											id="name"
											name="name"
											placeholder="Your full name"
											required
											className={inputClass}
										/>
									</div>
									<div className={fieldShell}>
										<label htmlFor="email" className={labelClass}>
											Work email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											placeholder="you@company.com"
											required
											className={inputClass}
										/>
									</div>
								</div>

								<div className="mt-5 grid gap-5 sm:grid-cols-2">
									<div className={fieldShell}>
										<label htmlFor="company" className={labelClass}>
											Company
										</label>
										<input
											id="company"
											name="company"
											placeholder="Acme Inc."
											className={inputClass}
										/>
									</div>
									<div className={fieldShell}>
										<label htmlFor="size" className={labelClass}>
											Organization size
										</label>
										<select
											id="size"
											name="size"
											defaultValue=""
											className={inputClass}
										>
											<option disabled value="">
												Select range
											</option>
											<option>1 – 50 employees</option>
											<option>51 – 250 employees</option>
											<option>251 – 1,000 employees</option>
											<option>1,000+ employees</option>
										</select>
									</div>
								</div>

								<fieldset className="mt-7">
									<legend className={labelClass}>What's on your radar?</legend>
									<p className="mt-1 text-xs text-zinc-500 dark:text-indigo-100/45">
										Pick anything that applies.
									</p>
									<div className="mt-4 grid gap-2 sm:grid-cols-2">
										{interests.map((item) => (
											<label
												key={item}
												className="group flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm transition-all hover:border-indigo-200 hover:bg-indigo-50/40 has-[:checked]:border-indigo-400 has-[:checked]:bg-indigo-50 dark:border-white/10 dark:bg-[#08051f] dark:hover:border-indigo-400/40 dark:hover:bg-white/5 dark:has-[:checked]:border-indigo-400/60 dark:has-[:checked]:bg-indigo-500/10"
											>
												<input
													name="interest"
													type="checkbox"
													value={item}
													className="size-4 rounded border-zinc-300 accent-indigo-500"
												/>
												<span className="text-zinc-800 dark:text-indigo-100/85">
													{item}
												</span>
											</label>
										))}
									</div>
								</fieldset>

								<div className="mt-7 space-y-2">
									<label htmlFor="message" className={labelClass}>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										required
										placeholder="Current stack, what you're protecting, where the gaps feel widest, timeline, anything else useful."
										className="min-h-40 w-full resize-y rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-sm text-zinc-950 transition-all placeholder:text-zinc-400 focus-visible:border-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/30 dark:border-white/10 dark:bg-[#08051f] dark:text-white dark:placeholder:text-indigo-100/30"
									/>
								</div>

								<div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
									<p className="max-w-sm text-xs leading-relaxed text-zinc-500 dark:text-indigo-100/45">
										By submitting you agree to our privacy terms. We never share
										environment details outside the engagement.
									</p>
									<button
										type="submit"
										className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#08051f] px-7 text-sm font-semibold text-white shadow-[0_20px_60px_-28px_rgba(79,70,229,0.9)] transition-all hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-white dark:text-[#151032] dark:hover:bg-indigo-50"
									>
										Send message
										<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
									</button>
								</div>
							</div>
						</form>

						<aside className="space-y-4">
							{responsePromises.map(({ icon: Icon, title, text }) => (
								<div
									key={title}
									className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-[#0d092d]"
								>
									<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(79,70,229,0.12),transparent_50%)]" />
									<div className="relative flex items-start gap-4">
										<div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-indigo-200/70 bg-indigo-50 text-indigo-600 dark:border-white/10 dark:bg-white/8 dark:text-indigo-200">
											<Icon className="size-5" weight="duotone" />
										</div>
										<div>
											<h3 className="text-sm font-semibold tracking-tight">
												{title}
											</h3>
											<p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/65">
												{text}
											</p>
										</div>
									</div>
								</div>
							))}

							<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08051f] p-6 text-white">
								<div className="animate-selim-spotlight pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.7)_0%,transparent_70%)] blur-2xl" />
								<div className="relative">
									<Sparkle
										className="size-5 text-indigo-300"
										weight="duotone"
									/>
									<h3 className="mt-4 text-base font-semibold tracking-tight">
										Already breached?
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-indigo-100/70">
										Skip the form. Our incident-response line is staffed 24/7.
									</p>
									<a
										href={`tel:${CONTACT_PHONE.replace(/\s|\(|\)|-/g, "")}`}
										className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
									>
										<Phone className="size-4" weight="fill" />
										{CONTACT_PHONE}
									</a>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</section>

			{/* 4. FAQ */}
			<section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-white/55">
							Frequently asked
						</div>
						<h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
							Quick answers, before you ask.
						</h2>
					</div>

					<div className="mt-12 divide-y divide-zinc-200 overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#0d092d]">
						{faqs.map((item) => (
							<details key={item.q} className="group p-6 sm:p-7">
								<summary className="flex cursor-pointer list-none items-start justify-between gap-6">
									<h3 className="text-base font-semibold tracking-tight sm:text-lg">
										{item.q}
									</h3>
									<span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-transform group-open:rotate-45 dark:border-white/10 dark:text-indigo-200">
										<span className="block size-3 leading-none">+</span>
									</span>
								</summary>
								<p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-indigo-100/70">
									{item.a}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* 5. OFFICE / LOCATION */}
			<section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
				<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08051f] px-6 py-16 shadow-[0_40px_140px_-60px_rgba(79,70,229,0.9)] sm:px-14 sm:py-20 lg:px-20">
					<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
					<div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
					<div className="animate-selim-spotlight pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.8)_0%,rgba(79,70,229,0.32)_45%,transparent_72%)] blur-3xl" />

					<div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
						<div>
							<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200 backdrop-blur">
								<MapPin className="size-3.5" weight="fill" />
								Where we operate
							</div>
							<h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
								Remote-first, globally on-call.
							</h2>
							<p className="mt-5 max-w-xl text-base leading-7 text-indigo-100/70">
								The team works across San Francisco, Berlin, and Singapore — so
								someone is always awake when the alert fires.
							</p>

							<ul className="mt-8 grid gap-3 sm:grid-cols-2">
								{[
									"SOC 2 Type II certified",
									"ISO 27001 compliant",
									"HIPAA-ready deployments",
									"GDPR aligned",
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
						</div>

						<div className="grid gap-4 sm:grid-cols-3">
							{[
								{ city: "San Francisco", tz: "UTC−8" },
								{ city: "Berlin", tz: "UTC+1" },
								{ city: "Singapore", tz: "UTC+8" },
							].map((loc) => (
								<div
									key={loc.city}
									className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
								>
									<MapPin className="size-5 text-indigo-300" weight="duotone" />
									<p className="mt-5 text-base font-semibold text-white">
										{loc.city}
									</p>
									<p className="mt-1 font-mono text-xs text-indigo-100/55">
										{loc.tz}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
