<script>
    import { trackEvent } from "$lib/client/analytics/tracking.js";

    let {
        tab = $bindable("day"),
        selectedTimeSlot = $bindable(""),
        today,
        maxDate,
        viewDate,
        selected = $bindable(null),
        navigateTab = $bindable(() => {}),
        dateInWords,
        timeInAMPM,
        CTALabel = "Next",
        defaultCSS = "",
        defaultClasses,
        disabledClasses,

        // NEW: availability controls
        availableDaysOfWeek = $bindable([1,2,3,4,5]),   // allow Mon–Fri by default
        availableTimeSlots = $bindable([])
    } = $props()

    /* ----------  HELPERS ---------- */
    function sameDay(a, b) {
        return a?.getFullYear() === b?.getFullYear()
            && a?.getMonth()   === b?.getMonth()
            && a?.getDate()    === b?.getDate();
    }

    /* ----------  DERIVED VALUES ---------- */
    const monthLabel = $derived(viewDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
    const atEnd = $derived(viewDate.getFullYear() === maxDate.getFullYear() && viewDate.getMonth() === maxDate.getMonth());

    // Calendar matrix (length = 35 or 42)
    const days = $derived(createDays(viewDate));

    // Disable the CTA on Time tab if no time chosen or no slots available for policy
    let disabled = $derived(tab === "time" && (!selectedTimeSlot || availableTimeSlots.length === 0));

    function createDays(ref) {
        const y = ref.getFullYear(), m = ref.getMonth();
        const first   = new Date(y, m, 1);
        const offset  = (first.getDay() + 6) % 7;            // Monday-based index for grid alignment
        const daysInM = new Date(y, m + 1, 0).getDate();
        const daysInP = new Date(y, m,     0).getDate();
        const out = [];

        // previous-month fillers
        for (let i = offset - 1; i >= 0; i--) {
            out.push(makeDay(new Date(y, m - 1, daysInP - i), false));
        }

        // this month
        for (let d = 1; d <= daysInM; d++) {
            out.push(makeDay(new Date(y, m, d), true));
        }

        // next-month fillers
        let next = 1;
        while (out.length % 7 !== 0) {
            out.push(makeDay(new Date(y, m + 1, next++), false));
        }
        return out;
    }

    function makeDay(d, inMonth) {
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        // NEW: weekend/weekday (or any custom) blackout via availableDaysOfWeek
        const weekday = d.getDay(); // 0=Sun..6=Sat
        const allowedByWeek = availableDaysOfWeek.includes(weekday);

        const isDisabledBase = d < tomorrow;
        const disabled = isDisabledBase || !allowedByWeek;

        return {
            date: d,
            inMonth,
            isToday: sameDay(d, today),
            disabled
        };
    }

    function navNext() {
        if (atEnd) return;
        viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

        try {
            trackEvent({
                category: 'GTM Funnel: Intent',
                action: 'GTM Booking: Navigate Next Month',
                label: 'GTM Date Selector',
                value: 10
            });
        } catch (e) {
            console.error("Error tracking:", e);
        }
    }

    function choose(day) {
        if (day.disabled) return;
        selected = day.date;

        // When the user picks a day, clear any previous time that may no longer apply
        selectedTimeSlot = "";

        try {
            trackEvent({
                category: 'GTM Funnel: Intent',
                action: 'GTM Booking: Select Date',
                label: 'GTM Date Selector',
                value: 20
            });
        } catch (e) {
            console.error("Error tracking:", e);
        }
    }
</script>

<!-- Main Component Container -->
<div class="max-w-md select-none">
    <!-- Header: Month Navigation -->
    <div class="flex items-center text-gray-900">
        <!-- "Previous" stays disabled forever -->
        <button type="button"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-300 cursor-not-allowed"
                aria-disabled="true">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0z"/>
            </svg>
            <span class="sr-only">Previous month</span>
        </button>

        <div class="flex-auto text-center text-sm font-semibold">
            {monthLabel}
        </div>

        <button type="button"
                onclick={navNext}
                class="-m-1.5 flex flex-none items-center justify-center p-1.5
                    {atEnd ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400 hover:text-gray-500'}"
                aria-disabled={atEnd}>
            <span class="sr-only">Next month</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0z"/>
            </svg>
        </button>
    </div>

    <!-- Weekday Headers -->
    <div class="mt-6 grid grid-cols-7 text-center text-xs text-gray-500">
        <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
    </div>
</div>

<!-- Days Grid -->
<div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow-sm ring-1 ring-gray-200">
    {#each days as day}
        {#if sameDay(day.date, selected)}
            <!-- selected state -->
            <button type="button"
                    data-value={day.date.toISOString().slice(0,10)}
                    class="{day.inMonth ? 'bg-white' : 'bg-gray-50'} py-2 font-semibold text-white focus:z-10"
                    onclick={() => choose(day)}>
                <span class="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    {day.date.getDate()}
                </span>
            </button>
        {:else}
            <button type="button"
                    disabled={day.disabled}
                    data-value={day.date.toISOString().slice(0,10)}
                    onclick={() => choose(day)}
                    class="{day.inMonth
                    ? (day.disabled ? 'text-gray-300' : day.isToday ? 'font-semibold text-blue-600' : 'text-gray-900')
                    : 'text-gray-400'}
                    {day.inMonth ? 'bg-white' : 'bg-gray-50'}
                    py-2 hover:bg-gray-100 focus:z-10">
                <span class="mx-auto flex h-7 w-7 items-center justify-center">
                    {day.date.getDate()}
                </span>
            </button>
        {/if}
    {/each}
</div>

<!-- hidden field carrying the choice -->
<input type="hidden" name="date"
    value={selected ? selected.toISOString().slice(0,10) : ''}/>

{#if tab === "time"}
    <!-- Time selection -->
    <div class="text-center text-gray-500 mt-4">
        <label for="time" class="block text-left text-sm text-gray-600 font-bold w-full">Choose a time:</label>
        <div class="max-w-md mt-0.5">
            <select bind:value={selectedTimeSlot} id="time-select" name="time" class="mt-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="">Select a time</option>
                {#each availableTimeSlots as t}
                    <option value={t}>{t} Eastern Time</option>
                {/each}
            </select>
        </div>
        {#if availableTimeSlots.length === 0}
            <p class="mt-2 text-xs text-red-500">No time slots available.</p>
        {/if}
    </div>
{/if}

<!-- Footer Action Button -->
<div class="mt-8">
    <button type="button"
            onclick={navigateTab}
            disabled={disabled}
            class="w-full rounded-md {defaultClasses} px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
        {CTALabel}
    </button>
</div>
