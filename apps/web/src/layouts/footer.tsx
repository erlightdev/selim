import {
	ArrowUpRight,
	EnvelopeSimple,
	LinkedinLogo,
	MapPin,
	Phone,
	ShieldCheck,
} from "@phosphor-icons/react";

const CONTACT_EMAIL = "info@selimsolution.com";
const CONTACT_PHONE = "+977 (24/7 hotline)";

const SOCIAL_LINKS = [
	{ label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinLogo },
	{ label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: EnvelopeSimple },
] as const;

const SERVICE_LINKS = [
	{ label: "SOC as a Service", href: "/services#soc" },
	{ label: "VAPT", href: "/services#vapt" },
	{ label: "Cloud Security", href: "/services#cloud" },
	{ label: "EDR", href: "/services#edr" },
	{ label: "GRC & Compliance", href: "/services#grc" },
	{ label: "DFIR", href: "/services#dfir" },
	{ label: "Security Awareness Training", href: "/services#training" },
] as const;

const COMPANY_LINKS = [
	{ label: "About", href: "/about" },
	{ label: "Case Studies", href: "/case-studies" },
	{ label: "Careers", href: "/contact" },
	{ label: "Blog / Insights", href: "/case-studies" },
] as const;

const NOISE_DATA_URI =
	"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='0.35'/></svg>";

export default function Footer() {
	return (
		<footer className="m-2 py-10">
			<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
				<div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#2f2a7a] via-[#191146] to-[#0b0824] text-white shadow-[0_40px_120px_-80px_rgba(79,70,229,0.85)]">
					<div
						className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
						style={{ backgroundImage: `url("${NOISE_DATA_URI}")` }}
					/>
					<div className="pointer-events-none absolute -left-32 top-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.7)_0%,rgba(79,70,229,0.3)_45%,transparent_72%)] blur-3xl" />
					<div className="pointer-events-none absolute -bottom-32 right-[-8%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.5)_0%,rgba(79,70,229,0.2)_50%,transparent_75%)] blur-3xl" />

					<div className="relative px-6 py-12 sm:px-10 lg:px-12">
						<div className="space-y-10">
							<div className="text-center">
								<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200 backdrop-blur">
									<span className="size-1.5 rounded-full bg-indigo-300" />
									Get in touch
								</div>
								<h2 className="mt-6 font-semibold text-3xl tracking-tight sm:text-5xl lg:text-6xl">
									Clarity from the
									<br />
									highest ground.
								</h2>
								<p className="mx-auto mt-5 max-w-xl text-base text-indigo-100/70 sm:text-lg">
									Vigilant. Resilient. Nepali. Selim Solution stands guard over
									Nepal's digital frontier — 24/7 from Kathmandu.
								</p>
							</div>

							<div className="grid gap-8 border-white/10 border-t pt-10 lg:grid-cols-4">
								{/* Col 1: Brand */}
								<div className="space-y-5">
									<div className="flex items-center gap-3">
										<div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.6)]">
											<ShieldCheck className="size-5" weight="fill" />
										</div>
										<div>
											<p className="text-sm font-semibold tracking-tight text-white">
												Selim Solution
											</p>
											<p className="text-white/60 text-[10px] uppercase tracking-[0.22em]">
												Managed Cyber Security
											</p>
										</div>
									</div>
									<p className="text-sm text-indigo-100/70">
										Clarity from the highest ground.
									</p>
									<div className="flex flex-wrap gap-2">
										{SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
											<a
												key={label}
												href={href}
												className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-white/10 hover:text-white"
												rel="noreferrer"
												target="_blank"
												aria-label={label}
												title={label}
											>
												<Icon className="size-4" weight="duotone" />
											</a>
										))}
									</div>
								</div>

								{/* Col 2: Services */}
								<div>
									<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200/80">
										Services
									</p>
									<ul className="mt-4 space-y-2">
										{SERVICE_LINKS.map((s) => (
											<li key={s.label}>
												<a
													href={s.href}
													className="text-sm text-white/75 hover:text-white"
												>
													{s.label}
												</a>
											</li>
										))}
									</ul>
								</div>

								{/* Col 3: Company */}
								<div>
									<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200/80">
										Company
									</p>
									<ul className="mt-4 space-y-2">
										{COMPANY_LINKS.map((s) => (
											<li key={s.label}>
												<a
													href={s.href}
													className="text-sm text-white/75 hover:text-white"
												>
													{s.label}
												</a>
											</li>
										))}
									</ul>
								</div>

								{/* Col 4: Contact */}
								<div>
									<p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200/80">
										Contact
									</p>
									<ul className="mt-4 space-y-3 text-sm text-white/80">
										<li>
											<a
												href={`mailto:${CONTACT_EMAIL}`}
												className="inline-flex items-center gap-2 hover:text-white"
											>
												<EnvelopeSimple className="size-4" weight="duotone" />
												{CONTACT_EMAIL}
											</a>
										</li>
										<li className="inline-flex items-center gap-2">
											<MapPin className="size-4" weight="duotone" />
											Kathmandu, Nepal
										</li>
										<li className="inline-flex items-center gap-2">
											<Phone className="size-4" weight="duotone" />
											{CONTACT_PHONE}
										</li>
										<li>
											<a
												href="/contact"
												className="inline-flex items-center gap-1 text-indigo-200 hover:text-white"
											>
												WhatsApp / Viber <ArrowUpRight className="size-3" />
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="border-white/10 border-t pt-6">
								<div className="flex flex-col gap-3 text-white/60 text-xs sm:flex-row sm:items-center sm:justify-between">
									<span>
										© {new Date().getFullYear()} Selim Solution. All rights
										reserved.
									</span>
									<div className="flex flex-wrap gap-5">
										<a href="/privacy" className="hover:text-white">
											Privacy
										</a>
										<a href="/terms" className="hover:text-white">
											Terms
										</a>
										<a href="/certifications" className="hover:text-white">
											Certifications
										</a>
										<span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em]">
											<span className="size-1.5 rounded-full bg-emerald-400" />
											ISO 27001
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
