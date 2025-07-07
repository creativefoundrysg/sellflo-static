import {randomBytes} from 'node:crypto';

export async function load({ cookies }) {
	// @ts-ignore
    const csrfToken = randomBytes(32).toString('hex');
    cookies.set('csrfToken', csrfToken, { httpOnly: true, sameSite: 'strict', path: '/' });

	return {
		csrfToken: csrfToken
	}
}