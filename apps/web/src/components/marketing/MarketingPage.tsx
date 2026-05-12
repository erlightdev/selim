import PageHero, { type PageHeroProps } from "./PageHero";
import StatStrip, { type Stat } from "./StatStrip";
import FeatureGrid, { type FeatureItem } from "./FeatureGrid";
import ProcessSteps, { type ProcessStep } from "./ProcessSteps";
import CTASection from "./CTASection";
import FAQ, { type FAQItem } from "./FAQ";
import RelatedLinks, { type RelatedLink } from "./RelatedLinks";

export interface MarketingPageProps {
	hero: PageHeroProps;
	stats?: Stat[];
	features?: { heading: string; subtitle?: string; items: FeatureItem[]; columns?: 2 | 3 | 4 };
	process?: { heading?: string; steps: ProcessStep[] };
	customSections?: React.ReactNode;
	faqs?: FAQItem[];
	cta: { heading: string; subtitle?: string; primary?: { label: string; to?: string; href?: string }; secondary?: { label: string; to?: string; href?: string } };
	related?: { heading?: string; items: RelatedLink[] };
}

export default function MarketingPage(p: MarketingPageProps) {
	return (
		<main>
			<PageHero {...p.hero} />
			{p.stats && <StatStrip stats={p.stats} />}
			{p.features && <FeatureGrid {...p.features} />}
			{p.process && <ProcessSteps heading={p.process.heading} steps={p.process.steps} />}
			{p.customSections}
			{p.faqs && <FAQ items={p.faqs} />}
			<CTASection {...p.cta} />
			{p.related && <RelatedLinks heading={p.related.heading} items={p.related.items} />}
		</main>
	);
}
