import { Eye, Strategy, Lifebuoy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function InsurancePage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Insurance",
				subtitle: "NIA Guideline 2076 compliance, annual VAPT and IT infrastructure review for life, non-life and reinsurance carriers across Nepal.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Compliance review", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Insurance office documents",
				},
			}}
			stats={[
				{ value: "NIA 2076", label: "Aligned" },
				{ value: "Annual", label: "VAPT" },
				{ value: "ISO 27001", label: "Pathway" },
				{ value: "DFIR", label: "On retainer" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Nepal Insurance Authority (NIA) Guideline 2076 requires every insurer to conduct an annual vulnerability assessment, penetration test and IT infrastructure review — plus maintain documented policies, an incident response plan and an internal IT audit function.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">Most insurers in Nepal still juggle policy administration, premium collection and claims on a mix of on-prem and SaaS systems — making the audit surface broad and the compliance lift heavy.</p>
						<div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-500/30 dark:bg-indigo-500/10">
							<p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">Regulatory anchor</p>
							<div className="mt-3 flex flex-wrap gap-2">
								<a href="/compliance/nia-guideline-2076" className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-200">NIA Guideline 2076</a>
								<a href="/compliance/iso-27001" className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-200">ISO 27001</a>
							</div>
						</div>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack for insurance",
				items: [
					{ icon: Eye, title: "VAPT", description: "NIA-compliant annual VAPT with audit-ready report." },
					{ icon: Strategy, title: "GRC & Compliance", description: "Policy pack, risk register, internal IT audit pack." },
					{ icon: Lifebuoy, title: "DFIR retainer", description: "On-call response, ransomware playbooks, regulator liaison." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Is your VAPT report NIA-acceptable?", a: "Yes — our template aligns to NIA Guideline 2076 audit expectations and has been accepted by NIA inspections." },
				{ q: "Can you deliver inside NIA's annual window?", a: "Yes. We schedule annual engagements at your preferred fiscal-year cadence with fixed-fee pricing." },
				{ q: "Do you support both life and non-life insurers?", a: "Yes, including reinsurance brokers and microinsurance providers." },
			]}
			cta={{
				heading: "Stay NIA-compliant without the scramble.",
				subtitle: "Free NIA 2076 gap assessment for new insurance clients.",
				primary: { label: "Book assessment", to: "/contact" },
				secondary: { label: "Download checklist", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/dfir", title: "DFIR" },
					{ to: "/compliance/nia-guideline-2076", title: "NIA Guideline 2076" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/services/soc", title: "SOC as a Service" },
				],
			}}
		/>
	);
}
