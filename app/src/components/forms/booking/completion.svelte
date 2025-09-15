<script>
    import axios from 'axios';
    import { trackEvent } from "$lib/client/analytics/tracking.js";
    let {
        tab = $bindable("done"),
        name,
        email,
        website,
        phone,
        time,
        timeInAMPM = () => {},
        phoneCountryCode,
        navigateTab = $bindable(() => {}),
        disabled = false,
        selectedTimeSlot,
        selectedFormattedDate,
        defaultClasses,
        disabledClasses
    } = $props();
    
    async function download() {
        try {
            trackEvent({
                category: 'GTM Funnel: Intent',
                action: 'GTM Booking: Download Invite',
                label: 'GTM Booking Completed',
                value: 40
            });
        } catch (e) {
            console.error("Error tracking:", e);
        }

        try {
            const res = await axios.post('/api/booking/download', {
                name,
                email,
                website,
                phone,
                phoneCountryCode,
                time: selectedTimeSlot,
                date: selectedFormattedDate,
            }, {
                responseType: 'blob'
            });

            // Create blob with correct MIME type
            const blob = new Blob([res.data], { type: 'text/calendar; charset=utf-8' });
            const url = window.URL.createObjectURL(blob);

            // Sanitize filename - remove invalid characters
            const safeDate = selectedFormattedDate.replace(/[^a-zA-Z0-9-]/g, '-');
            const safeTime = selectedTimeSlot.replace(/:/g, '');
            
            // Create download link
            const a = document.createElement('a');
            a.href = url;
            a.download = `discovery-call.ics`;
            a.style.display = 'none'; // Hide the element
            
            document.body.appendChild(a);
            a.click();

            // Immediate cleanup
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
        } catch (error) {
            console.error('Download failed:', error);
            
            // More specific error messages
            if (error.response?.status === 404) {
                alert('Download service not available. Please contact support.');
            } else if (error.response?.status >= 500) {
                alert('Server error. Please try again later.');
            } else {
                alert('Failed to download calendar invite. Please try again.');
            }
        }
    }
</script>
<div class="max-w-md select-none">
    <!-- Header: Month Navigation -->
    <div class="flex items-center text-gray-900">
        <!-- "Previous" stays disabled forever -->
        <button type="button"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-300 hover:text-gray-400 cursor-not-allowed"
                aria-disabled="true">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0z"/>
            </svg>
            <span class="sr-only">Back</span>
        </button>

        <div class="w-full flex items-center justify-center gap-2 text-center text-sm font-semibold">
            <p class="text-black text-sm font-bold">Booking Complete</p>
        </div>

        <button type="button"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5
                    {'text-gray-300 cursor-not-allowed'}"
                aria-disabled={true}>
            <span class="sr-only">Next step</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0z"/>
            </svg>
        </button>
    </div>
    <!-- Placeholder for time selection -->
    <div class=" text-gray-500 mt-4">
        <div class="mt-4">
            <h2 class="text-black text-center font-bold text-lg flex flex-row items-center justify-center gap-2">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                </svg>
                You're all set!
            </h2>
            <p class="mt-4 text-sm text-gray-600">
                <span class="font-bold">Date:</span> {selectedFormattedDate}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">Time:</span> 
                {timeInAMPM()}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">Name:</span> 
                {name}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">Email:</span> 
                {email}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">Phone:</span> 
                +{phoneCountryCode} {phone}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">website:</span> 
                {website}
            </p>
            <p class="mt-4 text-sm text-gray-600 flex flex-row items-center justify-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                </svg>
                You will receive a confirmation email shortly.
            </p>
        </div>
        <!-- Footer Action Button -->
        <div class="mt-8">
            <button type="button"
                    onclick={download}
                    disabled={disabled}
                    class="w-full rounded-md {defaultClasses} px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-row items-center justify-center gap-2">
                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 15V3"/>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <path d="m7 10 5 5 5-5"/>
                    </svg>
                Download Invite
            </button>
        </div>
    </div>
</div>