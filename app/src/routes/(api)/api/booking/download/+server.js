import { json } from '@sveltejs/kit';
import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';
import { 
    POSTMARK_SERVER_API_KEY, 
    POSTMARK_FROM_CF_EMAIL,
    POSTMARK_TO_CF_EMAIL
} from '$env/static/private'
import { createICSFile } from '$lib/server/ics';
import { validateAPIRequest } from '$lib/server/security/security';

export async function POST({ request, cookies, url }) {

    const data = await request.json();
    
    // Use secure cookie-based CSRF token validation
    const { userAgent, ip, cloudflareIPGeo } = validateAPIRequest(request, cookies, data, { json: true });

    const icsContent = createICSFile(
        'America/New_York',
        data.date,
        data.time,
        30, // or 60, as needed for duration in minutes
        `SellFlo.ai Booking Demo <> ${data.name}`,
        'Please join the call at the schedule time. If you did not request this booking, please let us know.',
        'Online Meeting',
        [
            { name: data.name, email: data.email },
            { name: 'Creative Foundry', email: POSTMARK_FROM_CF_EMAIL }
        ]
    );

    const filename = `calendar-invite.ics`;

    let headers = {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store'
    }

    return new Response(icsContent, headers)
};