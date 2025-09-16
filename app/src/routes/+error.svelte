<div class="bg-white relative grow flex items-center justify-center min-h-[calc(100vh-96px)]">
    <div class="p-10 md:p-20 mt-[-90px] max-w-7xl text-center">
        <h1 style="word-spacing: 4px;" class="mt-3 font-display text-7xl font-light tracking-tight text-zinc-800">
            <span class="font-light">{page.status}</span>
        </h1>
        <p class="text-center mt-2 text-xl dark:text-zinc-400">{page.error?.message}</p>
    </div>
    
    <AsiaSVG show={show}/>
    
</div>
<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    import AsiaSVG from "$components/asia.svelte";
	import { page } from '$app/state';

    let show = false;

    onMount(()  => {
        setTimeout(() => {
            show = true;
        }, 150);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
                event: 'error_page_view',
                page_path: window.location.pathname,
        });
        setTimeout(() => { 
            // window.location = "https://sellflo.ai";
        }, 5000);
    })
</script>