import { FileText, ClipboardText, Scales, Certificate, ShieldCheck, Strategy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function Nia2076Page() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Compliance",
				title: "NIA Guideline 2076",
				subtitle: "Nepal Insurance Authority's IT directive — requiring annual VAPT, IT infrastructure review and documented policy controls for every insurer in Nepal.",
				ctas: [
					{ label: "Start compliance", to: "/contact", variant: "primary" },
					{ label: "Free gap call", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Insurance compliance documents",
				},
			}}
			stats={[
				{ value: "Annual", label: "VAPT" },
				{ value: "IT", label: "Infra review" },
				{ value: "Board", label: "Reporting" },
				{ value: "All insurers", label: "Applies to" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">What it is</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">NIA Guideline 2076 is the Nepal Insurance Authority's directive on information technology governance and security. It requires every insurer — life, non-life, reinsurance and microinsurance — to conduct annual vulnerability assessments, penetration tests and IT infrastructure reviews, and to maintain documented policies, an incident response plan and an internal IT audit function.</p>
						<h3 className="mt-8 text-xl font-semibold text-zinc-900 dark:text-white">Who it applies to</h3>
						<p className="mt-2 text-zinc-600 dark:text-zinc-300">All insurers licensed in Nepal — regardless of size — must demonstrate compliance during NIA inspections.</p>
					</div>
				</section>
			}
			process={{
				heading: "Our approach",
				steps: [
					{ title: "Gap assessment", description: "Map your current state to NIA 2076 articles and identify gaps." },
					{ title: "Remediation", description: "Policy pack, control implementation, evidence collection." },
					{ title: "Annual VAPT", description: "NIA-acceptable VAPT and IT infrastructure review report." },
					{ title: "Inspection support", description: "On-call support during NIA on-site inspections." },
				],
			}}
			features={{
				heading: "What you get",
				items: [
					{ icon: ClipboardText, title: "NIA-aligned policy pack", description: "All required IT, security and continuity policies." },
					{ icon: FileText, title: "Annual VAPT report", description: "NIA-format report covering apps, infra and policies." },
					{ icon: Scales, title: "Risk register", description: "Insurer-specific risk register with treatment plan." },
					{ icon: Strategy, title: "IR plan", description: "Documented incident response plan with tabletop exercise." },
					{ icon: ShieldCheck, title: "Internal IT audit pack", description: "Internal audit evidence and management review minutes." },
					{ icon: Certificate, title: "Inspection support", description: "On-call subject-matter expert during NIA inspections." },
				],
			}}
			faqs={[
				{ q: "How often must we do VAPT under NIA 2076?", a: "At minimum annually, plus after any major change. We schedule fixed-fee annual engagements." },
				{ q: "Does NIA accept your reports?", a: "Yes — our templates have been used in successful NIA inspections across multiple insurers." },
				{ q: "Can you support both life and non-life?", a: "Yes, including reinsurance and microinsurance providers." },
			]}
			cta={{
				heading: "Stay NIA-compliant — every year, without scramble.",
				primary: { label: "Book gap call", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/solutions/insurance", title: "Insurance solutions" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/dfir", title: "DFIR" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
				],
			}}
		/>
	);
}
