<script>
    import { trackEvent } from "$lib/client/analytics/tracking.js";

    let { 
            root = "/",
            target = "_self",
            showSupport = false,
            showCheckoutLink = false
    } = $props()
</script>
<header class="rounded-t-3xl flex-none bg-white">
    <nav class="mx-auto flex max-w-[85rem] items-center justify-between p-6" aria-label="Global">
        <a href="/">
            <img class="h-10 w-auto" src="/logo.svg" alt="SellFlo" />
        </a>
    </nav>
</header>