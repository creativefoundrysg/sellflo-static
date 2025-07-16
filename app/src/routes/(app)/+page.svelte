<script>
	import Form from './components/form.svelte';
    let { data } = $props();
	let imageLoaded = $state(false);
</script>

<div class="bg-white">
	<main>
		<!-- Hero section -->
		<div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
			<div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
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
								<span class="block text-4xl font-bold text-gray-900">
									{@html data.title}<span class="text-base align-top text-gray-400">*</span>
								</span>
								<span class="mt-2 block text-3xl font-light text-gray-600">
									{@html data.description}
								</span>
							</h1>
							<p class="mt-6 text-xl text-gray-500">
								High-converting landing pages in <span class="italic">seconds</span>. <span
									class="bg-yellow-200 px-1 font-semibold text-black">No coding needed!</span
								> Just say <span class="text-black italic">hey</span> and our AI agents do the rest.
							</p>
						</div>
						<Form data={data}/>
						
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

	<div class="mt-10 mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl">
		<p class="gap-y-4 text-xs text-slate-400">
			<span class="text-xs align-top text-slate-500">*</span>{@html data.disclaimerText}
		</p>
	</div>

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
