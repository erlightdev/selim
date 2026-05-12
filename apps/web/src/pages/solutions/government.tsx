import { Strategy, Pulse, Cloud } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function GovernmentPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Government & Public Sector",
				subtitle: "E-governance platform security, citizen data protection and national cyber framework alignment for ministries, agencies and local government bodies in Nepal.",
				ctas: [
					{ label: "Request a briefing", to: "/contact", variant: "primary" },
					{ label: "Talk to an expert", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/289824/pexels-photo-289824.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Government building",
				},
			}}
			stats={[
				{ value: "ISO 27001", label: "Aligned" },
				{ value: "24/7", label: "SOC coverage" },
				{ value: "Cloud", label: "First posture" },
				{ value: "Citizen", label: "Data protection" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Nepal's digital transformation puts citizen-facing services online — Nagarik App, Vahan portal, land records, taxation. With that growth comes a target on every public-facing service: data leaks, defacements and ransomware impacting essential services.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">Public-sector teams need a partner who understands Nepali procurement, can write national-framework-aligned policies and operate a 24/7 SOC without inflating the headcount.</p>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack for government",
				items: [
					{ icon: Strategy, title: "GRC & Compliance", description: "ISO 27001, NIST CSF and national cyber framework alignment." },
					{ icon: Pulse, title: "SOC as a Service", description: "24/7 monitoring of citizen-facing portals and internal systems." },
					{ icon: Cloud, title: "Cloud Security", description: "Hybrid and government-cloud posture management." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Are you empanelled with government bodies?", a: "We bid via standard PPMO processes and partner with empanelled local firms for multi-vendor consortiums." },
				{ q: "Can you handle classified workloads?", a: "Yes — with named-personnel clearance procedures, segregated environments and on-prem-only options." },
				{ q: "Do you provide capacity building?", a: "Yes. We deliver workshops, table-top exercises and rotational secondments to government IT teams." },
			]}
			cta={{
				heading: "Defend public-sector services at national scale.",
				primary: { label: "Request briefing", to: "/contact" },
				secondary: { label: "View case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/grc-compliance", title: "GRC & Compliance" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/cloud-security", title: "Cloud Security" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
					{ to: "/services/security-awareness-training", title: "Awareness Training" },
				],
			}}
		/>
	);
}
