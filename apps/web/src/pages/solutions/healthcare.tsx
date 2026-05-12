import { Eye, Lightning, GraduationCap } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function HealthcarePage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Healthcare",
				subtitle: "Patient data protection, EMR/EHR security, ransomware resilience and HIPAA-aligned controls for hospitals, clinics and diagnostic networks.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an expert", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Hospital corridor",
				},
			}}
			stats={[
				{ value: "EMR / EHR", label: "Hardened" },
				{ value: "HIPAA", label: "Aligned" },
				{ value: "Ransomware", label: "Resilient" },
				{ value: "24/7", label: "SOC option" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Healthcare providers run a complex mix of legacy biomedical devices, EMR/EHR platforms, lab systems and shared workstations — all handling deeply sensitive patient data. Ransomware groups disproportionately target hospitals because downtime equals lives at risk.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">We help Nepali hospitals build a resilient stack: segment biomedical, harden endpoints, train staff and respond fast when something goes wrong.</p>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack for healthcare",
				items: [
					{ icon: Eye, title: "VAPT", description: "EMR, patient portal and biomedical-segment testing." },
					{ icon: Lightning, title: "EDR", description: "Ransomware-resilient endpoint protection with managed hunting." },
					{ icon: GraduationCap, title: "Awareness Training", description: "Role-based training for clinical, admin and IT staff." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Are you HIPAA-aligned?", a: "Yes — our controls and reporting map to HIPAA Security Rule, with adaptations for Nepali law." },
				{ q: "Can you secure biomedical devices?", a: "We segment and monitor biomedical networks; we don't modify FDA-locked firmware." },
				{ q: "Do you support small clinics?", a: "Yes — packaged offerings for clinics under 50 endpoints exist with grant-friendly pricing." },
			]}
			cta={{
				heading: "Keep patient data — and care — safe.",
				primary: { label: "Request quote", to: "/contact" },
				secondary: { label: "View case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/edr", title: "EDR" },
					{ to: "/services/security-awareness-training", title: "Awareness Training" },
					{ to: "/services/dfir", title: "DFIR" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
				],
			}}
		/>
	);
}
