// @ts-nocheck
import { randomBytes } from 'node:crypto';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, url }) {
	const csrfToken = randomBytes(32).toString('hex');
	cookies.set('csrfToken', csrfToken, { httpOnly: true, sameSite: 'strict', path: '/' });

	const t = url.searchParams.get('t');
	if (t) {
		cookies.set('cf_prospect_uid', t, {
			httpOnly: true,
			sameSite: 'strict',
			path: '/'
		});
	}

	const variants = [
		{ variant: 1, title: 'Get your next 100 Leads.', description: 'Instant Landing Pages. Powered By AI.' },
		{ variant: 2, title: 'Get your next 100 Customers.', description: 'Generate a Landing Page before your coffee\'s ready.' },
		{ variant: 3, title: 'Get +100 Customers with AI.', description: 'Fast, instant HIGH CONVERTING Landing Pages.' },
		{ variant: 4, title: 'Let AI get your next Lead.', description: 'Just one prompt. Fully built, optimized, and deployed.' },
		{ variant: 5, title: 'Let AI get your next 100 Leads.', description: 'Prompt to Landing Page in under 20 seconds.' },
		{ variant: 6, title: 'Let AI get your next 100 Customers.', description: 'Why drag blocks when you can just prompt it?' },
		{ variant: 7, title: 'The FASTEST way to get leads.', description: 'No code. No delays. Just instant landing pages that convert.' },
		{ variant: 8, title: 'Instant Lead Generation Machine.', description: 'No code, no fluff — just a landing page that converts.' },
		{ variant: 9, title: 'The MAD Lead Generation Machine.', description: 'Landing pages that convert like crazy.' }
	];

	let disclaimerText = `<span class="font-bold text-zinc-500">Transparency note: </span>The extent of cost reduction, time-to-market acceleration, SEO benefits, lead generation, enhanced customization, flexibility and other features may vary depending on the specific requirements, existing infrastructure, and operational strategies of each organization. While we strive to deliver consistent results, individual outcomes are not guaranteed in any way and are influenced by multiple factors.
                        For precise details, we recommend consulting with our sales and technical teams to understand how our solutions can specifically impact your business. None of the content, text, images or any other form of content here constitute a legally binding offer nor agreement, and the information provided is for illustrative purposes only. Creative Foundry Pte. Ltd. will not be held liable for any direct or indirect damages resulting from the use of this information. 
						All brand names, logos, and trademarks are the property of their respective owners.`;

	let selectedVariant;
	const urlVariant = parseInt(url.searchParams.get('v'));
	const cookieVariant = parseInt(cookies.get('cf_variant'));

	if (!isNaN(urlVariant)) {
		selectedVariant = variants.find(v => v.variant === urlVariant);
		// Override cookie if valid URL variant is found
		if (selectedVariant) {
			cookies.set('cf_variant', selectedVariant.variant, {
				httpOnly: true,
				sameSite: 'strict',
				path: '/'
			});
		}
	}

	if (!selectedVariant && !isNaN(cookieVariant)) {
		selectedVariant = variants.find(v => v.variant === cookieVariant);
	}

	if (!selectedVariant) {
		selectedVariant = variants[Math.floor(Math.random() * variants.length)];
		cookies.set('cf_variant', selectedVariant.variant, {
			httpOnly: true,
			sameSite: 'strict',
			path: '/'
		});
	}

	return {
		csrfToken,
		variant: selectedVariant.variant,
		title: selectedVariant.title,
		description: selectedVariant.description,
		disclaimerText: disclaimerText
	};
}
