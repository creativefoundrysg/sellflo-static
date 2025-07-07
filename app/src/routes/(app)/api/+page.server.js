import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
// @ts-ignore
export const actions = {
	form: async ({ cookies, request, url }) => {
		// // Send an email:
        var client = new postmark.ServerClient("222bab77-2fbb-492e-a95e-6c2cca25acaf")

        const data = await request.formData();

        const csrfToken = data.get('_csrf');

        // Retrieve the CSRF token from the cookie
        const cookieToken = cookies.get('csrfToken');

        // Validate the CSRF token
        if (!csrfToken || csrfToken !== cookieToken) {
            return fail(403, { message: 'Invalid CSRF token' });
        }

        // { name: 'fullName', value: 'Neya' },
        // { name: 'email', value: 'hello@rangesh.me' },
        // { name: 'website', value: 'www.google.com' },
        // { name: 'totalProducts', value: '0-50' },
        // { name: 'monthlyPageviews', value: '10001-50000' },
        // { name: 'employees', value: '11-50' }
        
        client.sendEmailWithTemplate({
            "From": "hello@creativefoundry.ai",
            "To": "hello@rangesh.me",
            "TemplateModel": {
                // @ts-ignore
                "name": data.get('fullName'),
                "leadType": data.get('leadType'),
                "email": data.get('email'),
                "website": data.get('website'),
                "totalPosts": data.get('totalPosts'),
                "totalProducts": data.get('totalProducts'),
                "monthlyPageviews": data.get('monthlyPageviews'),
                "employees": data.get('employees'),
                
                "notifications_url": "https://creativefoundry.ai",
            },
            "TemplateId": 37153345
        });
        
        // @ts-ignore
        redirect(303, "/thank-you");
	}
};