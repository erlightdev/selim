import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

export interface FAQItem {
	q: string;
	a: string;
}

export default function FAQ({
	heading = "Frequently asked questions",
	items,
}: {
	heading?: string;
	items: FAQItem[];
}) {
	const [open, setOpen] = useState<number | null>(0);
	return (
		<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
			<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
					{heading}
				</h2>
				<div className="space-y-3">
					{items.map((it, i) => {
						const isOpen = open === i;
						return (
							<div
								key={i}
								className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-950"
							>
								<button
									type="button"
									onClick={() => setOpen(isOpen ? null : i)}
									className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
									aria-expanded={isOpen}
								>
									<span className="text-base font-semibold text-zinc-900 dark:text-white">
										{it.q}
									</span>
									<CaretDown
										className={`size-4 shrink-0 text-zinc-500 transition-transform ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.2 }}
											className="overflow-hidden"
										>
											<p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
												{it.a}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
