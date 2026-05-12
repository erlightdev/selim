import {
	ArrowUpRight,
	EnvelopeSimple,
	GithubLogo,
	Globe,
	LinkedinLogo,
	ShieldCheck,
	TwitterLogo,
} from "@phosphor-icons/react";

const CONTACT_EMAIL = "security@selim.studio";

const SOCIAL_LINKS = [
	{ label: "Website", href: "https://selim.studio", icon: Globe },
	{ label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinLogo },
	{ label: "Twitter", href: "https://twitter.com", icon: TwitterLogo },
	{ label: "GitHub", href: "https://github.com", icon: GithubLogo },
	{ label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: EnvelopeSimple },
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
					{/* indigo glow accents */}
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
									Let's secure
									<br />
									your digital future
								</h2>
								<p className="mx-auto mt-5 max-w-xl text-base text-indigo-100/70 sm:text-lg">
									Talk to our security team about deploying AI-driven defense
									across your stack.
								</p>
							</div>

							<div className="border-white/10 border-t pt-8">
								<div className="grid gap-8 lg:grid-cols-[1fr_auto]">
									<div className="space-y-6">
										<div className="flex items-center gap-3">
											<div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.6)]">
												<ShieldCheck className="size-5" weight="fill" />
											</div>
											<div>
												<p className="text-white/70 text-xs uppercase tracking-[0.3em]">
													Selim
												</p>
												<p className="text-sm text-white/70">
													Next-gen cybersecurity platform
												</p>
											</div>
										</div>
										<div className="flex flex-wrap gap-2">
											{SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
												<a
													key={label}
													href={href}
													className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-white/10 hover:text-white"
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
									<div className="space-y-2 text-left lg:text-right">
										<a
											href={`mailto:${CONTACT_EMAIL}`}
											className="font-semibold text-lg text-white transition-opacity hover:opacity-80"
										>
											{CONTACT_EMAIL}
										</a>
										<div className="flex flex-wrap gap-4 text-white/70 text-xs lg:justify-end">
											<a
												href="/contact"
												className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
											>
												Talk to sales <ArrowUpRight className="size-3" />
											</a>
											<a
												href="/security"
												className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
											>
												Report a vulnerability <ArrowUpRight className="size-3" />
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className="border-white/10 border-t pt-6">
								<div className="flex flex-col gap-3 text-white/60 text-xs sm:flex-row sm:items-center sm:justify-between">
									<span>
										© {new Date().getFullYear()} Selim. All rights reserved.
									</span>
									<div className="flex flex-wrap gap-5">
										<a href="/privacy" className="hover:text-white">
											Privacy
										</a>
										<a href="/terms" className="hover:text-white">
											Terms
										</a>
										<a href="/compliance" className="hover:text-white">
											Compliance
										</a>
										<span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em]">
											<span className="size-1.5 rounded-full bg-emerald-400" />
											SOC 2
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
