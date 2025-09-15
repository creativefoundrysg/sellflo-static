export async function trackEvent(eventObj) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'trackEvent',
            eventCategory: eventObj.category,
            eventAction: eventObj.action,
            eventLabel: eventObj.label,
            eventValue: eventObj.value
        });
    }
}

export  function setTrackingCookie(cookies, url) {
    // Handle tracking parameter
    const t = url.searchParams.get('t');
    if (t && t.length > 0) {
        // Validate tracking parameter (basic sanitization)
        const sanitizedT = t.replace(/[^a-zA-Z0-9-_]/g, '');
        
        if (sanitizedT.length > 0) {
            cookies.set('cf_prospect_uid', sanitizedT, {
                httpOnly: true,
                secure: !dev,
                sameSite: 'strict',
                path: '/',
                maxAge: 60 * 60 * 24 * 30  // 30 days for tracking
            });
        }
    }
}
