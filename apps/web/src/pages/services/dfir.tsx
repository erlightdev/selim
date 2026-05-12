import { ShieldCheck, MagnifyingGlass, Bug, FileText, Lifebuoy, Lightning } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function DfirPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Service",
				title: "DFIR — Digital Forensics & Incident Response",
				subtitle: "Post-breach forensics, malware analysis, recovery advisory and courtroom-ready reporting for organisations across Nepal.",
				ctas: [
					{ label: "Emergency response", to: "/contact", variant: "primary" },
					{ label: "Retainer enquiry", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Forensic analyst working on laptop",
				},
			}}
			stats={[
				{ value: "< 1h", label: "Triage response" },
				{ value: "24/7", label: "Hotline" },
				{ value: "Court-ready", label: "Reports" },
				{ value: "Retainer", label: "Available" },
			]}
			features={{
				heading: "What's included",
				items: [
					{ icon: Lightning, title: "Emergency response", description: "Rapid on-site or remote engagement within 1 hour of activation." },
					{ icon: MagnifyingGlass, title: "Host & memory forensics", description: "Disk imaging, volatile memory capture, timeline reconstruction." },
					{ icon: Bug, title: "Malware reverse engineering", description: "Sample analysis, indicators-of-compromise extraction, attribution." },
					{ icon: FileText, title: "Evidence preservation", description: "Chain-of-custody, hash verification, courtroom-grade reporting." },
					{ icon: Lifebuoy, title: "Recovery advisory", description: "Containment, eradication, hardening and clean-up playbooks." },
					{ icon: ShieldCheck, title: "Lessons learned", description: "Post-incident report with control uplifts and tabletop exercise." },
				],
			}}
			process={{
				heading: "Our IR lifecycle",
				steps: [
					{ title: "Activate", description: "Hotline call, scoping, NDA and engagement letter." },
					{ title: "Contain", description: "Isolate, preserve evidence and stop the bleed." },
					{ title: "Investigate", description: "Forensic acquisition, timeline, root cause." },
					{ title: "Recover", description: "Hardening, lessons-learned, executive readout." },
				],
			}}
			faqs={[
				{ q: "Do you offer a retainer?", a: "Yes. Pre-negotiated rates, named responders, defined SLAs and quarterly tabletop exercises." },
				{ q: "Will the report stand up in court?", a: "Yes — chain-of-custody, hash verification and methodology align to ACPO and ISO 27037 guidelines." },
				{ q: "Can you help us notify regulators?", a: "We support notification language and timelines for NRB, NIA, and data-protection authorities." },
				{ q: "What's your typical response time?", a: "Retainer clients: under 1 hour. New clients: under 4 hours after engagement letter signed." },
			]}
			cta={{
				heading: "Under attack? We respond in under an hour.",
				subtitle: "24/7 DFIR hotline for retainer and emergency clients in Nepal.",
				primary: { label: "Activate response", to: "/contact" },
				secondary: { label: "Request retainer", to: "/contact" },
			}}
			related={{
				items: [
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/edr", title: "EDR" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nrb-directives", title: "NRB Directives" },
					{ to: "/services/security-awareness-training", title: "Awareness Training" },
				],
			}}
		/>
	);
}
