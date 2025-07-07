<script>
	import Form from './components/form.svelte';
    let { data } = $props();
	let imageLoaded = $state(false);
</script>

<div class="bg-white">
	<main>
		<!-- Hero section -->
		<div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
			<div
				class="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
			>
				<div>
					<div class="flex flex-row items-center space-x-5">
						<div>
							<img class="h-14 w-auto" src="/logo.svg" alt="SellFlo" />
						</div>
					</div>
					<div class="mt-20">
						<div>
							<div class="inline-flex space-x-2">
								<span class="rounded-sm bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500"
									>25% OFF</span
								>
								<span class="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
									<span>Limited deal for beta users</span>
								</span>
							</div>
						</div>
						<div class="mt-6 sm:max-w-xl">
							<h1 class="flex flex-col space-y-2 tracking-tight sm:text-5xl">
								<span class="block text-4xl font-bold text-gray-900"
									>High-Performance Landing Pages.</span
								>
								<span class="mt-2 block text-3xl font-light text-gray-600"
									>Instant. Powered By AI.</span
								>
							</h1>
							<p class="mt-6 text-xl text-gray-500">
								Generate landing pages in SECONDS. <span
									class="bg-yellow-200 px-1 font-semibold text-black">No coding needed!</span
								> Just say what you want and our AI agents take care of the rest.
							</p>
							 <div class="performance flex flex-row gap-x-8 mt-6">
                    <div class="flex flex-col items-center">
                      <div class="size-16 flex items-center justify-center bg-green-100 rounded-full p-2 border-4 border-green-500">
                        <span class="text-lg text-center text-green-700">100</span>
                      </div>
                      <span class="text-xs mt-2">Performance</span>
                    </div>
  
                    <div class="flex flex-col items-center">
                      <div class="size-16 flex items-center justify-center bg-green-100 rounded-full p-2 border-4 border-green-500">
                        <span class="text-lg text-center text-green-700">100</span>
                      </div>
                      <span class="text-xs mt-2">Best practices</span>
                    </div>
  
                    <div class="flex flex-col items-center">
                      <div class="size-16 flex items-center justify-center bg-green-100 rounded-full p-2 border-4 border-green-500">
                        <span class="text-lg text-center text-green-700">100</span>
                      </div>
                      <span class="text-xs mt-2">SEO</span>
                    </div>
                </div>
						</div>
						<Form data={data}/>
						<div class="mt-6">
							<div class="inline-flex items-center divide-x divide-gray-300">
								<div class="flex shrink-0 pr-5">
									{#each Array.from({ length: 5 }) as _, index}
										<svg
											class="size-5 text-yellow-400"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
											data-slot="icon"
										>
											<path
												fill-rule="evenodd"
												d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
												clip-rule="evenodd"
											/>
										</svg>
									{/each}
								</div>
								<div class="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3 text-nowrap">
									<span class="font-medium text-gray-900">Rated 5 stars</span> by our clients
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="sm:mx-auto sm:max-w-3xl sm:px-6">
				<div
					class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
				>
					<div class="hidden sm:block">
						<div
							class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"
						></div>
						<svg
							class="absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0"
							width="404"
							height="392"
							fill="none"
							viewBox="0 0 404 392"
						>
							<defs>
								<pattern
									id="837c3e70-6c3a-44e6-8854-cc48c737b659"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
						</svg>
					</div>
					<div
						class="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
					>
						<img
							id="screenshot"
							class="{imageLoaded ? 'opacity-100' : 'opacity-10'} w-full fade-in transition-opacity duration-1000 opacity-0 rounded-md shadow-xl lg:h-full lg:w-auto lg:max-w-none"
							src="/screenshot.webp"
							alt=""
							loading="lazy"
							onload={() => imageLoaded = true}
						/>
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer
		class="mx-auto flex max-w-md flex-col justify-between overflow-hidden px-6 py-12 sm:max-w-3xl md:flex-row lg:max-w-7xl lg:px-8"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			<div class="px-5 py-2">
				<a
					href="https://creativefoundry.ai/about"
					target="_blank"
					class="text-base text-gray-400 hover:text-gray-300">About</a
				>
			</div>
			<div class="px-5 py-2">
				<a
					href="https://blog.creativefoundry.ai"
					target="_blank"
					class="text-base text-gray-400 hover:text-gray-300">Blog</a
				>
			</div>
			<div class="px-5 py-2">
				<a
					href="https://creativefoundry.ai/privacy-policy"
					target="_blank"
					class="text-base text-gray-400 hover:text-gray-300">Privacy</a
				>
			</div>
			<div class="px-5 py-2">
				<a
					href="https://creativefoundry.ai/contact"
					target="_blank"
					class="text-base text-gray-400 hover:text-gray-300">Contact</a
				>
			</div>
		</nav>
		<p class="mt-4 text-center text-base text-gray-400 md:mt-0">
			&copy; 2022 Creative Foundry Pte. Ltd. All rights reserved.
		</p>
	</footer>
</div>
