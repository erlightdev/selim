import {
	ArrowRight,
	ChartLineUp,
	CheckCircle,
	CursorClick,
	Database,
	Shapes,
	ShieldCheck,
} from "@phosphor-icons/react";

const cases = [
	{
		name: "Harbor Ledger",
		type: "Fintech operations",
		result: "Reduced review time by 42.7%",
		summary:
			"A reconciliation workspace for finance teams handling fragmented approval flows.",
		details: ["Audit-first IA", "Exception queues", "Design system rebuild"],
		accent: "bg-primary/80",
	},
	{
		name: "Northline Health",
		type: "Clinical scheduling",
		result: "Cut intake errors by 31.4%",
		summary:
			"A patient intake and scheduling refresh for multi-location care teams.",
		details: ["Role-based workflows", "Accessible forms", "Staff handoff states"],
		accent: "bg-foreground/80",
	},
	{
		name: "Aster Freight",
		type: "Logistics platform",
		result: "Lifted task completion by 24.8%",
		summary:
			"A dispatch interface redesign focused on dense scanning and faster exception handling.",
		details: ["Map-adjacent panels", "Live status model", "Mobile triage"],
		accent: "bg-muted-foreground",
	},
] as const;

const metrics = [
	{ label: "Avg. cycle", value: "6.4w" },
	{ label: "Interfaces", value: "82" },
	{ label: "Retention lift", value: "18.6%" },
] as const;

const process = [
	{
		icon: CursorClick,
		title: "Find the broken action",
		text: "We trace the decision path until the work, risk, and user hesitation are visible.",
	},
	{
		icon: Shapes,
		title: "Rebuild the system",
		text: "Navigation, states, forms, empty views, and components are designed as one operating model.",
	},
	{
		icon: Database,
		title: "Ship the durable surface",
		text: "The final UI is built with tokens, responsive constraints, and clear ownership for future changes.",
	},
] as const;

export default function CaseStudiesPage() {
	return (
		<section className="space-y-14">
			<div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
				<div className="space-y-5">
					<p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
						Case studies
					</p>
					<h1 className="max-w-4xl font-semibold text-4xl tracking-tight md:text-6xl">
						Product surfaces rebuilt around measurable work.
					</h1>
					<p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
						A selection of strategy, UX, and interface builds where the goal was
						not more screens. It was better decisions, faster handoffs, and less
						operational drag.
					</p>
				</div>

				<div className="rounded-xl border border-border/70 bg-muted/30 p-5">
					<div className="flex items-center gap-2">
						<ChartLineUp className="size-5 text-primary" weight="duotone" />
						<p className="font-medium text-sm">Impact snapshot</p>
					</div>
					<div className="mt-5 grid grid-cols-3 gap-3 lg:grid-cols-1">
						{metrics.map((metric) => (
							<div key={metric.label}>
								<p className="font-mono text-2xl tracking-tight">{metric.value}</p>
								<p className="mt-1 text-muted-foreground text-xs">
									{metric.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
				<article className="overflow-hidden rounded-xl border border-border/70 bg-card shadow-[0_24px_70px_-38px_rgba(15,23,42,0.35)]">
					<div className="grid min-h-[27rem] gap-0 md:grid-cols-[0.95fr_1.05fr]">
						<div className="flex flex-col justify-between bg-muted/40 p-6">
							<div>
								<p className="text-muted-foreground text-xs uppercase tracking-[0.22em]">
									Featured
								</p>
								<h2 className="mt-4 max-w-sm font-semibold text-3xl tracking-tight">
									Harbor Ledger
								</h2>
								<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
									An operations dashboard redesigned to make exceptions,
									approvals, and audit trails readable under pressure.
								</p>
							</div>
							<a
								href="/contact"
								className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-transform duration-200 active:translate-y-px"
							>
								Discuss similar work
								<ArrowRight className="size-4" />
							</a>
						</div>
						<div className="relative flex items-end bg-foreground p-5 text-background">
							<div className="absolute inset-x-5 top-5 grid gap-2">
								<div className="h-2 w-24 rounded-full bg-background/35" />
								<div className="h-2 w-40 rounded-full bg-background/20" />
							</div>
							<div className="grid w-full gap-3">
								{["Exception queue", "Payment match", "Manager review"].map(
									(item, index) => (
										<div
											key={item}
											className="grid grid-cols-[1fr_auto] items-center rounded-lg border border-background/15 bg-background/10 p-4 backdrop-blur"
										>
											<div>
												<p className="font-medium text-sm">{item}</p>
												<p className="mt-1 text-background/60 text-xs">
													Priority {index + 2}. Manual check required.
												</p>
											</div>
											<CheckCircle
												className="size-5 text-background"
												weight="duotone"
											/>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</article>

				<div className="grid gap-5">
					{cases.slice(1).map((caseItem) => (
						<article
							key={caseItem.name}
							className="rounded-xl border border-border/70 bg-background p-5 transition-transform duration-300 hover:-translate-y-1"
						>
							<div className={`h-1.5 w-16 rounded-full ${caseItem.accent}`} />
							<p className="mt-5 text-muted-foreground text-xs uppercase tracking-[0.2em]">
								{caseItem.type}
							</p>
							<h2 className="mt-2 font-semibold text-2xl tracking-tight">
								{caseItem.name}
							</h2>
							<p className="mt-2 font-medium text-primary text-sm">
								{caseItem.result}
							</p>
							<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
								{caseItem.summary}
							</p>
						</article>
					))}
				</div>
			</div>

			<div className="grid gap-5 lg:grid-cols-3">
				{cases.map((caseItem) => (
					<article
						key={caseItem.name}
						className="rounded-xl border border-border/70 bg-card p-5"
					>
						<div className={`h-1.5 w-14 rounded-full ${caseItem.accent}`} />
						<p className="mt-5 text-muted-foreground text-xs uppercase tracking-[0.2em]">
							{caseItem.type}
						</p>
						<h2 className="mt-2 font-semibold text-xl tracking-tight">
							{caseItem.name}
						</h2>
						<p className="mt-2 text-muted-foreground text-sm leading-relaxed">
							{caseItem.summary}
						</p>
						<ul className="mt-5 space-y-2">
							{caseItem.details.map((detail) => (
								<li key={detail} className="flex items-center gap-2 text-sm">
									<ShieldCheck
										className="size-4 text-primary"
										weight="duotone"
									/>
									<span>{detail}</span>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>

			<div className="grid gap-4 border-border/70 border-t pt-8 md:grid-cols-3">
				{process.map(({ icon: Icon, title, text }) => (
					<div key={title} className="space-y-3">
						<Icon className="size-6 text-primary" weight="duotone" />
						<h2 className="font-semibold text-lg tracking-tight">{title}</h2>
						<p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
