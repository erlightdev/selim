export interface Stat {
	value: string;
	label: string;
}

export default function StatStrip({ stats }: { stats: Stat[] }) {
	return (
		<section className="border-y border-zinc-200 bg-white py-10 dark:border-white/10 dark:bg-zinc-950">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
					{stats.map((s, i) => (
						<div key={i} className="text-center sm:text-left">
							<dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
								{s.label}
							</dt>
							<dd className="mt-1 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
								{s.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
