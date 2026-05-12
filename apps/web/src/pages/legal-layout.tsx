import type { ReactNode } from "react";

export function LegalLayout({
	eyebrow,
	title,
	updated,
	children,
}: {
	eyebrow: string;
	title: string;
	updated: string;
	children: ReactNode;
}) {
	return (
		<main className="relative mx-auto min-h-screen max-w-4xl overflow-hidden rounded-lg bg-white text-zinc-900 dark:bg-transparent dark:text-white">
			<section className="relative mx-auto w-full max-w-3xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28">
				<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300/80">
					{eyebrow}
				</p>
				<h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
					{title}
				</h1>
				<p className="mt-4 text-sm text-zinc-500 dark:text-white/55">
					Last updated: {updated}
				</p>

				<div className="mt-10 space-y-5 text-sm leading-relaxed text-zinc-700 [&_a]:text-indigo-600 [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-950 [&_li]:ml-2 [&_strong]:font-semibold [&_strong]:text-zinc-950 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-indigo-500 dark:text-white/75 dark:[&_a]:text-indigo-300 dark:hover:[&_a]:text-indigo-200 dark:[&_h2]:text-white dark:[&_strong]:text-white dark:[&_ul]:marker:text-indigo-400">
					{children}
				</div>
			</section>
		</main>
	);
}
