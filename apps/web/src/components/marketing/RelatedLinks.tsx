import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";

export interface RelatedLink {
	to: string;
	title: string;
	description?: string;
}

export default function RelatedLinks({
	heading = "Explore more",
	items,
}: {
	heading?: string;
	items: RelatedLink[];
}) {
	return (
		<section className="bg-white py-16 dark:bg-zinc-950">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
					{heading}
				</h2>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((l) => (
						<Link
							key={l.to}
							to={l.to}
							className="group flex items-start justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-white dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-indigo-400/40 dark:hover:bg-zinc-900"
						>
							<div>
								<p className="text-sm font-semibold text-zinc-900 dark:text-white">
									{l.title}
								</p>
								{l.description && (
									<p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
										{l.description}
									</p>
								)}
							</div>
							<ArrowRight className="mt-1 size-4 shrink-0 text-zinc-400 transition group-hover:translate-x-1 group-hover:text-indigo-500" />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
