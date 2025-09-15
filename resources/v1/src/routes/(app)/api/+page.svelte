<div class="bg-white relative grow flex items-center justify-center min-h-[calc(100vh-96px)]">
    <div class="p-10 md:p-20 mt-[-90px] max-w-7xl text-center">
        <h1 style="word-spacing: 4px;" class="mt-3 font-display text-4xl font-light tracking-tight text-zinc-800">
            <span class="font-medium">You shouldn't be here.</span>
        </h1>
        <p class="text-center mt-2 text-xl text-zinc-400 dark:text-zinc-400">
            Not all who wander are lost.
        </p>
    </div>
    
    <AsiaSVG show={show}/>
</div>
<script>
    import { onMount } from "svelte";
    import AsiaSVG from "../components/asia.svelte";

    let show = false;

    onMount(()  => {
        setTimeout(() => {
            show = true;
        }, 150);
        window.location.href = "https://creativefoundry.ai";
    })
</script>