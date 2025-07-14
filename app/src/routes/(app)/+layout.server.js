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
		{ variant: 1, title: 'High-Performance Landing Pages.', description: 'Instant. Powered By AI.' },
		{ variant: 2, title: 'Fire Your Agency. Let AI Build Your Next Landing Page.', description: 'Generate a Landing Page before your coffee\'s ready.' },
		{ variant: 3, title: 'Fire Your Agency. Let AI Build Your Next Landing Page.', description: 'Faster than your best dev — and it doesn\'t ask for coffee breaks.' },
		{ variant: 4, title: 'Your Next Landing Page Writes Itself.', description: 'Just one prompt. Fully built, optimized, and deployed.' },
		{ variant: 5, title: 'Prompt to Landing Page in under 20 seconds.', description: 'No code. No delays. Just instant landing pages that convert.' },
		{ variant: 6, title: 'The End of No-Code Builders.', description: 'Why drag blocks when you can just prompt it?' },
		{ variant: 7, title: 'Prompt to Landing Page in under 20 seconds.', description: 'No code. No delays. Just instant landing pages that convert.' },
		{ variant: 8, title: 'Turn Your Product into a Page. Instantly.', description: 'No code, no fluff — just a page that converts.' },
		{ variant: 9, title: 'Less Clicks. More Conversions.', description: 'SellFlo pages are optimized from the first word.' }
	];

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
		description: selectedVariant.description
	};
}
