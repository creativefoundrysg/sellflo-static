<script>
    import { trackEvent } from "$lib/client/analytics/tracking.js";
</script>
<footer class="mx-auto max-w-7xl px-6 w-full">
    <div class="mx-auto max-w-2xl lg:max-w-none pb-4">
        <div class="flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-8">
            <a onclick={() => {
                trackEvent({
                    category: 'Funnel: Awareness',
                    action: 'Click: Logo',
                    label: `Footer Logo`,
                    value: 10
                })
            }} data-sveltekit-reload class="relative" aria-label="Home" href="/">
                <span class="flex absolute z-99 left-0 top-0 w-[160px] h-[70px] items-stretch"></span>
                <img src="/logo.svg" alt="Creative Foundry" class="w-20" />
            </a>
            <div class="flex items-center gap-x-6 text-zinc-400 text-xs">    
                <a onclick={() => {
                    trackEvent({
                        category: 'Funnel: Awareness',
                        action: 'Click: Contact',
                        label: `Footer Contact Link`,
                        value: 10
                    })
                }} data-sveltekit-reload href="/contact">Contact</a>
                <a onclick={() => {
                    trackEvent({
                        category: 'Funnel: Awareness',
                        action: 'Click: Privacy Policy',
                        label: `Footer Privacy Policy Link`,
                        value: 10
                    })
                }} data-sveltekit-reload href="/privacy-policy">Privacy Policy</a>
                <a onclick={() => {
                    trackEvent({
                        category: 'Funnel: Awareness',
                        action: 'Click: Terms Of Service',
                        label: `Footer Terms Of Service Link`,
                        value: 10
                    })
                }} data-sveltekit-reload href="/terms-of-service">Terms Of Service</a>
                 <a onclick={() => {
                    trackEvent({
                        category: 'Funnel: Awareness',
                        action: 'Click: Transparency',
                        label: `Footer Transparency Link`,
                        value: 10
                    })
                }} data-sveltekit-reload href="/transparency">Transparency</a>
            </div>
            <p class="text-xs text-neutral-300">
                &copy; 2022 Creative Foundry Pte. Ltd. <span class="text-gray-300">UEN: 202215906M</span>
            </p>
        </div>
    </div>
</footer>