import {
	ArrowRight,
	BracketsCurly,
	CirclesThreePlus,
	Compass,
	CubeFocus,
	Lightning,
	Strategy,
} from "@phosphor-icons/react";

const principles = [
	{
		icon: Strategy,
		title: "Decisions before decoration",
		text: "Every screen starts with product intent, user pressure, and the smallest useful path to shipping.",
	},
	{
		icon: BracketsCurly,
		title: "Systems that can be maintained",
		text: "Components, tokens, copy patterns, and edge states are shaped together so the product stays coherent after launch.",
	},
	{
		icon: Lightning,
		title: "Fast loops, fewer meetings",
		text: "Work moves through short review cycles with concrete artifacts: flows, prototypes, code, and measured fixes.",
	},
] as const;

const capabilities = [
	"Product framing",
	"UX architecture",
	"Interface design",
	"Frontend engineering",
	"Design systems",
	"Launch support",
] as const;

const milestones = [
	{
		year: "2019",
		label: "Started with product websites and conversion-focused redesigns.",
	},
	{
		year: "2021",
		label: "Moved deeper into SaaS workflows, dashboards, and internal tools.",
	},
	{
		year: "2024",
		label: "Built a tighter studio model around design systems and production UI.",
	},
] as const;

export default function AboutPage() {
	return (
		<section className="space-y-14">
			<div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
				<div className="space-y-5">
					<p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
						About Selim Studio
					</p>
					<h1 className="max-w-4xl font-semibold text-4xl tracking-tight md:text-6xl">
						Clear product thinking, shipped as calm software.
					</h1>
					<p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
						We design and build digital products for teams that need sharper
						structure before they scale. The work is practical: define the
						system, remove the noise, and make the important actions obvious.
					</p>
				</div>
				<div className="rounded-xl border border-border/70 bg-muted/30 p-5 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)]">
					<div className="flex items-center justify-between gap-4 border-border/70 border-b pb-4">
						<div>
							<p className="font-medium text-sm">Studio model</p>
							<p className="mt-1 text-muted-foreground text-xs">
								Small senior team, direct implementation.
							</p>
						</div>
						<CubeFocus className="size-6 text-primary" weight="duotone" />
					</div>
					<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
						<div>
							<p className="font-mono text-2xl tracking-tight">6.4</p>
							<p className="mt-1 text-muted-foreground text-xs">avg. week sprint</p>
						</div>
						<div>
							<p className="font-mono text-2xl tracking-tight">38</p>
							<p className="mt-1 text-muted-foreground text-xs">systems shipped</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
				<div className="space-y-4 rounded-xl border border-border/70 bg-card p-5">
					<div className="flex items-center gap-2">
						<Compass className="size-5 text-primary" weight="duotone" />
						<h2 className="font-semibold text-lg tracking-tight">How we work</h2>
					</div>
					<p className="text-muted-foreground text-sm leading-relaxed">
						The process is intentionally narrow: understand the product surface,
						map the decisions, design the flow, then build the interface with the
						same constraints the team will inherit.
					</p>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-transform duration-200 active:translate-y-px"
					>
						Start a project
						<ArrowRight className="size-4" />
					</a>
				</div>

				<div className="grid gap-3 sm:grid-cols-2">
					{capabilities.map((capability, index) => (
						<div
							key={capability}
							className="rounded-xl border border-border/70 bg-background p-4 transition-transform duration-300 hover:-translate-y-1"
							style={{ animationDelay: `${index * 70}ms` }}
						>
							<div className="mb-4 h-1 w-10 rounded-full bg-primary/70" />
							<p className="font-medium text-sm">{capability}</p>
						</div>
					))}
				</div>
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				{principles.map(({ icon: Icon, title, text }) => (
					<article
						key={title}
						className="rounded-xl border border-border/70 bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
					>
						<Icon className="size-6 text-primary" weight="duotone" />
						<h2 className="mt-5 font-semibold text-lg tracking-tight">{title}</h2>
						<p className="mt-2 text-muted-foreground text-sm leading-relaxed">
							{text}
						</p>
					</article>
				))}
			</div>

			<div className="grid gap-8 border-border/70 border-t pt-8 lg:grid-cols-[0.7fr_1.3fr]">
				<div>
					<div className="flex items-center gap-2">
						<CirclesThreePlus className="size-5 text-primary" weight="duotone" />
						<h2 className="font-semibold text-xl tracking-tight">
							Studio timeline
						</h2>
					</div>
					<p className="mt-3 max-w-sm text-muted-foreground text-sm leading-relaxed">
						The studio has kept the same bias throughout: fewer surfaces, better
						decisions, cleaner delivery.
					</p>
				</div>
				<div className="divide-y divide-border/70 rounded-xl border border-border/70">
					{milestones.map((milestone) => (
						<div
							key={milestone.year}
							className="grid gap-3 p-4 sm:grid-cols-[7rem_1fr] sm:p-5"
						>
							<p className="font-mono text-muted-foreground text-sm">
								{milestone.year}
							</p>
							<p className="text-sm leading-relaxed">{milestone.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
