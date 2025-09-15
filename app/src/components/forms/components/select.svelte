<div class="relative">
    <div class="hs-select relative active">
        <select name={name} value={selected.val} class="hidden" style="display: none;">
            {#each options as v}
                <option value={v.val}>Choose</option>
            {/each}
        </select>
        <button tabindex={tabIndex} on:click={() => toggleDropdown()} type="button" aria-expanded="true" class={inputClasses}>
            <span class="truncate">{selected.name}</span>
        </button>
        {#if showDropdown && options.length > 0}
            <div transition:slide={{ delay: 0, duration: 70, easing: sineInOut, axis: 'y' }} class="overflow-y-scroll absolute mt-2 z-50 w-full min-w-36 max-h-72 p-2 py-3 space-y-0.5 bg-white dark:bg-slate-200 rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] top-full" role="listbox" tabindex="-1" aria-orientation="vertical" style="margin-top: 10px;">
                {#each options as v}
                    <button type="button" on:click={() => selectOption(v)} class="cursor-pointer hs-selected:bg-stone-100 py-2 px-4 w-full text-sm text-stone-800 hover:text-white hover:bg-blue-500 rounded-lg focus:outline-none focus:bg-stone-100">
                        <div class="flex justify-between items-center w-full">
                            <span>{v.name}</span>
                            <span class="hidden hs-selected:block">
                                <svg class="shrink-0 size-3.5 text-stone-800" xmlns="http:.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                        </div>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <div class="absolute top-1/2 end-2.5 -translate-y-1/2">
      <svg class="shrink-0 size-3.5 text-stone-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
    </div>
  </div>
  <script>
    // @ts-nocheck
    import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
    export let inputClasses = "text-left pl-4 bg-white dark:bg-slate-200 py-1.5 px-1.5 block w-full rounded-lg border border-neutral-300 dark:border-[#3e4d5d] bg-transparent text-base/6 text-neutral-950 dark:text-black ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
    export let selected = {name: "Select...", val: ""};
    
    export let name
    export let tabIndex
    
    export let options = [
        {name: 'Option 1', val: 'option1'}, 
        {name: 'Option 2', val: 'option2'}, 
        {name: 'Option 3', val: 'option3'},
        {name: 'Option 1', val: 'option1'}, 
        {name: 'Option 2', val: 'option2'}, 
        {name: 'Option 3', val: 'option3'},
        {name: 'Option 1', val: 'option1'}, 
        {name: 'Option 2', val: 'option2'}, 
        {name: 'Option 3', val: 'option3'},
        {name: 'Option 1', val: 'option1'}, 
        {name: 'Option 2', val: 'option2'}, 
        {name: 'Option 3', val: 'option3'}
    ];
    let showDropdown = false;

    function toggleDropdown() {
        showDropdown = !showDropdown;
    }

    function selectOption(value) {
        selected = value;
        showDropdown = false;
    }
  </script>