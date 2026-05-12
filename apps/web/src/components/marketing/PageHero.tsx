import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";

export interface PageHeroCTA {
	label: string;
	to?: string;
	href?: string;
	variant?: "primary" | "secondary";
}

export interface PageHeroProps {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	ctas?: PageHeroCTA[];
	image?: { src: string; alt: string };
}

export default function PageHero({
	eyebrow,
	title,
	subtitle,
	ctas,
	image,
}: PageHeroProps) {
	return (
		<section className="relative overflow-hidden bg-white pt-24 -mt-24 pb-16 rounded-md text-zinc-900 dark:bg-zinc-950 dark:text-white">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.1),transparent_60%)]" />
			<div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
				<div>
					{eyebrow && (
						<p className="mb-3 inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
							{eyebrow}
						</p>
					)}
					<h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
						{title}
					</h1>
					{subtitle && (
						<p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
							{subtitle}
						</p>
					)}
					{ctas && ctas.length > 0 && (
						<div className="mt-8 flex flex-wrap gap-3">
							{ctas.map((c, i) => {
								const cls =
									c.variant === "secondary"
										? "inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
										: "inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500";
								if (c.to) {
									return (
										<Link key={i} to={c.to} className={cls}>
											{c.label}
											<ArrowRight className="size-4" />
										</Link>
									);
								}
								return (
									<a key={i} href={c.href ?? "#"} className={cls}>
										{c.label}
										<ArrowRight className="size-4" />
									</a>
								);
							})}
						</div>
					)}
				</div>
				{image && (
					<div className="relative">
						<div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
						<div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 shadow-2xl dark:border-white/10">
							<img
								src={image.src}
								alt={image.alt}
								loading="lazy"
								decoding="async"
								className="aspect-[4/3] w-full object-cover"
								onError={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = "none";
								}}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
