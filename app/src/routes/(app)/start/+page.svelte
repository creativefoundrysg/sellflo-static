<script>
    import { onMount } from "svelte";
    import Header from "$components/header/standard.svelte";
    import BookingForm from "$components/forms/booking.svelte";
    import { trackEvent } from "$lib/client/analytics/tracking.js";
    
    let { data } = $props();
    let countdown = $state(5);
    let countdownInterval;

    onMount(() => {
        trackEvent({
            category: 'GTM Funnel: GTM Booking Page',
            action: 'GTM Load: GTM Audit',
            label: 'GTM Download GTM Audit',
            value: 50
        })
    });
</script>
<Header />
<div class="bg-white min-h-[90vh]">
    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid md:grid-cols-6 gap-12">
            <div class="mt-2 col-span-4">
                <h1 class="font-display text-3xl font-bold text-neutral-800 lg:leading-tight">
                    We're in closed Beta.
                </h1>
                <p class="text-neutral-600 mt-2">
                    Thank you for your interest. We're currently in a closed beta phase to ensure the best experience for our users.
                </p>
                <div class="flex items-center justify-center mt-8">
                    <img class="rounded-lg max-w-xs h-auto" 
                        src="/pivot.webp" 
                        alt="AI GTM Co-Pilot"/>
                </div>

                <p class="mt-6 font-text my-4 text-neutral-600 leading-loose">
                    Join us to get your GTM audit. Early bird customers get lifetime 20% off.
                    <span class="font-bold">Don't miss out this window</span> and start your GTM journey today by booking a discovery call. Limited slots available.
                </p>
            </div>
            <!-- End Col -->
            <div class="col-span-6 md:col-span-2">
                <div class="mt-4">
                    <h2 class="text-2xl font-bold mb-4 font-display text-center">Complimentary GTM Session</h2>
                    <p class="text-neutral-500 mb-6">
                        Take the first step. Book your <span class="text-neutral-700 font-bold">free 30 minute</span> discovery session to make the most of your GTM journey.
                        First come first served basis. <span class="underline">Limited slots available.</span>
                    </p>
                    <BookingForm _csrf={data.csrfToken}/>
                </div>
            </div>
            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
</div>