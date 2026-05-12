import { Button } from "@selim/ui/components/button";
import { Input } from "@selim/ui/components/input";
import { Label } from "@selim/ui/components/label";
import {
	ArrowRight,
	CalendarDots,
	Clock,
	EnvelopeSimple,
	MapPin,
	Question,
	SealCheck,
	Sparkle,
} from "@phosphor-icons/react";

const CONTACT_EMAIL = "hello@selim.studio";

const contactMethods = [
	{
		icon: EnvelopeSimple,
		label: "Email",
		value: CONTACT_EMAIL,
		href: `mailto:${CONTACT_EMAIL}`,
	},
	{
		icon: CalendarDots,
		label: "Discovery",
		value: "Book a working call",
		href: `mailto:${CONTACT_EMAIL}?subject=Discovery%20call`,
	},
	{
		icon: MapPin,
		label: "Studio",
		value: "Remote, GMT-friendly",
		href: "/contact",
	},
] as const;

const projectTypes = [
	"Product strategy",
	"UX/UI design",
	"Full-stack build",
	"Design system",
	"Product cleanup",
	"Launch support",
] as const;

const responseNotes = [
	"Reply within 48 hours with direct questions.",
	"Short fit check before any proposal work.",
	"Clear scope, timeline, and ownership if we proceed.",
] as const;

const fieldShell = "space-y-2";
const inputClass =
	"h-11 rounded-lg border-border/80 bg-background transition-shadow focus-visible:ring-primary/30";

