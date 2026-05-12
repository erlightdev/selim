import { GraduationCap, Eye, Strategy } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function EducationNgosPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Education & NGOs",
				subtitle: "Affordable, grant-compatible packages: staff awareness training, lightweight VAPT and starter GRC for schools, universities, NGOs and INGOs across Nepal.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Grant-friendly pricing", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Classroom",
				},
			}}
			stats={[
				{ value: "Grant", label: "Compatible" },
				{ value: "Nepali", label: "Bilingual training" },
				{ value: "Fixed", label: "Fee packages" },
				{ value: "Starter", label: "ISO 27001" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Education institutions and NGOs hold sensitive data — student records, beneficiary lists, donor information — but rarely have a dedicated security function. Donor and university partners increasingly require evidence of basic cyber hygiene.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">We package the essentials: awareness training, an annual VAPT, and starter ISO 27001 readiness — at pricing your grant or board can approve.</p>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack",
				items: [
					{ icon: GraduationCap, title: "Awareness Training", description: "Bilingual phishing and data-handling training for staff and volunteers." },
					{ icon: Eye, title: "VAPT", description: "Lightweight annual VAPT of public-facing portals and admin tools." },
					{ icon: Strategy, title: "GRC starter pack", description: "Policy templates, risk register and donor-acceptable evidence pack." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Do you have NGO pricing?", a: "Yes — grant-friendly fixed-fee packages with multi-year discounts for registered NGOs and INGOs." },
				{ q: "Can you deliver in Nepali?", a: "Yes, awareness training is delivered in both English and Nepali." },
				{ q: "What about donor compliance?", a: "We provide donor-acceptable evidence (policies, training logs, VAPT report) aligned to common donor security requirements." },
			]}
			cta={{
				heading: "Affordable security for missions that matter.",
				primary: { label: "Get NGO pricing", to: "/contact" },
				secondary: { label: "Download brochure", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/services/security-awareness-training", title: "Awareness Training" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
					{ to: "/services/soc", title: "SOC as a Service" },
				],
			}}
		/>
	);
}
