// @ts-nocheck
// import crypto from 'crypto';
import {randomBytes} from 'node:crypto';
import { generateCSRFToken } from '$lib/server/security/security';
import { setTrackingCookie } from '$lib/client/analytics/tracking';

export async function load({ cookies, url }) {
	// Generate a CSRF token and set it in a secure, httpOnly cookie
	const csrfToken = generateCSRFToken(cookies);
	// Check for a 't' query parameter and set it as a cookie if present
	setTrackingCookie(cookies, url);
	console.log("CSRF Token generated and set in cookies:", csrfToken);

	return {
		csrfToken: csrfToken,
		test: "hi"
	}
}