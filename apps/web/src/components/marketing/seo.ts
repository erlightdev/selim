// Shared SEO helper for route head meta.

export interface SeoInput {
	title: string;
	description: string;
	keywords?: string;
	image?: string;
	path: string; // leading slash, e.g. /services/soc
}

const SITE = "https://www.selimsolution.com";
const DEFAULT_IMAGE =
	"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1280";

export function seo(input: SeoInput) {
	const image = input.image ?? DEFAULT_IMAGE;
	const url = `${SITE}${input.path}`;
	const meta = [
		{ title: input.title },
		{ name: "description", content: input.description },
		{ name: "robots", content: "index, follow" },
		...(input.keywords
			? [{ name: "keywords", content: input.keywords }]
			: []),
		{ property: "og:type", content: "website" },
		{ property: "og:title", content: input.title },
		{ property: "og:description", content: input.description },
		{ property: "og:image", content: image },
		{ property: "og:url", content: url },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: input.title },
		{ name: "twitter:description", content: input.description },
		{ name: "twitter:image", content: image },
	];

	const links = [{ rel: "canonical", href: url }];

	return { meta, links };
}
