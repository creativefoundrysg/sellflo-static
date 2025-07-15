import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';

// @ts-ignore
export const actions = {
	form: async ({ cookies, request, url }) => {

        // 1. Define the origins you actually trust
        const ALLOWED_ORIGINS = new Set([
            'https://sellflo.ai', 
            'https://www.sellflo.ai',
            'http://localhost:5173'          // your dev server, adjust port as needed
        ]);
    
        // 2. Pull the raw header
        const originHeader = request.headers.get('origin');
    
        // 3. If there _is_ an Origin header, parse & compare
        if (originHeader) {
            let originValue;
            try {
            // this normalizes things like trailing slashes, etc.
            originValue = new URL(originHeader).origin;
            } catch {
            return fail(403, { message: 'Unauthorized' });
            }
    
            if (!ALLOWED_ORIGINS.has(originValue)) {
            return fail(403, { message: 'Unauthorized' });
            }
        } else {
            // resort to checking the referer header
            const referer = request.headers.get('referer') || undefined;
            let domain

            if (referer) {
                try {
                const { hostname } = new URL(referer);
                domain = hostname;   // e.g. "example.com"
                } catch (err) {
                // invalid URL in header
                domain = null;
                }
            }
        
            // now you can compare refererDomain to whatever you expect
            if (!ALLOWED_ORIGINS.has(domain)) {
                return fail(403, { message: 'Unauthorized' });
            }
        }

        // pull the User-Agent
        const userAgent = request.headers.get('user-agent') || 'unknown';
        console.log('User-Agent:', userAgent);

        // pull the Cloudflare IP Geo header
        const cloudflareIPGeo = request.headers.get('cf-ipcountry') || request.headers.get('CF-IPCountry') || 'unknown';
        console.log('Cloudflare IP Geo:', cloudflareIPGeo);

        // get IP:
        const xff = request.headers.get('x-forwarded-for');
        let ip;
        if (xff) {
            // if behind a proxy, x-forwarded-for may be a comma-list of IPs
            ip = xff.split(',')[0].trim();
        } else if (request.socket?.remoteAddress) {
            // Node adapter makes the raw socket available
            ip = request.socket.remoteAddress;
        } else {
            ip = 'unknown';
        }

		// // Send an email:
        var client = new postmark.ServerClient("262d76b4-d7f3-4c78-a690-4511adc9a872")

        const data = await request.formData();

        const csrfToken = data.get('_csrf');

        // Retrieve the CSRF token from the cookie
        const cookieToken = cookies.get('csrfToken');

        // Validate the CSRF token
        if (!csrfToken || csrfToken !== cookieToken) {
            return fail(403, { message: 'Invalid CSRF token' });
        }
        
        await client.sendEmailWithTemplate({
            "From": "hello@sellflo.ai",
            "To": "hello@rangesh.me",
            "TemplateModel": {
                // @ts-ignore
                "email": data.get('email'),
                "userAgent": userAgent,
                "ip": ip,
                "geoFromIP": cloudflareIPGeo,
                
                "notifications_url": "https://sellflo.ai",
            },
            "TemplateId": 40677198
        });
        
        // @ts-ignore
        redirect(303, "/thank-you");
	}
};