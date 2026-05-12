import {
	ArrowUpRight,
	Globe,
	Languages,
	Link2,
	MessageCircle,
	PenTool,
	Send,
	Sparkles,
} from "lucide-react";

const CONTACT_EMAIL = "partner@selim.studio";

const SOCIAL_LINKS = [
	{
		label: "Website",
		href: "https://selim.studio",
		icon: Globe,
	},
	{
		label: "Behance",
		href: "https://behance.net",
		icon: PenTool,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com",
		icon: Link2,
	},
	{
		label: "Telegram",
		href: "https://t.me",
		icon: Send,
	},
	{
		label: "WhatsApp",
		href: "https://wa.me",
		icon: MessageCircle,
	},
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
					<div className="relative px-6 py-12 sm:px-10 lg:px-12">
						<div className="space-y-10">
							<div className="text-center">
								<h2 className="font-semibold text-3xl tracking-tight sm:text-5xl lg:text-6xl">
									Let’s create
									<br />
									something together
								</h2>
							</div>

							<div className="border-white/10 border-t pt-8">
								<div className="grid gap-8 lg:grid-cols-[1fr_auto]">
									<div className="space-y-6">
										<div className="flex items-center gap-3">
											<div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
												<Sparkles className="size-5" />
											</div>
											<div>
												<p className="text-white/70 text-xs uppercase tracking-[0.3em]">
													Selim
												</p>
												<p className="text-sm text-white/70">
													Digital agency & software development
												</p>
											</div>
										</div>
										<div className="flex flex-wrap gap-2">
											{SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
												<a
													key={label}
													href={href}
													className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-white/25 hover:bg-white/10"
													rel="noreferrer"
													target="_blank"
													aria-label={label}
													title={label}
												>
													<Icon className="size-4" />
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
												href="https://t.me"
												className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
											>
												Telegram <ArrowUpRight className="size-3" />
											</a>
											<a
												href="https://wa.me"
												className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
											>
												WhatsApp <ArrowUpRight className="size-3" />
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
									<button
										type="button"
										className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white/70 uppercase tracking-[0.2em] transition hover:border-white/25 hover:bg-white/10"
									>
										<Languages className="size-3.5" />
										EN
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
