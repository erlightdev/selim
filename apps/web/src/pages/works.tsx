const WORK_ITEMS = [
	{
		title: "Design System",
		description: "Token-based theme with light and dark mode support.",
	},
	{
		title: "Portfolio",
		description: "Minimal layout focused on readable typography.",
	},
	{
		title: "Product UI",
		description: "Clean navigation, balanced spacing, and subtle motion.",
	},
];

export default function WorksPage() {
	return (
		<section className="space-y-4">
			<h1 className="font-semibold text-2xl tracking-tight">Works</h1>
			<p className="max-w-2xl text-muted-foreground text-sm">
				A small selection of recent work focused on clarity, rhythm, and a
				minimal visual language.
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
		</section>
	);
}
