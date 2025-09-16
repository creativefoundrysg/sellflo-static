<script>
    import { createEventDispatcher } from 'svelte'
    import CTA from "../../buttons/cta.svelte"
    
    const dispatch = createEventDispatcher()
    
    let hideProductDropDown = $state(true)
    let hideDownloadDropDown = $state(true)
    let showProductDropdown = $state(false)
    let showDownloadDropdown = $state(false)
    let timer = null
    let flyoutClasses = $state('')
    
    let {
        products = [],
        downloads = [],
        menuItems = [],
        hideMobileMenu = $bindable(true),
        onclose
    } = $props()
    
    $effect(() => {
        if (hideMobileMenu) {
            flyoutClasses = 'transition ease-in duration-150 opacity-0'
        } else {
            flyoutClasses = 'transition ease-out duration-200 opacity-100'
        }
    })
    
    function toggleMobileMenu() {
        hideMobileMenu = true
        hideProductDropDown = true
        showProductDropdown = false // Reset dropdown state when closing menu

        hideDownloadDropDown = true
        showDownloadDropdown = false // Reset download dropdown state when closing menu
        if (onclose) {
            onclose()
        }
        dispatch('close')
    }
    
    function closeMobileMenu() {
        hideMobileMenu = true
        if (onclose) {
            onclose()
        }
        dispatch('close')
    }
    
    function toggleProductDropdown() {
        showProductDropdown = !showProductDropdown
        hideProductDropDown = !hideProductDropDown
        
        // Clear any existing timer
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }

    function toggleDownloadDropdown() {
        showDownloadDropdown = !showDownloadDropdown
        hideDownloadDropDown = !hideDownloadDropDown
        
        // Clear any existing timer
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }
    
    function closeProductDropdown() {
        showProductDropdown = false
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            hideProductDropDown = true
        }, 300) // Reduced from 500ms for better UX
    }
  </script>
  
  <div class:hidden={hideMobileMenu} class="{flyoutClasses} flex lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
              <a href="/" class="-m-1.5 p-1.5">
                  <span class="sr-only">Creative Foundry</span>
                  <img class="h-8 w-auto" src="/logo.svg" alt="">
              </a>
              <button onclick={toggleMobileMenu} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </div>
          <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                      <div class="-mx-3">
                          <button onclick={toggleProductDropdown} type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-display leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                              Solutions
                              <svg class:rotate-180={showProductDropdown} class="h-5 w-5 flex-none transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                              </svg>
                          </button>
                          <!-- 'Product' sub-menu, show/hide based on menu state. -->
                          <div class:hidden={hideProductDropDown} class="mt-2 space-y-2">
                              {#each products as product}
                                  <a onclick={closeMobileMenu} href={product.url} class="block rounded-lg py-2 pl-6 pr-3 text-sm font-display leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">{product.name}</a>
                              {/each}
                          </div>
                      </div>
                      {#each menuItems as item}
                          <a href={item.url} class="-mx-3 block rounded-lg px-3 py-2 text-base font-display leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">{item.name}</a>
                      {/each}
                      <div class="-mx-3">
                        <button onclick={toggleDownloadDropdown} type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-display leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
                            <div class="inline-flex items-center gap-x-2">
                                Downloads
                                <span class="inline-flex items-center rounded-full bg-zinc-800 dark:bg-slate-500 px-2 py-0.5 text-xs font-medium text-white">New</span>
                            </div>
                            <svg class:rotate-180={showDownloadDropdown} class="h-5 w-5 flex-none transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <!-- 'Product' sub-menu, show/hide based on menu state. -->
                        <div class:hidden={hideDownloadDropDown} class="mt-2 space-y-2">
                            {#each downloads as item}
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
                    </div>
                  </div>
                  <div class="py-6">
                      <CTA label={"Book A Demo"} url="/meet"/>
                  </div>
              </div>
          </div>
      </div>
  </div>