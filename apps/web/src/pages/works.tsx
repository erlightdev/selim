const WORK_ITEMS = [
	{
		title: "Banking — NRB-aligned VAPT",
		description:
			"4-phase VAPT and SOC onboarding for a Nepali commercial bank ahead of its NRB IT audit.",
	},
	{
		title: "Insurance — NIA 2076 readiness",
		description:
			"ISMS build-out, awareness training and evidence package for a regional Nepali insurer.",
	},
	{
		title: "Government — 24/7 SOC + DFIR",
		description:
			"Hardened a citizen-facing e-services platform against DDoS and credential attacks.",
	},
];

export default function WorksPage() {
	return (
		<section className="space-y-4">
			<h1 className="font-semibold text-2xl tracking-tight">
				Selected engagements
			</h1>
			<p className="max-w-2xl text-muted-foreground text-sm">
				A small sample of recent Selim Solution engagements across Nepal's
				regulated industries. See our case studies for the full write-ups.
			</p>
			<div className="space-y-3">
				{WORK_ITEMS.map((item) => (
					<div key={item.title} className="rounded-lg border border-border p-4">
						<p className="font-medium text-sm">{item.title}</p>
						<p className="mt-1 text-muted-foreground text-sm">
							{item.description}
						</p>
					</div>
				))}
			</div>
			<a
				href="/case-studies"
				className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline"
			>
				Read full case studies →
			</a>
		</section>
	);
}
