import { GraduationCap, EnvelopeSimple, UsersThree, Presentation, ShieldCheck, ChartLine } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function AwarenessPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Service",
				title: "Security Awareness Training",
				subtitle: "Phishing simulation, staff awareness micro-learning and executive cyber-risk briefings — built for Nepali workplaces and delivered in English and Nepali.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Book a workshop", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Team training session",
				},
			}}
			stats={[
				{ value: "70%", label: "Click-rate reduction" },
				{ value: "EN / NE", label: "Bilingual delivery" },
				{ value: "Quarterly", label: "Phishing waves" },
				{ value: "C-suite", label: "Briefings" },
			]}
			features={{
				heading: "Programme components",
				items: [
					{ icon: EnvelopeSimple, title: "Phishing simulation", description: "Realistic, locally-themed phishing campaigns with just-in-time training." },
					{ icon: GraduationCap, title: "Staff micro-learning", description: "5-minute modules covering passwords, social-engineering and data handling." },
					{ icon: Presentation, title: "Executive briefings", description: "Board and C-suite briefings on cyber risk, regulation and incident readiness." },
					{ icon: UsersThree, title: "Role-based training", description: "Targeted content for developers, finance, HR and admin teams." },
					{ icon: ShieldCheck, title: "Policy attestation", description: "Capture acceptable-use, BYOD and data-handling policy sign-off." },
					{ icon: ChartLine, title: "Reporting & metrics", description: "Per-team and per-user metrics, with trend reporting for the board." },
				],
			}}
			process={{
				steps: [
					{ title: "Baseline", description: "Initial phishing wave and knowledge assessment." },
					{ title: "Train", description: "Roll out micro-learning curriculum across the org." },
					{ title: "Simulate", description: "Quarterly campaigns with rising sophistication." },
					{ title: "Measure", description: "Trend reports, board updates, and KPI tracking." },
				],
			}}
			faqs={[
				{ q: "Do you deliver in Nepali?", a: "Yes — all core modules are available in both English and Nepali, with localised examples." },
				{ q: "Will it integrate with our HRIS?", a: "Yes. We support SSO/SCIM and integrate with most HRIS platforms for auto-enrolment." },
				{ q: "How often should we phish staff?", a: "We recommend monthly micro-campaigns plus quarterly themed waves for sustained reduction." },
				{ q: "Is this acceptable for audit?", a: "Yes — programme evidence maps directly to ISO 27001 A.6.3, PCI-DSS 12.6 and NIA 2076." },
			]}
			cta={{
				heading: "Turn your people into the strongest layer.",
				subtitle: "Free phishing baseline for up to 100 staff.",
				primary: { label: "Start baseline", to: "/contact" },
				secondary: { label: "Download brochure", to: "/downloads" },
			}}
			related={{
				items: [
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/dfir", title: "DFIR" },
					{ to: "/solutions/healthcare", title: "Healthcare" },
					{ to: "/solutions/education-ngos", title: "Education & NGOs" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
				],
			}}
		/>
	);
}
