<script>
    import Form from './booking/form.svelte'
    import DateTime from './booking/datetime.svelte'
    import Confirmation from './booking/confirmation.svelte'
    import Completion from './booking/completion.svelte'
    import { trackEvent } from "$lib/client/analytics/tracking.js";
    import { onMount } from 'svelte';
    /* ----------  CONFIG & STATE ---------- */
    const today = new Date();              // local "now"
    today.setHours(0, 0, 0, 0);           // normalise
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() + 1);

    let viewDate = $state(new Date(today));        // month user is looking at
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    let selected = $state(new Date(tomorrow));

    // FIX: Create a new Date object adjusted for the timezone offset.
    // This prevents toISOString() from rolling back to the previous day in timezones ahead of UTC.
    let selectedFormattedDate = $derived(selected ? new Date(selected.getTime() - (selected.getTimezoneOffset() * 60000)).toISOString().slice(0, 10) : "");

    /* ----------  BUTTON ---------- */
    let { 
        CTALabel = "Book A Call",
        CTAAction = "Book Now",
        _csrf
     } = $props();
    
    let disabled = $state(false); // Disable the button if needed
    
    /* ----------  FORM ---------- */
    let name = $state("");
    let email = $state("");
    let phone = $state("");
    let phoneCountryCode = $state("1");
    let website = $state("");
    let selectedTimeSlot = $state("");

    /* ----------  CSS ---------- */
    let defaultCSS = $state("")
    let defaultClasses = "cursor-pointer min-h-0 min-w-0 cta dark:shadow-none shadow-neutral-500 -mt-px relative bg-gradient-to-t from-blue-600 to-blue-700 text-white text-sm"
    let disabledClasses = "min-h-0 min-w-0 cta-disabled dark:shadow-none shadow-neutral-500 -mt-px relative bg-slate-400 dark:bg-slate-800 dark:text-slate-300 text-slate-100 text-xs"

    /* ----------  TABS ---------- */
    let tab = $state("day"); // "day" or "time"createDays

    $effect(() => {
        defaultCSS = `${disabled ? disabledClasses : defaultClasses} inline-flex items-center justify-center font-semibold`
    })

    let timeInAMPM = $derived(() => {
        if (!selectedTimeSlot) return '';

        const [hours, minutes] = selectedTimeSlot.trim().split(':');
        if (hours === undefined || minutes === undefined) return '';

        const hour24 = parseInt(hours, 10);
        if (isNaN(hour24)) return '';

        const minuteStr = minutes.padStart(2, '0');
        
        let hour12;
        if (hour24 === 0) {
            hour12 = 12; // midnight
        } else if (hour24 <= 12) {
            hour12 = hour24; // 1 AM - 12 PM
        } else {
            hour12 = hour24 - 12; // 1 PM - 11 PM
        }
        
        const ampm = hour24 >= 12 ? 'PM' : 'AM';
        
        // console.log(`Converting ${selectedTimeSlot} → ${hour12}:${minuteStr} ${ampm}`); // Debug
        
        return `${hour12}:${minuteStr} ${ampm}`;
    });


    let dateInWords = $derived(new Date(selectedFormattedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }));

    function handleSubmit(event) {
        event.preventDefault();
        if (selected) {
            // Handle form submission - you can dispatch an event or call a callback
            console.log('Selected date:', selected.toISOString().slice(0, 10));
            // Example: dispatch('dateSelected', { date: selected });
        }
    }

    function navigateTab() {
        if (tab === "day") {
            tab = "time"

            try {
                trackEvent({
                    category: 'GTM Funnel: Intent',
                    action: 'GTM Booking: Clicked CTA',
                    label: 'GTM Time Tab',
                    value: 10
                });
            } catch (e) {
                console.error("Error tracking:", e);
            }
        } else if (tab === "time") {
            tab = "form"

            try {
                trackEvent({
                    category: 'GTM Funnel: Intent',
                    action: 'GTM Booking: Clicked CTA',
                    label: 'GTM Form Tab',
                    value: 10
                });
            } catch (e) {
                console.error("Error tracking:", e);
            }
        } else if (tab === "form") {
            tab = "confirm"

            try {
                trackEvent({
                    category: 'GTM Funnel: Intent',
                    action: 'GTM Booking: Clicked CTA',
                    label: 'GTM Confirm Tab',
                    value: 20
                });
            } catch (e) {
                console.error("Error tracking:", e);
            }
        } else if (tab === "confirm") {
            tab = "done"

            try {
                trackEvent({
                    category: 'GTM Funnel: Intent',
                    action: 'GTM Booking: Clicked CTA',
                    label: 'GTM Completed',
                    value: 30
                });
            } catch (e) {
                console.error("Error tracking:", e);
            }
        }
    }
</script>
{#if tab === "day" || tab === "time"}
    <DateTime 
        bind:tab={tab}
        bind:selectedTimeSlot={selectedTimeSlot}
        {today}
        {maxDate}
        {viewDate}
        {selected}
        {navigateTab}
        {timeInAMPM}
        {dateInWords}
        {CTALabel}
        {CTAAction}
        {defaultCSS}
        {defaultClasses}
        {disabledClasses}
    />
{/if}

{#if tab === "form"}
    <Form 
        bind:tab={tab}
        bind:name={name}
        bind:email={email}
        bind:website={website}
        {_csrf}
        {selectedTimeSlot}
        {selectedFormattedDate}
        {timeInAMPM}
        {navigateTab}
        {dateInWords}
        {CTALabel}
        {CTAAction}
        {defaultCSS}
        {defaultClasses}
        {disabledClasses}
    />
{/if}

{#if tab === "confirm"}
    <Confirmation 
        bind:tab={tab}
        bind:phone={phone}
        bind:phoneCountryCode={phoneCountryCode}
        {_csrf}
        {name}
        {email}
        {website}
        {selectedFormattedDate}
        {selectedTimeSlot}
        {timeInAMPM}
        {navigateTab}
        {dateInWords}
        {CTALabel}
        {CTAAction}
        {defaultCSS}
        {defaultClasses}
        {disabledClasses}
    />
{/if}

{#if tab === "done"}
    <Completion
        disabled={false}
        bind:tab={tab}
        {_csrf}
        {phone}
        {phoneCountryCode}
        {name}
        {email}
        {website}
        {selectedFormattedDate}
        {selectedTimeSlot}
        {timeInAMPM}
        {navigateTab}
        {dateInWords}
        {CTALabel}
        {CTAAction}
        {defaultCSS}
        {defaultClasses}
        {disabledClasses}
    />
{/if}
