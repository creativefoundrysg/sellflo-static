<script>
    import axios from 'axios';
    let {
        tab = $bindable(""),
        name,
        time,
        email,
        website,
        phone = $bindable(""),
        phoneCountryCode = $bindable("65"),
        _csrf,
        navigateTab = $bindable(() => {}),
        CTALabel = "Confirm",
        CTAAction,
        disabled = false,
        dateInWords,
        timeInAMPM = () => {},
        selectedTimeSlot,
        selectedFormattedDate,
        sourceTimeZone,
        defaultClasses,
        disabledClasses
    } = $props();

    let submitting = $state(false);

    // Validation state
    let errors = $state({
        phone: ""
    });

    let touched = $state({
        phone: false
    });

    // Validation function
    function validatePhone(value) {
        if (!value.trim()) {
            return "Phone number is required";
        }
        // Remove any non-digit characters for validation
        const digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length < 6) {
            return "Phone number must be at least 6 digits";
        }
        return "";
    }

    // Real-time validation
    $effect(() => {
        if (touched.phone) {
            errors.phone = validatePhone(phone);
        }
    });

    // Check if form is valid
    let isFormValid = $derived(phone.trim() && !errors.phone);

    let countryCodes = [
        { code: "1", label: "+1 USA" },
        { code: "31", label: "+31 Netherlands" },
        { code: "32", label: "+32 Belgium" },
        { code: "33", label: "+33 France" },
        { code: "34", label: "+34 Spain" },
        { code: "36", label: "+36 Hungary" },
        { code: "39", label: "+39 Italy" },
        { code: "41", label: "+41 Switzerland" },
        { code: "44", label: "+44 UK" },
        { code: "48", label: "+48 Poland" },
        { code: "49", label: "+49 Germany" },
        { code: "55", label: "+55 Brazil" },
        { code: "60", label: "+60 Malaysia" },
        { code: "61", label: "+61 Australia" },
        { code: "62", label: "+62 Indonesia" },
        { code: "63", label: "+63 Philippines" },
        { code: "65", label: "+65 Singapore" },
        { code: "66", label: "+66 Thailand" },
        { code: "81", label: "+81 Japan" },
        { code: "82", label: "+82 South Korea" },
        { code: "86", label: "+86 China" },
        { code: "91", label: "+91 India" },
        { code: "351", label: "+351 Portugal" },
        { code: "420", label: "+420 Czech Republic" }
    ];

    function submitForm() {
        submitting = true;
        
        // Mark phone field as touched
        touched.phone = true;
        
        // Validate phone field
        errors.phone = validatePhone(phone);
        
        // Basic validation
        if (!name || !email || !website || !phone) {
            alert("Please fill in all fields.");
            submitting = false;
            return;
        }

        // Check if form is valid
        if (!isFormValid) {
            alert("Please fix the validation errors.");
            submitting = false;
            return;
        }

        axios.post('/api/booking', {
            _csrf,
            name,
            email,
            website,
            phone,
            phoneCountryCode,
            date: selectedFormattedDate,
            time: timeInAMPM(),
            sourceTimeZone,
            timeSlot: selectedTimeSlot
        }).then(response => {
            submitting = false;
            console.log(response)

            if (response.data.success) {
                // Track event
                // trackEvent({
                //     category: 'Booking',
                //     action: 'Submit',
                //     label: 'Booking Confirmation',
                //     value: 1
                // });

                // Navigate to the next tab
                navigateTab();
            } else {
                alert("There was an error processing your booking. Please try again.");
            }
        }).catch(error => {
            submitting = false;
            console.error("Error submitting form:", error);
            alert("There was an error processing your booking. Please try again.");
        });
    }

    function handleBlur(field) {
        touched[field] = true;
    }
</script>

<div class="max-w-md select-none">
    <!-- Header: Month Navigation -->
    <div class="flex items-center text-gray-900">
        <!-- "Previous" stays disabled forever -->
        <button type="button"
                onclick={() => tab = "form"}
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 cursor-pointer"
                aria-disabled="false">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0z"/>
            </svg>
            <span class="sr-only">Back</span>
        </button>

        <div class="w-full flex items-center justify-center gap-2 text-center text-sm font-semibold">
            <p class="text-black text-sm font-bold">Confirmation</p>
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
            <h2 class="text-black text-center font-bold text-lg flex items-center justify-center gap-2">
                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
                </svg>
                Please confirm your booking:
            </h2>
            <p class="mt-4 text-sm text-gray-600">
                <span class="font-bold">Date:</span> {dateInWords}
            </p>
            <p class="mt-2 text-sm text-gray-600">
                <span class="font-bold">Time:</span> 
                {timeInAMPM()} {sourceTimeZone}
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
                <span class="font-bold">website:</span> 
                {website}
            </p>
        </div>
        
        <div class="mt-4">
            <label for="phone" class="font-bold block text-left text-sm text-gray-600 w-full">Please enter your phone number to confirm:</label>
            <div class="flex flex-row gap-2 mt-1">
                <select bind:value={phoneCountryCode} id="country-code" name="country-code" class="mt-0.5 block w-1/3 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2">
                    {#each countryCodes as { code, label }}
                        <option value={code} label={`+${code}`}>{label}</option>
                    {/each}
                </select>
                <input 
                    required 
                    bind:value={phone} 
                    onblur={() => handleBlur('phone')}
                    id="phone" 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone number"
                    class="mt-0.5 placeholder:text-gray-400 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 {errors.phone && touched.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
                    aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                />
            </div>
            {#if errors.phone && touched.phone}
                <p id="phone-error" class="mt-1 text-sm text-red-600 text-left">{errors.phone}</p>
            {/if}
        </div>
        <!-- Footer Action Button -->
        <div class="mt-8">
            <button type="button"
                    onclick={submitForm}
                    disabled={disabled || submitting || !isFormValid}
                    class="w-full rounded-md {defaultClasses} px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-opacity">
                    {#if submitting}
                        <svg class="animate-spin size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                    {:else}
                        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5"/>
                        </svg>
                    {/if}
                    {submitting ? 'Confirming...' : (tab === "confirm" ? "Confirm" : CTAAction)}
            </button>
        </div>
    </div>
</div>