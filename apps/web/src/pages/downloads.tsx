import { FileText, FilePdf, ClipboardText, ShieldCheck, Lifebuoy, DownloadSimple } from "@phosphor-icons/react";
import { PageHero, CTASection } from "@/components/marketing";

const resources = [
	{ icon: FilePdf, title: "Selim Solution — Company Profile", description: "Who we are, our team, certifications, and case studies.", size: "PDF · 3.2 MB" },
	{ icon: FileText, title: "VAPT Pricing & Scope Guide", description: "Indicative pricing for web, mobile, network, API and cloud testing.", size: "PDF · 1.4 MB" },
	{ icon: ClipboardText, title: "NIA 2076 Compliance Checklist", description: "Article-by-article checklist for Nepali insurers.", size: "PDF · 820 KB" },
	{ icon: ShieldCheck, title: "Cybersecurity Self-Assessment Template", description: "Excel template to baseline your organisation against NIST CSF.", size: "XLSX · 410 KB" },
	{ icon: Lifebuoy, title: "Incident Response Plan Template", description: "Editable IR plan template with roles, playbooks and contact list.", size: "DOCX · 290 KB" },
];

export default function DownloadsPage() {
	return (
		<main>
			<PageHero
				eyebrow="Resources"
				title="Downloads & free templates"
				subtitle="Practical templates, checklists and pricing guides for security and compliance teams in Nepal — free to use, attribution appreciated."
			/>
			<section className="bg-zinc-50 py-16 dark:bg-zinc-900/40">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{resources.map((r) => {
							const Icon = r.icon;
							return (
								<article key={r.title} className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-950">
									<div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
										<Icon className="size-5" weight="duotone" />
									</div>
									<h2 className="text-lg font-semibold text-zinc-900 dark:text-white">{r.title}</h2>
									<p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-300">{r.description}</p>
									<p className="mt-3 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{r.size}</p>
									<a href="#" className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500" aria-label={`Download ${r.title}`}>
										<DownloadSimple className="size-4" weight="bold" />
										Download
									</a>
								</article>
							);
						})}
					</div>
				</div>
			</section>
			<CTASection
				heading="Need a tailored resource?"
				subtitle="We're happy to share custom briefs, scoping documents and pricing tailored to your environment."
				primary={{ label: "Contact us", to: "/contact" }}
				secondary={{ label: "See case studies", to: "/case-studies" }}
			/>
		</main>
	);
}
