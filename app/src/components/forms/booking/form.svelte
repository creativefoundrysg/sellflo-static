<script>
    let {
        tab = $bindable("form"),
        name = $bindable(""),
        email = $bindable(""),
        website = $bindable(""),
        navigateTab = $bindable(() => {}),
        dateInWords,
        timeInAMPM,
        disabled = false,
        selectedFormattedDate,
        selectedTimeSlot,
        defaultClasses,
        disabledClasses
    } = $props();

    // Validation state
    let errors = $state({
        name: "",
        email: "",
        website: ""
    });

    let touched = $state({
        name: false,
        email: false,
        website: false
    });

    // Validation functions
    function validateName(value) {
        if (!value.trim()) {
            return "Name is required";
        }
        if (value.trim().length < 2) {
            return "Name must be at least 2 characters";
        }
        return "";
    }

    function validateEmail(value) {
        if (!value.trim()) {
            return "Email is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Please enter a valid email address";
        }
        return "";
    }

    function validateWebsite(value) {
        if (!value.trim()) {
            return "Website is required";
        }
        
        // Clean the input - remove common protocol prefixes and www
        let cleanUrl = value.trim().toLowerCase();
        
        // Remove protocols if present
        cleanUrl = cleanUrl.replace(/^https?:\/\//, '');
        cleanUrl = cleanUrl.replace(/^www\./, '');
        
        // Basic checks
        if (cleanUrl.length < 4) {
            return "Website URL seems too short";
        }
        
        // Must contain at least one dot
        if (!cleanUrl.includes('.')) {
            return "Please enter a valid domain (e.g., example.com)";
        }
        
        // Check for spaces (not allowed in URLs)
        if (cleanUrl.includes(' ')) {
            return "Website URL cannot contain spaces";
        }
        
        // Must have something before and after the dot
        const parts = cleanUrl.split('.');
        if (parts.length < 2 || parts.some(part => part.length === 0)) {
            return "Please enter a valid domain (e.g., example.com)";
        }
        
        // Try to validate as URL by adding https://
        try {
            new URL(`https://${cleanUrl}`);
            return "";
        } catch {
            return "Please enter a valid website URL";
        }
    }

    // Real-time validation
    $effect(() => {
        if (touched.name) {
            errors.name = validateName(name);
        }
    });

    $effect(() => {
        if (touched.email) {
            errors.email = validateEmail(email);
        }
    });

    $effect(() => {
        if (touched.website) {
            errors.website = validateWebsite(website);
        }
    });

    // Check if form is valid
    let isFormValid = $derived(name.trim() && email.trim() && website.trim() && 
                            !errors.name && !errors.email && !errors.website);

    function handleSubmit() {
        // Mark all fields as touched
        touched.name = true;
        touched.email = true;
        touched.website = true;

        // Validate all fields
        errors.name = validateName(name);
        errors.email = validateEmail(email);
        errors.website = validateWebsite(website);

        // Only proceed if form is valid
        if (isFormValid) {
            navigateTab();
        }
    }

    function handleBlur(field) {
        touched[field] = true;
    }
</script>

<div class="max-w-md select-none">
    <!-- Header: Month Navigation -->
    <div class="flex items-center text-gray-900">
        <!-- "Previous" -->
        <button type="button"
                onclick={() => tab = "time"}
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 cursor-pointer"
                aria-disabled="false">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0z"/>
            </svg>
            <span class="sr-only">Back</span>
        </button>

        <div class="w-full flex items-center justify-center gap-2 text-center text-sm font-semibold">
            <div class="flex items-center justify-center gap-1">
                <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
                </svg>
                {selectedFormattedDate}
            </div>

            <div class="flex items-center justify-center gap-1">
                <svg class="size-5 ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 6v6l4 2"/>
                    <circle cx="12" cy="12" r="10"/>
                </svg>
                {timeInAMPM()}
            </div>
        </div>

        <button type="button"
                class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-300 cursor-not-allowed"
                aria-disabled={true}>
            <span class="sr-only">Next step</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0z"/>
            </svg>
        </button>
    </div>

    <!-- Form Fields -->
    <div class="text-center text-gray-500 mt-4">
        <!-- Name Field -->
        <div class="mt-4">
            <label for="name" class="block text-left text-sm text-gray-600 font-bold w-full">Name:</label>
            <input 
                required 
                bind:value={name} 
                onblur={() => handleBlur('name')}
                id="name" 
                type="text" 
                name="name" 
                placeholder="Eg. John Doe"
                class="mt-0.5 placeholder:text-gray-400 block w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 {errors.name && touched.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
                aria-describedby={errors.name && touched.name ? "name-error" : undefined}
            />
            {#if errors.name && touched.name}
                <p id="name-error" class="mt-1 text-sm text-red-600 text-left">{errors.name}</p>
            {/if}
        </div>

        <!-- Email Field -->
        <div class="mt-4">
            <label for="email" class="block text-left text-sm text-gray-600 font-bold w-full">E-Mail:</label>
            <input 
                required 
                bind:value={email} 
                onblur={() => handleBlur('email')}
                id="email" 
                type="email" 
                name="email" 
                placeholder="you@example.com"
                class="mt-0.5 placeholder:text-gray-400 block w-full rounded-md border-gray-300 focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 {errors.email && touched.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
                aria-describedby={errors.email && touched.email ? "email-error" : undefined}
            />
            {#if errors.email && touched.email}
                <p id="email-error" class="mt-1 text-sm text-red-600 text-left">{errors.email}</p>
            {/if}
        </div>

        <!-- Website Field -->
        <div class="mt-4">
            <label for="website" class="block text-left text-sm text-gray-600 font-bold w-full">Website:</label>
            <div class="flex mt-0.5">
                <div class="flex shrink-0 items-center rounded-l-md bg-gray-50 px-3 py-2 text-sm/5 text-gray-500 border border-gray-300 select-none cursor-not-allowed">https://</div>
                <input 
                    required 
                    bind:value={website} 
                    onblur={() => handleBlur('website')}
                    id="website" 
                    type="text" 
                    name="website" 
                    placeholder="www.example.com"
                    class="-ml-px placeholder:text-gray-400 block w-full rounded-r-md border-y-gray-300 border-r-gray-300 border-l-transparent focus:border-rose-500 focus:ring-rose-500 sm:text-sm px-3 py-2 {errors.website && touched.website ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}"
                    aria-describedby={errors.website && touched.website ? "website-error" : undefined}
                />
            </div>
            {#if errors.website && touched.website}
                <p id="website-error" class="mt-1 text-sm text-red-600 text-left">{errors.website}</p>
            {/if}
        </div>

        <!-- Footer Action Button -->
        <div class="mt-8">
            <button 
                type="button"
                onclick={handleSubmit}
                disabled={!isFormValid}
                class="w-full rounded-md {defaultClasses} px-3 py-2 text-sm font-semibold text-white hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity">
                Proceed &rarr;
            </button>
        </div>
    </div>
</div>