import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import {
	ArrowRight,
	BracketsCurly,
	CubeFocus,
	Eye,
	Lightning,
	Pulse,
	ShieldCheck,
	Sparkle,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/sheet";

const navLinks = [
	{ to: "/", label: "Home", description: "Platform overview" },
	{ to: "/about", label: "About", description: "Team + mission" },
	{
		to: "/case-studies",
		label: "Case Studies",
		description: "Real customer outcomes",
	},
	{ to: "/contact", label: "Contact", description: "Talk to an engineer" },
] as const;

const serviceCategories = [
	{
		heading: "Detection & response",
		items: [
			{
				icon: Eye,
				href: "/services#detection",
				label: "Threat detection",
				desc: "AI behavioral models tuned to your environment.",
			},
			{
				icon: Lightning,
				href: "/services#xdr",
				label: "Endpoint EDR / XDR",
				desc: "Correlated signal across every endpoint and identity.",
			},
			{
				icon: Pulse,
				href: "/services#soc",
				label: "SOC & SIEM ops",
				desc: "24/7 monitoring with automated response playbooks.",
			},
		],
	},
	{
		heading: "Coverage",
		items: [
			{
				icon: ShieldCheck,
				href: "/services#zero-trust",
				label: "Zero-trust identity",
				desc: "Continuous verification across every access path.",
			},
			{
				icon: BracketsCurly,
				href: "/services#cloud",
				label: "Cloud workload",
				desc: "Posture, runtime, and supply-chain protection.",
			},
			{
				icon: CubeFocus,
				href: "/services#compliance",
				label: "Compliance & audit",
				desc: "SOC 2, HIPAA, and ISO 27001 reporting on demand.",
			},
		],
	},
] as const;

const CONTACT_EMAIL = "hello@selim.security";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const baseLink =
		"rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200";
	const activeLink = "bg-white/14 text-white shadow-sm";
	const inactiveLink = "text-white/68 hover:bg-white/10 hover:text-white";

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 16);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky z-50 transition-all duration-300 ${
				isScrolled ? "top-3" : "top-4"
			}`}
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative overflow-visible rounded-2xl border border-white/14 bg-[#0c0830]/85 text-white shadow-[0_24px_90px_-48px_rgba(79,70,229,0.9)] backdrop-blur-2xl">
					<div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent_22%,transparent_78%,rgba(255,255,255,0.08))]" />

					<div className="relative flex items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-items-center">
						{/* LOGO */}
						<div className="flex min-w-0 items-center gap-3 lg:justify-self-start">
							<Link to="/" className="flex items-center gap-2.5">
								<div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.6)]">
									<ShieldCheck className="size-5" weight="fill" />
								</div>
								<div className="hidden min-w-0 flex-col sm:flex">
									<span className="text-base font-semibold leading-tight tracking-tight text-white">
										Selim
									</span>
									<span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
										Cybersecurity
									</span>
								</div>
							</Link>
						</div>

						{/* DESKTOP NAV */}
						<nav className="hidden items-center justify-center lg:flex lg:justify-self-center">
							<div className="flex items-center gap-1 rounded-xl bg-white/[0.07] p-1 ring-1 ring-white/10">
								{navLinks.slice(0, 2).map(({ to, label }) => (
									<Link
										key={to}
										to={to}
										className={baseLink}
										activeProps={{ className: `${baseLink} ${activeLink}` }}
										inactiveProps={{ className: `${baseLink} ${inactiveLink}` }}
									>
										{label}
									</Link>
								))}

								{/* SERVICES MEGAMENU */}
								<div className="group relative">
									<button
										type="button"
										className={`${baseLink} ${inactiveLink} inline-flex items-center gap-1 group-hover:bg-white/10 group-hover:text-white group-focus-within:bg-white/10 group-focus-within:text-white`}
										aria-haspopup="true"
									>
										Services
										<ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
									</button>

									<div className="pointer-events-none absolute left-1/2 top-full z-50 w-[44rem] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
										<div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#0d092d]/97 shadow-[0_40px_120px_-40px_rgba(79,70,229,0.7)] backdrop-blur-2xl">
											<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.18),transparent_45%)]" />
											<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:20px_20px]" />

											<div className="relative grid grid-cols-[1.4fr_1fr]">
												<div className="grid grid-cols-2 gap-1 p-4">
													{serviceCategories.map((cat) => (
														<div key={cat.heading} className="space-y-1">
															<p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300/70">
																{cat.heading}
															</p>
															{cat.items.map((item) => {
																const Icon = item.icon;
																return (
																	<a
																		key={item.href}
																		href={item.href}
																		className="group/i flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.07]"
																	>
																		<span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-indigo-200 transition-colors group-hover/i:border-indigo-400/40 group-hover/i:bg-indigo-500/15 group-hover/i:text-indigo-100">
																			<Icon className="size-4" weight="duotone" />
																		</span>
																		<span className="min-w-0">
																			<span className="block text-sm font-semibold text-white">
																				{item.label}
																			</span>
																			<span className="mt-0.5 block text-xs leading-snug text-white/55">
																				{item.desc}
																			</span>
																		</span>
																	</a>
																);
															})}
														</div>
													))}
												</div>

												<div className="relative m-3 overflow-hidden rounded-xl border border-white/10 bg-[#08051f] p-5">
													<div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.6)_0%,transparent_70%)] blur-2xl" />
													<div className="relative flex h-full flex-col">
														<Sparkle
															className="size-5 text-indigo-300"
															weight="duotone"
														/>
														<h3 className="mt-4 text-base font-semibold tracking-tight text-white">
															Map your coverage gaps
														</h3>
														<p className="mt-2 text-xs leading-relaxed text-white/60">
															20-minute walkthrough on your stack. We surface
															every blind spot before you commit.
														</p>
														<Link
															to="/contact"
															className="mt-auto inline-flex items-center gap-1.5 self-start rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#151032] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
														>
															Book a demo
															<ArrowRight className="size-3.5" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{navLinks.slice(2).map(({ to, label }) => (
									<Link
										key={to}
										to={to}
										className={baseLink}
										activeProps={{ className: `${baseLink} ${activeLink}` }}
										inactiveProps={{ className: `${baseLink} ${inactiveLink}` }}
									>
										{label}
									</Link>
								))}
							</div>
						</nav>

						{/* ACTIONS */}
						<div className="flex shrink-0 items-center justify-end gap-2 lg:justify-self-end">
							<div
								className="flex size-9 items-center justify-center rounded-xl border border-white/14 bg-white/8 text-white shadow-sm transition-colors hover:bg-white/12 sm:size-10 [&_.att-btn]:!text-white [&_svg]:!text-white"
								style={{
									// Force the toggler's --at-ink CSS var to white (navbar is always dark)
									["--at-ink" as never]: "rgba(255,255,255,0.92)",
								}}
							>
								<AnimatedThemeToggler />
							</div>

							<Link
								to="/contact"
								className="hidden h-9 items-center gap-2 rounded-xl bg-white px-3 text-xs font-semibold text-[#16113a] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 min-[420px]:inline-flex sm:h-10 sm:px-4 sm:text-sm"
							>
								<Sparkle className="size-3.5" weight="fill" />
								Get Protected
							</Link>

							<Sheet open={menuOpen} onOpenChange={setMenuOpen}>
								<SheetTrigger asChild>
									<button
										type="button"
										aria-label={menuOpen ? "Close menu" : "Open menu"}
										className="inline-flex size-9 items-center justify-center rounded-xl border border-white/14 bg-white/8 text-white shadow-sm transition-colors hover:bg-white/14 sm:size-10 lg:hidden"
									>
										{menuOpen ? (
											<X className="size-4" />
										) : (
											<Menu className="size-4" />
										)}
									</button>
								</SheetTrigger>
								<SheetContent
									side="right"
									className="flex w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-y-auto border-l border-white/10 bg-[#08051f] p-0 text-white shadow-2xl [&>button]:!text-white/70 [&>button]:hover:!text-white"
								>
									<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]" />
									<div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.45)_0%,transparent_70%)] blur-3xl" />

									<div className="relative border-b border-white/10 px-5 pb-5 pt-6">
										<div className="flex items-center gap-2.5">
											<div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-700 text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.6)]">
												<ShieldCheck className="size-5" weight="fill" />
											</div>
											<div>
												<p className="text-base font-semibold tracking-tight">
													Selim
												</p>
												<p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
													Cybersecurity
												</p>
											</div>
										</div>
									</div>

									<nav className="relative flex-1 space-y-1 px-3 py-4">
										{navLinks.map(({ to, label, description }) => (
											<SheetClose asChild key={to}>
												<Link
													to={to}
													className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.07]"
													activeProps={{
														className:
															"flex items-center justify-between gap-3 rounded-xl bg-white/10 px-3 py-3",
													}}
												>
													<span>
														<span className="block text-sm font-semibold text-white">
															{label}
														</span>
														<span className="block text-xs text-white/55">
															{description}
														</span>
													</span>
													<ArrowRight className="size-4 text-white/40" />
												</Link>
											</SheetClose>
										))}

										<div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
											<button
												type="button"
												onClick={() => setServicesOpenMobile((v) => !v)}
												className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left transition-colors hover:bg-white/[0.05]"
												aria-expanded={servicesOpenMobile}
											>
												<span>
													<span className="block text-sm font-semibold text-white">
														Services
													</span>
													<span className="block text-xs text-white/55">
														Full platform coverage
													</span>
												</span>
												<ChevronDown
													className={`size-4 text-white/55 transition-transform ${
														servicesOpenMobile ? "rotate-180" : ""
													}`}
												/>
											</button>
											{servicesOpenMobile && (
												<div className="border-t border-white/10 p-2">
													{serviceCategories.map((cat) => (
														<div key={cat.heading} className="mb-1">
															<p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-300/70">
																{cat.heading}
															</p>
															{cat.items.map((item) => {
																const Icon = item.icon;
																return (
																	<SheetClose asChild key={item.href}>
																		<a
																			href={item.href}
																			className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.07]"
																		>
																			<span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-indigo-200">
																				<Icon
																					className="size-4"
																					weight="duotone"
																				/>
																			</span>
																			<span className="text-sm text-white/85">
																				{item.label}
																			</span>
																		</a>
																	</SheetClose>
																);
															})}
														</div>
													))}
												</div>
											)}
										</div>
									</nav>

									<div className="relative border-t border-white/10 p-4">
										<SheetClose asChild>
											<Link
												to="/contact"
												className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-[#151032] shadow-[0_20px_60px_-28px_rgba(255,255,255,0.7)] transition-all hover:-translate-y-0.5 hover:bg-indigo-50"
											>
												Get Protected
												<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
											</Link>
										</SheetClose>
										<a
											href={`mailto:${CONTACT_EMAIL}`}
											className="mt-2 block text-center text-xs text-white/50 hover:text-white/80"
										>
											{CONTACT_EMAIL}
										</a>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
