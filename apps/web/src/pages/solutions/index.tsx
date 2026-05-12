import { Bank, ShieldCheck, Buildings, Lightning, GraduationCap } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

import { PageHero, CTASection } from "@/components/marketing";

const solutions = [
	{ to: "/solutions/banking-finance", icon: Bank, title: "Banking & Finance", description: "NRB IT directives, core banking security, fraud detection." },
	{ to: "/solutions/insurance", icon: ShieldCheck, title: "Insurance", description: "NIA Guideline 2076, annual VAPT and IT infrastructure review." },
	{ to: "/solutions/government", icon: Buildings, title: "Government & Public Sector", description: "E-governance platform security and citizen data protection." },
	{ to: "/solutions/telecom-isps", icon: Lightning, title: "Telecom & ISPs", description: "Network perimeter, DDoS mitigation and OT/ICS security." },
	{ to: "/solutions/healthcare", icon: ShieldCheck, title: "Healthcare", description: "Patient data protection, EMR security, ransomware resilience." },
	{ to: "/solutions/education-ngos", icon: GraduationCap, title: "Education & NGOs", description: "Affordable packages, grant-compatible pricing, awareness." },
];

export default function SolutionsIndexPage() {
	return (
		<main>
			<PageHero
				eyebrow="Solutions by industry"
				title="Cyber security, tuned to your sector."
				subtitle="Regulation, threat model and budget look different in every industry. Pick yours."
			/>
			<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{solutions.map((s) => {
							const Icon = s.icon;
							return (
								<Link key={s.to} to={s.to} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-400 hover:shadow-lg dark:border-white/10 dark:bg-zinc-950 dark:hover:border-indigo-400/40">
									<div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
										<Icon className="size-5" weight="duotone" />
									</div>
									<h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h2>
									<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.description}</p>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
			<CTASection
				heading="Not sure which fits? We'll tell you straight."
				primary={{ label: "Talk to us", to: "/contact" }}
				secondary={{ label: "Browse services", to: "/services" }}
			/>
		</main>
	);
}
