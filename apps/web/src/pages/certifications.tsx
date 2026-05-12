import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	CertificateIcon,
	CloudCheck,
	GraduationCap,
	Lock,
	ShieldCheck,
	UsersThree,
} from "@phosphor-icons/react";

const certifications = [
	{
		icon: ShieldCheck,
		name: "CISSP",
		issuer: "ISC2",
		domain: "Security architecture & management",
	},
	{
		icon: Lock,
		name: "CISM",
		issuer: "ISACA",
		domain: "Information security management",
	},
	{
		icon: UsersThree,
		name: "CEH / CEH Practical",
		issuer: "EC-Council",
		domain: "Ethical hacking & penetration testing",
	},
	{
		icon: CertificateIcon,
		name: "ISO 27001 Lead Auditor",
		issuer: "PECB / BSI",
		domain: "ISMS audit",
	},
	{
		icon: CertificateIcon,
		name: "ISO 27001 Lead Implementer",
		issuer: "PECB / BSI",
		domain: "ISMS implementation",
	},
	{
		icon: GraduationCap,
		name: "CompTIA Security+",
		issuer: "CompTIA",
		domain: "Foundational security operations",
	},
	{
		icon: ShieldCheck,
		name: "CCNA / CCNP Security",
		issuer: "Cisco",
		domain: "Network security",
	},
	{
		icon: CloudCheck,
		name: "AWS / Azure Security Specialty",
		issuer: "Amazon / Microsoft",
		domain: "Cloud security",
	},
] as const;

const frameworks = [
	{
		name: "ISO 27001",
		desc: "Our internal ISMS is aligned with ISO/IEC 27001 controls; we lead clients through certification end-to-end.",
	},
	{
		name: "NIA Guideline 2076",
		desc: "Annual vulnerability testing, IT infrastructure review, and policy advisory for Nepali insurers.",
	},
	{
		name: "Nepal Rastra Bank Directives",
		desc: "Core banking security, fraud detection, and SOC coverage aligned with NRB IT directives.",
	},
	{
		name: "PCI-DSS",
		desc: "Scoping, gap assessment, and remediation for payment environments.",
	},
	{
		name: "NIST CSF",
		desc: "Identify, Protect, Detect, Respond, Recover — mapped to your business risk.",
	},
] as const;

export default function CertificationsPage() {
	return (
		<main className="relative min-h-screen bg-white text-zinc-900 dark:bg-transparent dark:text-white">
			<section className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28">
				<p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300/80">
					Certifications
				</p>
				<h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
					Credentialed expertise. Independently verified.
				</h1>
				<p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-white/65">
					Every Selim Solution engagement is led by certified practitioners.
					Below are the certifications our team holds — alongside the
					frameworks we deliver against for Nepali banking, insurance, and
					regulated industries.
				</p>

				<div className="mt-14">
					<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-white/55">
						Team certifications
					</h2>
					<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{certifications.map((c) => {
							const Icon = c.icon;
							return (
								<div
									key={c.name}
									className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-indigo-400/60 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-indigo-400/30 dark:hover:bg-white/[0.06]"
								>
									<div className="flex items-start gap-3">
										<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-indigo-200">
											<Icon className="size-5" weight="duotone" />
										</span>
										<div className="min-w-0">
											<p className="text-sm font-semibold text-zinc-950 dark:text-white">
												{c.name}
											</p>
											<p className="mt-0.5 text-xs text-zinc-500 dark:text-white/55">
												{c.issuer}
											</p>
											<p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-white/65">
												{c.domain}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="mt-20">
					<h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-white/55">
						Frameworks we deliver
					</h2>
					<div className="mt-6 grid gap-3 sm:grid-cols-2">
						{frameworks.map((f) => (
							<div
								key={f.name}
								className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
							>
								<p className="text-base font-semibold text-zinc-950 dark:text-white">
									{f.name}
								</p>
								<p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-white/65">
									{f.desc}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="mt-20 overflow-hidden rounded-3xl border border-zinc-200 bg-[linear-gradient(135deg,rgba(99,102,241,0.10),rgba(255,255,255,0.6))] p-8 sm:p-12 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(8,5,31,0.6))]">
					<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
						<div className="max-w-xl">
							<h3 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
								Need a credential confirmed?
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-white/65">
								We're happy to share certification numbers and verification
								links during procurement and vendor onboarding. Reach out and
								we'll send proof within one business day.
							</p>
						</div>
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-white dark:text-[#16113a] dark:hover:bg-indigo-50"
						>
							Request verification
							<ArrowRight className="size-4" />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
