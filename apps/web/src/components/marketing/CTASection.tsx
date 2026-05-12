import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";

export interface CTAButton {
	label: string;
	to?: string;
	href?: string;
}

export default function CTASection({
	heading,
	subtitle,
	primary,
	secondary,
}: {
	heading: string;
	subtitle?: string;
	primary?: CTAButton;
	secondary?: CTAButton;
}) {
	return (
		<section className="bg-white py-16 dark:bg-zinc-950">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-14">
					<div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:24px_24px]" />
					<div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] blur-2xl" />
					<div className="relative grid items-center gap-6 sm:grid-cols-[1fr_auto]">
						<div>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								{heading}
							</h2>
							{subtitle && (
								<p className="mt-3 max-w-2xl text-indigo-100">{subtitle}</p>
							)}
						</div>
						<div className="flex flex-wrap gap-3">
							{primary &&
								(primary.to ? (
									<Link
										to={primary.to}
										className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
									>
										{primary.label}
										<ArrowRight className="size-4" />
									</Link>
								) : (
									<a
										href={primary.href ?? "#"}
										className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
									>
										{primary.label}
										<ArrowRight className="size-4" />
									</a>
								))}
							{secondary &&
								(secondary.to ? (
									<Link
										to={secondary.to}
										className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
									>
										{secondary.label}
									</Link>
								) : (
									<a
										href={secondary.href ?? "#"}
										className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
									>
										{secondary.label}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