export default function ContactPage() {
	return (
		<section className="space-y-12">
			<div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-end">
				<div className="space-y-5">
					<p className="text-muted-foreground text-xs uppercase tracking-[0.24em]">
						Contact
					</p>
					<h1 className="max-w-4xl font-semibold text-4xl tracking-tight md:text-6xl">
						Bring the messy product problem. We will find the clean path.
					</h1>
					<p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
						Send the context, constraints, and where the work is stuck. You will
						get a practical response, not a generic sales sequence.
					</p>
				</div>
				<div className="rounded-xl border border-border/70 bg-muted/30 p-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.32)]">
					<div className="flex items-center gap-2">
						<Clock className="size-5 text-primary" weight="duotone" />
						<span className="font-medium text-sm">Typical response</span>
					</div>
					<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
						Within 48 hours, with the follow-up questions needed to assess fit,
						timeline, and scope.
					</p>
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr_1fr]">
				{contactMethods.map(({ icon: Icon, label, value, href }) => (
					<a
						key={label}
						href={href}
						className="group rounded-xl border border-border/70 bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 active:translate-y-px"
					>
						<Icon
							className="size-6 text-primary transition-transform duration-300 group-hover:scale-110"
							weight="duotone"
						/>
						<p className="mt-5 font-medium text-sm">{label}</p>
						<p className="mt-1 text-muted-foreground text-sm">{value}</p>
					</a>
				))}
			</div>

			<div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
				<form
					action={`mailto:${CONTACT_EMAIL}`}
					className="rounded-xl border border-border/70 bg-card p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.4)] sm:p-6"
					method="post"
					encType="text/plain"
				>
					<div className="grid gap-4 sm:grid-cols-2">
						<div className={fieldShell}>
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								name="name"
								placeholder="Your name"
								required
								className={inputClass}
								aria-describedby="name-helper"
							/>
							<p id="name-helper" className="text-muted-foreground text-xs">
								Use the name you want us to reply to.
							</p>
						</div>
						<div className={fieldShell}>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="you@company.com"
								required
								type="email"
								className={inputClass}
								aria-describedby="email-helper"
							/>
							<p id="email-helper" className="text-muted-foreground text-xs">
								We only use this for the project conversation.
							</p>
						</div>
					</div>

					<div className="mt-5 grid gap-4 sm:grid-cols-2">
						<div className={fieldShell}>
							<Label htmlFor="company">Company</Label>
							<Input
								id="company"
								name="company"
								placeholder="Company or product"
								className={inputClass}
							/>
							<p className="text-muted-foreground text-xs">
								Optional, but useful for context.
							</p>
						</div>
						<div className={fieldShell}>
							<Label htmlFor="budget">Budget range</Label>
							<select
								id="budget"
								name="budget"
								className="flex h-11 w-full rounded-lg border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
								defaultValue=""
							>
								<option disabled value="">
									Select a range
								</option>
								<option>$8k - $18k</option>
								<option>$18k - $45k</option>
								<option>$45k - $90k</option>
								<option>$90k+</option>
							</select>
							<p className="text-muted-foreground text-xs">
								A rough range is enough.
							</p>
						</div>
					</div>

					<fieldset className="mt-6">
						<legend className="font-medium text-sm">What do you need?</legend>
						<p className="mt-1 text-muted-foreground text-xs">
							Choose every option that describes the work.
						</p>
						<div className="mt-3 grid gap-2 sm:grid-cols-2">
							{projectTypes.map((type) => (
								<label
									key={type}
									className="flex min-h-12 items-center gap-3 rounded-lg border border-border/70 px-3 py-2 text-sm transition-all duration-200 hover:bg-muted/40 active:translate-y-px"
								>
									<input
										name="projectType"
										type="checkbox"
										value={type}
										className="size-4 rounded border-input accent-primary"
									/>
									<span>{type}</span>
								</label>
							))}
						</div>
					</fieldset>

					<div className="mt-6 space-y-2">
						<Label htmlFor="message">Project details</Label>
						<textarea
							id="message"
							name="message"
							className="min-h-40 w-full resize-y rounded-lg border border-border/80 bg-background px-3 py-3 text-sm ring-offset-background transition-shadow placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
							placeholder="Tell us about the product, users, current state, timeline, and what needs to change."
							required
							aria-describedby="message-helper message-error"
						/>
						<p id="message-helper" className="text-muted-foreground text-xs">
							The more concrete the context, the better the first reply.
						</p>
						<p id="message-error" className="hidden text-destructive text-xs">
							Please include a short project description before sending.
						</p>
					</div>

					<div className="mt-6 flex flex-col gap-3 border-border/70 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
						<p className="max-w-md text-muted-foreground text-xs leading-relaxed">
							Submitting opens your email client and starts a direct
							conversation with the studio.
						</p>
						<Button
							className="gap-2 transition-transform duration-200 active:translate-y-px"
							type="submit"
						>
							Send message
							<ArrowRight className="size-4" />
						</Button>
					</div>
				</form>

				<aside className="space-y-4">
					<div className="rounded-xl border border-border/70 bg-muted/30 p-5">
						<div className="flex items-center gap-2">
							<SealCheck className="size-5 text-primary" weight="duotone" />
							<h2 className="font-medium text-sm">What happens next</h2>
						</div>
						<ul className="mt-4 space-y-3 text-muted-foreground text-sm">
							{responseNotes.map((note) => (
								<li key={note} className="flex gap-3">
									<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
									<span>{note}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-xl border border-border/70 bg-background p-5">
						<div className="flex items-center gap-2">
							<Question className="size-5 text-primary" weight="duotone" />
							<h2 className="font-medium text-sm">Best fit</h2>
						</div>
						<p className="mt-3 text-muted-foreground text-sm leading-relaxed">
							Early-stage products, redesigns, operational tools, and design
							systems that need clearer structure before build or scale.
						</p>
					</div>

					<div className="rounded-xl border border-border/70 bg-foreground p-5 text-background">
						<Sparkle className="size-5" weight="duotone" />
						<h2 className="mt-4 font-medium text-sm">Bring constraints</h2>
						<p className="mt-2 text-background/70 text-sm leading-relaxed">
							Timeline, budget, technical limits, team capacity, and launch risk
							help shape the strongest recommendation.
						</p>
					</div>
				</aside>
			</div>
		</section>
	);
}
