<script>
	import { onMount } from 'svelte';
    import { trackEvent } from "$lib/client/analytics/tracking.js";
	let { data } = $props();

    function z(c, a, l, v) {
        try {
            trackEvent({
                category: c, // 'GTM Funnel: Intent'
                action: a, //'GTM Booking: Input Email',
                label: l, //'GTM Email Subscription Box',
                value: v //20
            });
        } catch (e) {
            console.error("Error tracking:", e);
        }
    }
</script>
<header class="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
	<div
		class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32"
	>
		<div class="relative flex items-end lg:col-span-5 lg:row-span-2">
			<div
				class="rounded-br-6xl absolute -bottom-12 -top-20 left-0 right-1/2 z-10 bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40"
			>
				<svg aria-hidden="true" class="absolute inset-0 h-full w-full">
					<defs>
						<pattern
							id="_S_2_"
							width="128"
							height="128"
							patternUnits="userSpaceOnUse"
							x="100%"
							y="100%"
							patternTransform="translate(112 64)"
						>
							<path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#_S_2_)"></rect>
				</svg>
			</div>
            <div class="flex flex-col">
                <div
                    class="relative z-10 mx-auto flex w-64 rounded-xl border-4 border-slate-600 bg-slate-600 shadow-xl md:w-80 lg:w-auto"
                >
                    <img
                        alt=""
                        width="960"
                        height="1284"
                        decoding="async"
                        data-nimg="1"
                        class="w-full rounded-md"
                        style="color: transparent"
                        src="/pivot.webp"
                    />
                </div>
            
                <div class="flex justify-end mt-2">
                    <a 
                        target="_blank"
                        href="/transparency"
                        onclick={z('GTM Funnel:Awareness', 'View Transparency Report', 'Click', 10)} 
                        class="z-10 inline-block px-3 py-1 text-[10px] font-medium text-slate-400"
                    >
                       AI Transparency Disclaimer
                    </a>
                </div>
            </div>
		</div>
		<div class="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
			<div
				class="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100"
			></div>
			<figure class="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
				<div class="flex justify-center text-blue-600 lg:justify-start">
					<div class="flex gap-1">
						<svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							>
							</path>
						</svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							>
							</path>
						</svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							>
							</path>
						</svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							>
							</path>
						</svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							>
							</path>
						</svg>
					</div>
				</div>
				<blockquote class="mt-2">
					<p class="font-display text-xl font-medium text-slate-900">
						“I wish I had this when I was starting out. It would have saved me months of work and
						thousands of dollars.”
					</p>
				</blockquote>
				<figcaption class="mt-2 text-sm text-slate-500">
					<strong class="font-semibold text-blue-600 before:content-['—_']">Beta testers</strong>,
					September 2025
				</figcaption>
			</figure>
		</div>
		<div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
			<a href="#preview"
				onclick={z('GTM Funnel:Awareness', 'Preview Document', 'Click', 10)} 
				class="block mx-auto -mt-10 mb-6 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
				<img class="h-14 w-auto" src="/logo.svg" alt="SellFlo" />
			</a>
			<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
				<h1 class="font-display text-3xl font-extrabold text-slate-900 sm:text-6xl">
					Idea to first 100 customers with AI
				</h1>
				<p class="mt-4 text-3xl text-slate-600">
					Our AI Co-Pilot researches your market, validates demand, and delivers a go-to-market plan
					in hours — not months.
				</p>
				<div class="mt-8 flex gap-4 justify-center sm:justify-start">
					<a
						onclick={z('GTM Funnel:Consideration', 'Download GTM Plan', 'Download', 100)}
						class="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-4 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
						color="blue"
						variant="solid"
						href="/start"
					>
						Download Custom GTM Plan
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="size-4"
						>
							<path d="M18 8L22 12L18 16" />
							<path d="M2 12H22" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>