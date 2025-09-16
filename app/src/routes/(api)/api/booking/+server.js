import { json } from '@sveltejs/kit';
import postmark from "postmark"
import { fail, redirect } from '@sveltejs/kit';
import { 
    POSTMARK_SERVER_API_KEY, 
    POSTMARK_FROM_CF_EMAIL,
    POSTMARK_TO_CF_EMAIL
} from '$env/static/private'
import { validateAPIRequest } from '$lib/server/security/security';

/**
 * Returns current time in Singapore Time (SGT)
 * @param {string} format - 'iso' or 'readable'
 * @returns {string} Current SGT time
 */
function getCurrentSGT(format = 'iso') {
    const now = new Date();
    
    if (format === 'readable') {
        // Get SGT date and time components
        const sgtDate = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
        
        const month = String(sgtDate.getMonth() + 1).padStart(2, '0');
        const day = String(sgtDate.getDate()).padStart(2, '0');
        const year = sgtDate.getFullYear();
        
        const time = sgtDate.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Singapore',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        
        return `${month}-${day}-${year}, ${time}`;
    }
    
    // ISO format with SGT offset
    const sgtTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
    return sgtTime.toISOString().replace('Z', '+08:00');
}

export async function POST({ request, cookies, url }) {

    const data = await request.json();
    
    // Use secure cookie-based CSRF token validation
    const { userAgent, ip, cloudflareIPGeo } = validateAPIRequest(request, cookies, data, { json: true });

    // // Send an email:
    var client = new postmark.ServerClient(POSTMARK_SERVER_API_KEY)

    await client.sendEmailWithTemplate({
        "From": POSTMARK_FROM_CF_EMAIL,
        "To": POSTMARK_TO_CF_EMAIL,
        "TemplateModel": {
            // @ts-ignore
            "name": data.name,
            "email": data.email,
            "website": data.website,
            "phoneCountryCode": data.phoneCountryCode,
            "phone": data.phone,
            "userAgent": userAgent,
            "ip": ip,
            "geoFromIP": cloudflareIPGeo,
            "date": data.date,
            "timeSlot": data.timeSlot,
            "time": `${data.time} ${data.sourceTimeZone}`,
            "timestamp": getCurrentSGT('readable'),
            "notifications_url": "https://sellflo.ai",
        },
        "TemplateId": 41489299
    });

    await client.sendEmailWithTemplate({
        "From": POSTMARK_FROM_CF_EMAIL,
        "To": data.email,
        "TemplateModel": {
            // @ts-ignore
            "name": data.name,
            "email": data.email,
            "website": data.website,
            "phoneCountryCode": data.phoneCountryCode,
            "phone": data.phone,
            "userAgent": userAgent,
            "ip": ip,
            "geoFromIP": cloudflareIPGeo,
            "date": data.date,
            "timeSlot": data.timeSlot,
            "time": `${data.time} ${data.sourceTimeZone}`,
            "timestamp": getCurrentSGT('readable'),
            "notifications_url": "https://sellflo.ai",
        },
        "TemplateId": 41489289
    });

    let response = { success: 'booking_complete' }

    let headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    }

    return json(response, headers)
};