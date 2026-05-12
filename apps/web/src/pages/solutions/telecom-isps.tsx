import { Eye, Lightning, Pulse } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function TelecomPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Industry",
				title: "Cyber Security for Telecom & ISPs",
				subtitle: "Network perimeter security, DDoS mitigation, OT/ICS hardening and carrier-grade monitoring for telecom operators and ISPs in Nepal.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an engineer", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Network operations centre",
				},
			}}
			stats={[
				{ value: "Carrier-grade", label: "SOC" },
				{ value: "DDoS", label: "Mitigation" },
				{ value: "OT / ICS", label: "Hardening" },
				{ value: "BGP", label: "Hygiene" },
			]}
			customSections={
				<section className="bg-white py-16 dark:bg-zinc-950">
					<div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">The challenge</h2>
						<p className="mt-4 text-zinc-600 dark:text-zinc-300">Telecom operators and ISPs sit at the centre of Nepal's digital economy. Volumetric DDoS, route hijacks, customer-premise equipment compromise and OT/ICS exposure inside core network infrastructure are real and growing threats.</p>
						<p className="mt-3 text-zinc-600 dark:text-zinc-300">We help carriers protect both their corporate IT and the production network plane — without dropping packets.</p>
					</div>
				</section>
			}
			features={{
				heading: "Tailored stack for telecom",
				items: [
					{ icon: Eye, title: "VAPT", description: "BGP, routing protocol, CPE, BSS/OSS and customer-portal testing." },
					{ icon: Lightning, title: "EDR", description: "Endpoint coverage across corporate, NOC and field-engineer fleets." },
					{ icon: Pulse, title: "SOC as a Service", description: "24/7 monitoring of customer-facing services and core infrastructure." },
				],
				columns: 3,
			}}
			faqs={[
				{ q: "Do you have telecom-specific detections?", a: "Yes — GTP, Diameter, SIP, BGP anomalies and CPE compromise patterns are part of our standard detection library." },
				{ q: "Can you support 24/7 NOC integration?", a: "We integrate with your NOC ticketing and on-call rotations for unified incident handling." },
				{ q: "What about IoT and CPE security?", a: "We assess and harden mass-deployed CPE fleets, including firmware-update governance." },
			]}
			cta={{
				heading: "Carrier-grade security, built for Nepal.",
				primary: { label: "Request quote", to: "/contact" },
				secondary: { label: "View case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/services/edr", title: "EDR" },
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/cloud-security", title: "Cloud Security" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
				],
			}}
		/>
	);
}
