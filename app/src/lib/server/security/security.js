import { json } from '@sveltejs/kit';
import { randomBytes } from 'node:crypto';
import { PUBLIC_MODE } from '$env/static/public';

const ALLOWED_ORIGINS = new Set([
    'https://sellflo.ai',
    'https://www.sellflo.ai',
    'http://localhost:5173',
    'http://localhost:5174' // Add backup dev port
]);

/**
 * Validates origin/referer and extracts request context details.
 * @param {Request} request - SvelteKit server request object
 * @param {Object} options - Validation options
 * @returns {Object} { userAgent, ip, cloudflareIPGeo }
 */
export function validateRequest(request, options = {}) {
    const { 
        skipOriginCheck = false,
        allowNoReferer = false 
    } = options;

    if (!skipOriginCheck) {
        // 1. Origin header validation
        const originHeader = request.headers.get('origin');

        if (originHeader) {
            let originValue;
            try {
                originValue = new URL(originHeader).origin;
            } catch {
                throw json({ error: 'Invalid origin header' }, { status: 403 });
            }
            
            if (!ALLOWED_ORIGINS.has(originValue)) {
                console.warn(`Blocked request from origin: ${originValue}`);
                throw json({ error: 'Origin not allowed' }, { status: 403 });
            }
        } else {
            // 2. Fallback: Referer validation
            const referer = request.headers.get('referer');
            
            if (!referer) {
                if (!allowNoReferer) {
                    console.warn('Blocked request: No origin or referer header');
                    throw json({ error: 'Missing origin/referer' }, { status: 403 });
                }
            } else {
                let refererOrigin;
                try {
                    refererOrigin = new URL(referer).origin;
                } catch {
                    throw json({ error: 'Invalid referer header' }, { status: 403 });
                }
                
                if (!ALLOWED_ORIGINS.has(refererOrigin)) {
                    console.warn(`Blocked request from referer: ${refererOrigin}`);
                    throw json({ error: 'Referer not allowed' }, { status: 403 });
                }
            }
        }
    }

    // 3. Extract request context
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const cloudflareIPGeo = request.headers.get('cf-ipcountry') || 
                           request.headers.get('CF-IPCountry') || 'unknown';

    // 4. Extract IP with better fallback logic
    let ip = 'unknown';
    const xff = request.headers.get('x-forwarded-for');
    const cfConnectingIP = request.headers.get('cf-connecting-ip');
    const realIP = request.headers.get('x-real-ip');
    
    if (cfConnectingIP) {
        ip = cfConnectingIP; // Cloudflare's real IP
    } else if (xff) {
        ip = xff.split(',')[0].trim(); // First IP in forwarded chain
    } else if (realIP) {
        ip = realIP;
    } else if (request.socket?.remoteAddress) {
        ip = request.socket.remoteAddress;
    }

    return { userAgent, ip, cloudflareIPGeo };
}

/**
 * Validates CSRF token from form submission against cookie
 * @param {Object} cookies - SvelteKit cookies object
 * @param {FormData|Object} data - FormData or JSON data containing _csrf field
 * @throws {Response} Throws 403 JSON response if validation fails
 */
export function validateFormCSRF(cookies, data) {
    // console.log("Form data received:", Object.fromEntries(data.entries()));
    
    // Use .get() method for FormData objects
    const csrfToken = data.get('_csrf');
    const cookieToken = cookies.get('csrfToken');
    
    if (!csrfToken || csrfToken !== cookieToken) {
        console.warn('CSRF token validation failed');
        throw json({ error: 'CSRF token mismatch' }, { status: 403 });
    }
}

/** Validates CSRF token from JSON submission against cookie
 * @param {Object} cookies - SvelteKit cookies object
 * @param {Object} data - JSON data containing _csrf field
 * @throws {Response} Throws 403 JSON response if validation fails
 */
export function validateJSONCSRF(cookies, data) {
    // Use direct property access for JSON objects
    const csrfToken = data._csrf;
    const cookieToken = cookies.get('csrfToken');
    
    if (!csrfToken || csrfToken !== cookieToken) {
        console.warn('CSRF token validation failed');
        throw json({ error: 'CSRF token mismatch' }, { status: 403 });
    }
}

/**
 * Combined validation for common API endpoints
 */
export function validateAPIRequest(request, cookies, data, options = {}) {
    const context = validateRequest(request, options);
    if (options.json && options.json === true) {
        validateJSONCSRF(cookies, data);
    } else {
        validateFormCSRF(cookies, data);
    }
    return context;
}

/**
 * Generates a CSRF token and sets it in cookies
 */
export function generateCSRFToken(cookies) {  // Remove unused url parameter
    // Only generate new CSRF token if one doesn't exist
    // console.log("Generating CSRF token...");
    let csrfToken = cookies.get('csrfToken');
    // console.log("CSRF token doesn't exist");
    if (!csrfToken) {
        // console.log("Setting new CSRF token");
        csrfToken = randomBytes(32).toString('hex');
        
        // Set CSRF token with proper security flags
        cookies.set('csrfToken', csrfToken, {
            httpOnly: true,
            // change this in dev mode
            secure: PUBLIC_MODE !== 'test', // Only require HTTPS in production
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 2    // 2 hours expiration
        });
    }
    
    return csrfToken;  // Add this return statement
}