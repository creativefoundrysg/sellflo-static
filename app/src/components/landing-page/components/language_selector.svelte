<script>
    import { onMount } from 'svelte';
    import EmailForm from '$components/forms/email.svelte';
    import { trackEvent } from "$lib/client/analytics/tracking.js";
    let { data } = $props();
    let showLanguageDropdown = $state(false);
    let currentLanguage = $state('en');

    function z(c, a, l, v, callback) {
        try {
            trackEvent({
                category: c,
                action: a,
                label: l,
                value: v
            });
            // Execute callback after tracking
            if (callback) setTimeout(callback, 50);
        } catch (e) {
            console.error("Error tracking:", e);
            if (callback) callback(); // Still redirect even if tracking fails
        }
    }

    function toggleLanguageDropdown() {
        showLanguageDropdown = !showLanguageDropdown;   
    }

    function selectLanguage(lang) {
        currentLanguage = lang;
        showLanguageDropdown = false;

        if (lang === 'fr') {
            z('Language', 'Change to French', 'Google Translate Redirect', 1, () => {
                window.location.href = 'https://sellflo-ai.translate.goog/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp';
            });
        } else {
            z('Language', 'Change to English', 'Original Site', 1, () => {
                if (window.location.hostname.includes('translate.goog')) {
                    window.location.href = 'https://sellflo.ai/';
                }
            });
        }
    }

    // Close dropdown when clicking outside
    onMount(() => {
        // Detect if we're on the translated site and set currentLanguage accordingly
        if (window.location.hostname.includes('translate.goog')) {
            currentLanguage = 'fr';
        }

        function handleClickOutside(event) {
            if (!event.target.closest('.language-selector')) {
                showLanguageDropdown = false;
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });
</script>

<!-- Language Selector - Fixed position at top right -->
<div class="fixed top-4 right-4 z-50 language-selector">
    <div class="relative">
        <button
            onclick={toggleLanguageDropdown}
            class="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors shadow-sm"
            aria-label="Select language"
        >
            {#if currentLanguage === 'en'}
                <!-- Canada Flag -->
                <svg class="w-4 h-4" viewBox="0 0 24 16" fill="none">
                    <rect width="24" height="16" fill="#FF0000"/>
                    <rect x="8" width="8" height="16" fill="#FFFFFF"/>
                    <path d="M12 3L13 5H15L13.5 6.5L14 8L12 7L10 8L10.5 6.5L9 5H11L12 3Z" fill="#FF0000"/>
                </svg>
                <span>EN</span>
            {:else}
                <!-- France Flag -->
                <svg class="w-4 h-4" viewBox="0 0 24 16" fill="none">
                    <rect width="8" height="16" fill="#002654"/>
                    <rect x="8" width="8" height="16" fill="#FFFFFF"/>
                    <rect x="16" width="8" height="16" fill="#CE1126"/>
                </svg>
                <span>FR</span>
            {/if}
            <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
        </button>

        {#if showLanguageDropdown}
            <div class="absolute top-full right-0 mt-1 w-32 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden">
                <button
                    onclick={() => selectLanguage('en')}
                    class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors {currentLanguage === 'en' ? 'bg-blue-50 text-blue-700' : ''}"
                >
                    <!-- Canada Flag -->
                    <svg class="w-4 h-4" viewBox="0 0 24 16" fill="none">
                        <rect width="24" height="16" fill="#FF0000"/>
                        <rect x="8" width="8" height="16" fill="#FFFFFF"/>
                        <path d="M12 3L13 5H15L13.5 6.5L14 8L12 7L10 8L10.5 6.5L9 5H11L12 3Z" fill="#FF0000"/>
                    </svg>
                    <span>English</span>
                </button>
                <button
                    onclick={() => selectLanguage('fr')}
                    class="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors {currentLanguage === 'fr' ? 'bg-blue-50 text-blue-700' : ''}"
                >
                    <!-- France Flag -->
                    <svg class="w-4 h-4" viewBox="0 0 24 16" fill="none">
                        <rect width="8" height="16" fill="#002654"/>
                        <rect x="8" width="8" height="16" fill="#FFFFFF"/>
                        <rect x="16" width="8" height="16" fill="#CE1126"/>
                    </svg>
                    <span>Français</span>
                </button>
            </div>
        {/if}
    </div>
</div>