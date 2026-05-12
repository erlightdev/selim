import { LegalLayout } from "./legal-layout";

export default function PrivacyPage() {
	return (
		<LegalLayout eyebrow="Legal" title="Privacy Policy" updated="May 2026">
			<p>
				Selim Solution Pvt. Ltd. ("Selim Solution", "we", "our", or "us") is a
				Managed Cyber Security Service Provider headquartered in Kathmandu,
				Nepal. We respect the privacy of every visitor, client, and prospect
				who interacts with us. This policy explains what information we
				collect, how we use it, and the choices you have.
			</p>

			<h2>1. Information we collect</h2>
			<ul>
				<li>
					<strong>Contact details</strong> you submit through our forms — name,
					organisation, email, phone, service of interest, and the message you
					send us.
				</li>
				<li>
					<strong>Engagement data</strong> for clients — scoping documents,
					assets in scope, technical contact details, and findings produced
					during assessments.
				</li>
				<li>
					<strong>Usage data</strong> — anonymised analytics about how
					selimsolution.com is used (pages viewed, approximate location, device
					type).
				</li>
				<li>
					<strong>Cookies</strong> — strictly necessary cookies for site
					functionality and, with consent, analytics cookies.
				</li>
			</ul>

			<h2>2. How we use it</h2>
			<ul>
				<li>To respond to enquiries and deliver the services you engage us for.</li>
				<li>
					To meet regulatory and contractual obligations (NIA Guideline 2076,
					Nepal Rastra Bank directives, ISO 27001, PCI-DSS, etc.).
				</li>
				<li>
					To improve our website, content, and service quality. We never sell
					your personal data.
				</li>
			</ul>

			<h2>3. How we protect it</h2>
			<p>
				Client data is handled inside an ISO 27001-aligned information security
				management system. We apply least-privilege access, encryption in
				transit and at rest, audit logging, and strict separation between
				engagement environments. Findings and reports are shared only with
				authorised client contacts.
			</p>

			<h2>4. Sharing & sub-processors</h2>
			<p>
				We do not share personal data with third parties except: (a) trusted
				sub-processors that help us operate our SOC and tooling under written
				data-protection terms; (b) when required by Nepali law or a valid legal
				request. A current list of sub-processors is available on request.
			</p>

			<h2>5. Retention</h2>
			<p>
				Enquiry data is retained for up to 24 months unless you ask us to delete
				it sooner. Engagement records are retained for the term of the contract
				plus the period required by applicable law and audit requirements.
			</p>

			<h2>6. Your rights</h2>
			<p>
				You can request access, correction, or deletion of your personal data
				by writing to{" "}
				<a href="mailto:privacy@selimsolution.com">privacy@selimsolution.com</a>
				. We respond within 30 days.
			</p>

			<h2>7. Contact</h2>
			<p>
				Selim Solution Pvt. Ltd.
				<br />
				Kathmandu, Nepal
				<br />
				<a href="mailto:info@selimsolution.com">info@selimsolution.com</a>
			</p>
		</LegalLayout>
	);
}
