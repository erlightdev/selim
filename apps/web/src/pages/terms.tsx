import { LegalLayout } from "./legal-layout";

export default function TermsPage() {
	return (
		<LegalLayout eyebrow="Legal" title="Terms of Service" updated="May 2026">
			<p>
				These Terms govern your access to and use of the website operated by
				Selim Solution Pvt. Ltd. ("Selim Solution") at selimsolution.com, and
				any free resource or assessment we provide through it. Engagements for
				paid services are governed by a separate Master Services Agreement and
				Statement of Work.
			</p>

			<h2>1. Who we are</h2>
			<p>
				Selim Solution is a Managed Cyber Security Service Provider registered
				in Nepal, headquartered in Kathmandu. We provide SOC, VAPT, Cloud
				Security, EDR, GRC &amp; Compliance, DFIR, and Security Awareness
				services.
			</p>

			<h2>2. Use of the website</h2>
			<ul>
				<li>You agree to use this website only for lawful purposes.</li>
				<li>
					You must not attempt to probe, scan, or test the vulnerability of
					this website without our prior written consent. Authorised security
					research can be coordinated via{" "}
					<a href="mailto:security@selimsolution.com">
						security@selimsolution.com
					</a>
					.
				</li>
				<li>
					You must not misrepresent your identity, organisation, or intent
					when submitting enquiries.
				</li>
			</ul>

			<h2>3. Intellectual property</h2>
			<p>
				All content on this site — including the Selim Solution name, logo,
				brand story, copy, methodology summaries, and downloadable resources —
				is the property of Selim Solution and is protected by Nepali and
				international copyright laws. You may share links and quote short
				excerpts with attribution.
			</p>

			<h2>4. Free resources & assessments</h2>
			<p>
				Free assessments, checklists, and consultations are offered as
				good-faith introductions, not as a substitute for a full engagement.
				They are provided "as is" without warranty. Findings shared informally
				do not create a client relationship.
			</p>

			<h2>5. Limitation of liability</h2>
			<p>
				To the maximum extent permitted by law, Selim Solution is not liable
				for any indirect, incidental, or consequential loss arising from your
				use of this website. Paid engagements carry their own liability terms
				as set out in the signed contract.
			</p>

			<h2>6. Third-party links</h2>
			<p>
				The site may link to third-party sites for reference (e.g. NIA, Nepal
				Rastra Bank, ISO). We are not responsible for the content or practices
				of those sites.
			</p>

			<h2>7. Governing law</h2>
			<p>
				These Terms are governed by the laws of Nepal. Disputes will be
				resolved in the competent courts of Kathmandu.
			</p>

			<h2>8. Changes</h2>
			<p>
				We may update these Terms from time to time. Material changes will be
				flagged on this page with an updated date.
			</p>

			<h2>9. Contact</h2>
			<p>
				Questions? Reach us at{" "}
				<a href="mailto:info@selimsolution.com">info@selimsolution.com</a>.
			</p>
		</LegalLayout>
	);
}
