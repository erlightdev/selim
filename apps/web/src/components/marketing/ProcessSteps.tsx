export interface ProcessStep {
	title: string;
	description: string;
}

export default function ProcessSteps({
	heading,
	steps,
}: {
	heading?: string;
	steps: ProcessStep[];
}) {
	return (
		<section className="bg-white py-16 dark:bg-zinc-950">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				{heading && (
					<h2 className="mb-10 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
						{heading}
					</h2>
				)}
				<ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{steps.map((s, i) => (
						<li
							key={i}
							className="relative rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/40"
						>
							<div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
								{String(i + 1).padStart(2, "0")}
							</div>
							<h3 className="text-base font-semibold text-zinc-900 dark:text-white">
								{s.title}
							</h3>
							<p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
								{s.description}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
