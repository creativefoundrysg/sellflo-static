<div class="bg-white relative grow flex items-center justify-center min-h-[calc(100vh-96px)]">
    <div class="p-10 md:p-20 mt-[-90px] max-w-7xl text-center">
        <h1 style="word-spacing: 4px;" class="mt-3 font-display text-7xl font-light tracking-tight text-zinc-800">
            <span class="font-medium">Thank You.</span>
        </h1>
        <p class="text-center mt-2 text-xl dark:text-zinc-400">You will receive an update via E-Mail from us in the next few days.</p>
    </div>
    
    <AsiaSVG show={show}/>
    
</div>
<script>
    import { onMount } from "svelte";
    import AsiaSVG from "./components/asia.svelte";
    import { fade } from 'svelte/transition';

    let show = false;

    onMount(()  => {
        setTimeout(() => {
            show = true;
        }, 150);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
                event: 'page_view',
                page_path: window.location.pathname,
        });
        window.dataLayer.push({
            event: 'generate_lead',
            form_name: 'Homepage Subscribe Form',
            page_path: window.location.pathname,
        });
        setTimeout(() => { 
            // window.location = "https://sellflo.ai";
        }, 5000);
    })
</script>