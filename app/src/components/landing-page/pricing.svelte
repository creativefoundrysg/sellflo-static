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
<section
	id="pricing"
	aria-labelledby="pricing-section"
	class="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-20"
>
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
		<p class="font-display mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
			Pick your package
		</p>
		<p class="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
			Our AI GTM Co-Pilot is available in three different packages so you can pick the one that's
			right for you.
		</p>
	</div>
	<div class="mx-auto mt-16 max-w-7xl lg:px-6">
		<div
			class="md:rounded-6xl grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-3 md:px-8 md:pt-16 lg:p-20"
		>
			<div class="sm:rounded-5xl relative px-4 py-16 sm:px-10 md:py-12 lg:px-12">
				<div class="relative flex flex-col">
					<h3 class="mt-7 text-lg font-semibold tracking-tight text-slate-900">Seed</h3>
					<p class="mt-2 text-lg tracking-tight text-slate-600">
						The perfect starting point for seed-stage founders and lean marketing teams.
					</p>
					<div class="font-display order-first flex flex-col font-bold">
						<p class="flex flex-row">
							<span class="text-[1.75rem]/9 text-slate-500">$</span>
							<span class="ml-1 mt-1 text-7xl tracking-tight text-slate-900">499</span>
						</p>
						<span class="text-xl text-slate-500 line-through ml-6 mr-2">$599</span>
					</div>
					<div class="order-last mt-8">
						<ul
							role="list"
							class="-my-2 divide-y divide-slate-200 text-base tracking-tight text-slate-900"
						>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">1 Customized GTM Strategy</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">The AI Landing Page E-Book</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Community Access</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">E-Mail Support</span>
							</li>
						</ul>
					</div>
					<a
						onclick={z('GTM Funnel:Consideration', 'Seed Plan Select', 'Submit', 100)}
						class="mt-8 inline-flex justify-center rounded-md bg-slate-900 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900"
						color="slate"
						aria-label="Get started with the Essential plan for $15"
						variant="solid"
						href="/start">Get started</a
					>
				</div>
			</div>
			<div
				class="sm:rounded-5xl relative bg-blue-600 px-4 py-16 sm:px-10 sm:shadow-lg md:py-12 lg:px-12">
				<div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<div class="bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full">
						MOST POPULAR
					</div>
				</div>
				<div class="mask-[linear-gradient(white,transparent)] absolute inset-0 text-white/10">
					<svg aria-hidden="true" class="absolute inset-0 h-full w-full">
						<defs>
							<pattern
								id="_S_8_"
								width="128"
								height="128"
								patternUnits="userSpaceOnUse"
								x="50%"
								y="50%"
							>
								<path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#_S_8_)"></rect>
					</svg>
				</div>
				<div class="relative flex flex-col">
					<h3 class="mt-7 text-lg font-semibold tracking-tight text-white">Growth</h3>
					<p class="mt-2 text-lg tracking-tight text-white">
						For Series-A funded startups and above
					</p>
					<div class="font-display order-first flex flex-col font-bold">
						<div class="flex flex-row">
							<p class="flex flex-row">
								<span class="text-[1.75rem]/9 text-blue-200">$</span>
								<span class="ml-1 mt-1 text-7xl tracking-tight text-white">1999</span>
							</p>
						</div>
						<span class="text-xl text-blue-200 line-through ml-6 mr-2">$2499</span>
					</div>
					<div class="order-last mt-8">
						<ul
							role="list"
							class="-my-2 divide-y divide-white/10 text-base tracking-tight text-white"
						>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Everything in Seed Plan</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Upto 3 Customized GTM Strategies</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Upto 3 GTM-Customized Landing Pages</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">ICP & buyer persona brief</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">30-day experiment plan template</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Community Access</span>
							</li>
							<li class="flex py-2">
								<svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Priority Support</span>
							</li>
						</ul>
					</div>
					<a
						onclick={z('GTM Funnel:Consideration', 'Growth Plan Select', 'Submit', 200)}
						class="mt-8 inline-flex justify-center rounded-md bg-white px-4 py-1 text-base font-semibold tracking-tight text-blue-600 shadow-sm hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600"
						color="white"
						aria-label="Get started with the Complete plan for $229"
						variant="solid"
						href="/start">Get started</a
					>
				</div>
			</div>
			<div class="sm:rounded-5xl relative px-4 py-16 sm:px-10 md:py-12 lg:px-12">
				<div class="relative flex flex-col">
					<h3 class="mt-7 text-lg font-semibold tracking-tight text-slate-900">Custom</h3>
					<p class="mt-2 text-lg tracking-tight text-slate-600">
						For accelerators, venture studios, and scaling startups.
					</p>
					<p class="font-display order-first flex font-bold">
						<span class="ml-1 mt-1 text-7xl tracking-tight text-slate-900">Enterprise</span>
					</p>
					<div class="order-last mt-8">
						<ul
							role="list"
							class="-my-2 divide-y divide-slate-200 text-base tracking-tight text-slate-900"
						>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Everything in Growth Plan</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4"
									>Full research report (TAM/SAM/SOM, competitor, pricing hypotheses)</span
								>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600">
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
									</path>
								</svg><span class="ml-4">Investor-ready deck adaptation</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Unlimited Customized GTM Strategies</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Unlimited GTM-Customized Landing Pages</span>
							</li>
							<li class="flex py-2">
								<svg
									aria-hidden="true"
									viewBox="0 0 32 32"
									class="h-8 w-8 flex-none fill-slate-600"
								>
									<path
										d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
									>
									</path>
								</svg><span class="ml-4">Dedicated Account Manager</span>
							</li>
						</ul>
					</div>
					<a
						onclick={z('GTM Funnel:Consideration', 'Enterprise Plan Select', 'Submit', 500)}
						class="mt-8 inline-flex justify-center rounded-md bg-slate-900 px-4 py-1 text-base font-semibold tracking-tight text-white shadow-sm hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900"
						color="slate"
						aria-label="Get started with the Essential plan for $15"
						variant="solid"
						href="/start">Get started</a
					>
				</div>
			</div>
		</div>
	</div>
</section>