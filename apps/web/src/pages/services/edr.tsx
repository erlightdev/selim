import { Lightning, ShieldCheck, Eye, Gear, Bug, Pulse } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function EdrPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Service",
				title: "EDR — Endpoint Detection & Response",
				subtitle: "Best-in-class EDR deployment, 24/7 managed threat hunting, and patch advisory for every endpoint in your fleet.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an engineer", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Laptops and endpoints in office",
				},
			}}
			stats={[
				{ value: "< 5m", label: "Containment SLA" },
				{ value: "24/7", label: "Managed hunting" },
				{ value: "Win/Mac/Linux", label: "Coverage" },
				{ value: "MITRE", label: "ATT&CK mapped" },
			]}
			features={{
				heading: "What's included",
				items: [
					{ icon: Lightning, title: "EDR deployment", description: "CrowdStrike, SentinelOne, Defender for Endpoint — your choice or ours." },
					{ icon: Eye, title: "Managed threat hunting", description: "Proactive hunts against ATT&CK techniques and emerging IoCs." },
					{ icon: Pulse, title: "24/7 alert triage", description: "Tier-1 to Tier-3 analyst-led containment from our Kathmandu SOC." },
					{ icon: Bug, title: "Malware analysis", description: "Static and dynamic analysis, sandboxing and threat-attribution reports." },
					{ icon: Gear, title: "Patch advisory", description: "Monthly prioritised patch and config recommendations." },
					{ icon: ShieldCheck, title: "Policy tuning", description: "Continuous policy tuning to reduce noise and false positives." },
				],
			}}
			process={{
				heading: "Our EDR rollout",
				steps: [
					{ title: "Pilot", description: "10% of fleet for tuning and false-positive baselining." },
					{ title: "Deploy", description: "Phased rollout via your MDM/RMM/GPO." },
					{ title: "Hunt", description: "Continuous threat hunting and detection engineering." },
					{ title: "Respond", description: "Isolate, eradicate and report — 24/7." },
				],
			}}
			faqs={[
				{ q: "Which EDR products do you support?", a: "CrowdStrike Falcon, SentinelOne Singularity, Microsoft Defender for Endpoint, and Trend Micro Vision One." },
				{ q: "Do we need to buy licences separately?", a: "We can resell or you can bring your own. Both options include the same managed service." },
				{ q: "What about Linux servers?", a: "Fully supported. We tune detections specifically for server workloads and reduce kernel-level noise." },
				{ q: "Can you integrate with our SOC?", a: "Yes — EDR alerts can be forwarded to your SIEM or to ours via API/syslog." },
			]}
			cta={{
				heading: "Stop endpoint threats in minutes — not days.",
				subtitle: "Free 14-day proof-of-value on up to 100 endpoints.",
				primary: { label: "Start a PoV", to: "/contact" },
				secondary: { label: "See case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/soc", title: "SOC as a Service" },
					{ to: "/services/dfir", title: "DFIR" },
					{ to: "/services/vapt", title: "VAPT" },
					{ to: "/compliance/iso-27001", title: "ISO 27001" },
					{ to: "/compliance/nist-csf", title: "NIST CSF" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS" },
				],
			}}
		/>
	);
}
