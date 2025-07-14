// @ts-nocheck
// import crypto from 'crypto';
import {randomBytes} from 'node:crypto';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies, url }) {
	// @ts-ignore
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

	return {
		csrfToken: csrfToken,
	}
}