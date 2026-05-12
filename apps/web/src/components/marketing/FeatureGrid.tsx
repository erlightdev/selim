import type { ComponentType } from "react";

export interface FeatureItem {
	icon?: ComponentType<{ className?: string; weight?: "duotone" | "fill" }>;
	title: string;
	description: string;
}

export default function FeatureGrid({
	heading,
	subtitle,
	items,
	columns = 3,
}: {
	heading?: string;
	subtitle?: string;
	items: FeatureItem[];
	columns?: 2 | 3 | 4;
}) {
	const gridCls =
		columns === 4
			? "sm:grid-cols-2 lg:grid-cols-4"
			: columns === 2
				? "sm:grid-cols-2"
				: "sm:grid-cols-2 lg:grid-cols-3";

	return (
		<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{heading && (
					<div className="mb-10 max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
							{heading}
						</h2>
						{subtitle && (
							<p className="mt-3 text-zinc-600 dark:text-zinc-300">{subtitle}</p>
						)}
					</div>
				)}
				<div className={`grid grid-cols-1 gap-4 ${gridCls}`}>
					{items.map((it, i) => {
						const Icon = it.icon;
						return (
							<article
								key={i}
								className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-950"
							>
								{Icon && (
									<div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
										<Icon className="size-5" weight="duotone" />
									</div>
								)}
								<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
									{it.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
									{it.description}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
