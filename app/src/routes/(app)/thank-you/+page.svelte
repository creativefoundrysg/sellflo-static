<div class="bg-white dark:bg-gray-950 relative grow flex items-center justify-center min-h-[calc(100vh-96px)]">
    <div class="p-10 md:p-20 mt-[-90px] max-w-7xl">
        <h1 style="word-spacing: 4px;" class="mt-3 font-display text-7xl font-light tracking-tight text-neutral-950 [text-wrap:balance]">
            <span class="font-medium dark:text-gray-200">Thank You</span>
        </h1>
        <p class="text-center mt-2 text-xl dark:text-gray-400">We usually get back in 1-2 business days.</p>
    </div>
    
    <AsiaSVG show={show}/>
    
</div>
<script>
    import { onMount } from "svelte";
    import AsiaSVG from "../components/asia_svg.svelte";
    import { fade } from 'svelte/transition';

    let show = false;

    onMount(()  => {
        setTimeout(() => {
            show = true;
        }, 150);
    })
</script>