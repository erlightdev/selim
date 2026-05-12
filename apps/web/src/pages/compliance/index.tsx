import { Certificate, ShieldCheck, ClipboardText, Scales, Bank } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";

import { PageHero, CTASection } from "@/components/marketing";

const items = [
	{ to: "/compliance/iso-27001", icon: Certificate, title: "ISO 27001", description: "International ISMS standard — gap → policy → audit → certification." },
	{ to: "/compliance/nia-guideline-2076", icon: ShieldCheck, title: "NIA Guideline 2076", description: "Nepal Insurance Authority annual VAPT and IT review." },
	{ to: "/compliance/pci-dss", icon: ClipboardText, title: "PCI-DSS", description: "Cardholder data security — scoping, remediation, ASV scans." },
	{ to: "/compliance/nist-csf", icon: Scales, title: "NIST CSF", description: "Identify → Protect → Detect → Respond → Recover." },
	{ to: "/compliance/nrb-directives", icon: Bank, title: "NRB Directives", description: "Nepal Rastra Bank IT Directive compliance for BFIs." },
];

export default function ComplianceIndexPage() {
	return (
		<main>
			<PageHero
				eyebrow="Compliance"
				title="Frameworks we deliver."
				subtitle="One partner across every standard you need — from ISO 27001 to NRB and NIA directives."
			/>
			<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{items.map((s) => {
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
				heading="Combine frameworks — without duplicating effort."
				subtitle="ISO 27001 + PCI-DSS + NRB in one programme is our specialty."
				primary={{ label: "Talk to a consultant", to: "/contact" }}
				secondary={{ label: "GRC service", to: "/services/grc-compliance" }}
			/>
		</main>
	);
}
