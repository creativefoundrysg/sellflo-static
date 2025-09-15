<script>
    import { clickOutside } from "../../helpers/click_outside.js";
    
    let timer = null;
    let hideDropDown = $state(true);
    let flyoutClasses = $state('');
    
    let {
        items = [],
        footer = null,
        label = null,
        isNew = false,
        showDropdown = $bindable(false) // Make it bindable
    } = $props();
    
    $effect(() => {
        if (showDropdown) {
            flyoutClasses = 'transition ease-out duration-200 opacity-100 translate-y-0';
            hideDropDown = false;
        } else {
            flyoutClasses = 'transition ease-in duration-150 opacity-0 translate-y-1';
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                hideDropDown = true;
            }, 150);
        }
    });
    
    function handleClickOutside(event) {
        if (showDropdown) {
            showDropdown = false;
        }
    }
    
    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
    
    function closeDropdown() {
        showDropdown = false;
    }
</script>

<div use:clickOutside onclick_outside={handleClickOutside}>
    <button onclick={toggleDropdown} type="button" class="flex items-center gap-x-1 text-sm font-display leading-6 text-gray-900 dark:text-slate-200" aria-expanded={showDropdown}>
        {label}
        <svg class:rotate-180={showDropdown} class="h-5 w-5 flex-none text-gray-400 dark:text-slate-400 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
        {#if isNew}
            <span class="inline-flex items-center rounded-full bg-zinc-800 dark:bg-slate-500 px-2 py-0.5 text-xs font-medium text-white">New</span>
        {/if}
    </button>
    
    <div class:hidden={hideDropDown} class="{flyoutClasses} absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5">
        <div class="p-4">
            {#each items as item}
                <button onclick={()=> closeDropdown()} class="group text-left relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-slate-700 w-full">
                    {#if item.image}
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <img src={item.image} alt={item.name} class="h-11 w-11 rounded-lg cover" />
                        </div>
                    {/if}
                    {#if item.icon}
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-rose-600 text-gray-600 dark:text-gray-300 group-hover:text-[#f3124e] dark:group-hover:text-slate-100 group-hover:bg-white dark:group-hover:bg-rose-400">
                            {@html item.icon}
                        </div>
                    {/if}
                    <div class="flex-auto">
                        <a onclick={()=> closeDropdown()} href={item.url} class="block font-display text-gray-900 dark:text-slate-200">
                            {@html item.name}
                            <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-500 dark:group-hover:text-gray-400">{item.description}</p>
                    </div>
                </button>
            {/each}
        </div>
        
        {#if footer}
            {@render footer()}
        {/if}
    </div>
</div>