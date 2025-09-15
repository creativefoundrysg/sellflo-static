import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';
import { 
    POSTMARK_SERVER_API_KEY, 
    POSTMARK_FROM_CF_EMAIL,
    POSTMARK_TO_CF_EMAIL
 } from '$env/static/private'
import { validateAPIRequest } from '$lib/server/security/security';

// @ts-ignore
export const actions = {
    submit: async ({ cookies, request, url }) => {

        const data = await request.formData();
    
        // Use secure cookie-based CSRF token validation
        const { userAgent, ip, cloudflareIPGeo } = validateAPIRequest(request, cookies, data);

        // // Send an email:
        var client = new postmark.ServerClient(POSTMARK_SERVER_API_KEY)

        await client.sendEmailWithTemplate({
            "From": POSTMARK_FROM_CF_EMAIL,
            "To": POSTMARK_TO_CF_EMAIL,
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