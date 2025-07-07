import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
// @ts-ignore
export const actions = {
	form: async ({ cookies, request, url }) => {
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
        
        client.sendEmailWithTemplate({
            "From": "hello@sellflo.ai",
            "To": "hello@rangesh.me",
            "TemplateModel": {
                // @ts-ignore
                "email": data.get('email'),
                
                "notifications_url": "https://sellflo.ai",
            },
            "TemplateId": 40677198
        });
        
        // @ts-ignore
        redirect(303, "/thank-you");
	}
};