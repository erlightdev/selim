import { Cloud, ShieldCheck, Key, Lock, Eye, Gear } from "@phosphor-icons/react";
import { MarketingPage } from "@/components/marketing";

export default function CloudSecurityPage() {
	return (
		<MarketingPage
			hero={{
				eyebrow: "Service",
				title: "Cloud Security",
				subtitle: "AWS, Azure and GCP posture management, CSPM, IAM hardening and zero-trust architecture — built for Nepali cloud-first enterprises.",
				ctas: [
					{ label: "Request a quote", to: "/contact", variant: "primary" },
					{ label: "Talk to an engineer", to: "/contact", variant: "secondary" },
				],
				image: {
					src: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1280",
					alt: "Cloud data centre servers",
				},
			}}
			stats={[
				{ value: "AWS / Azure / GCP", label: "Multi-cloud" },
				{ value: "CSPM", label: "Continuous posture" },
				{ value: "IAM", label: "Least-privilege" },
				{ value: "Zero-Trust", label: "Architecture" },
			]}
			features={{
				heading: "What's included",
				items: [
					{ icon: Cloud, title: "Cloud posture management", description: "Continuous CSPM across AWS, Azure, GCP — misconfig, drift, exposure detection." },
					{ icon: Key, title: "IAM & identity hardening", description: "Least-privilege review, role analysis, federation and MFA enforcement." },
					{ icon: Lock, title: "Zero-trust architecture", description: "Segmentation, conditional access, private endpoints, secrets management." },
					{ icon: Eye, title: "Cloud workload protection", description: "Container, Kubernetes and serverless runtime security." },
					{ icon: ShieldCheck, title: "Data protection", description: "Encryption, KMS / HSM design, DLP, backup posture." },
					{ icon: Gear, title: "Compliance baselines", description: "CIS Benchmarks, ISO 27017/27018, PCI-DSS mappings." },
				],
			}}
			process={{
				heading: "Our cloud hardening process",
				steps: [
					{ title: "Assess", description: "Inventory, baseline and CSPM scan of every account/subscription." },
					{ title: "Prioritise", description: "Risk-rank findings by blast-radius and exploitability." },
					{ title: "Remediate", description: "IaC fixes, guardrails (SCPs, Azure Policy), and IAM rework." },
					{ title: "Operate", description: "Continuous monitoring, drift alerts and quarterly reviews." },
				],
			}}
			faqs={[
				{ q: "Do you support hybrid and on-prem?", a: "Yes — we cover hybrid topologies, VMware private clouds, and connectivity back to on-prem AD/DNS." },
				{ q: "Can you fix things, not just find them?", a: "Yes. Our engineers ship Terraform/Bicep/CloudFormation patches and integrate with your CI/CD." },
				{ q: "Is this mapped to a regulation?", a: "We map findings to CIS, ISO 27017, PCI-DSS, NRB IT Guidelines and NIST CSF." },
				{ q: "How is pricing structured?", a: "Per cloud account/subscription per month, with a one-time onboarding fee. Volume discounts apply." },
			]}
			cta={{
				heading: "Ready to harden your cloud?",
				subtitle: "Free 30-minute cloud posture review with a senior engineer.",
				primary: { label: "Request quote", to: "/contact" },
				secondary: { label: "See case studies", to: "/case-studies" },
			}}
			related={{
				items: [
					{ to: "/services/soc", title: "SOC as a Service", description: "24/7 cloud monitoring" },
					{ to: "/services/vapt", title: "VAPT", description: "Cloud penetration testing" },
					{ to: "/services/grc-compliance", title: "GRC & Compliance", description: "Cloud audit readiness" },
					{ to: "/compliance/iso-27001", title: "ISO 27001", description: "ISMS certification" },
					{ to: "/compliance/nist-csf", title: "NIST CSF", description: "Risk framework" },
					{ to: "/compliance/pci-dss", title: "PCI-DSS", description: "Cardholder data" },
				],
			}}
		/>
	);
}
