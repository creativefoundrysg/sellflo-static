<script>
	import Form from './components/form.svelte';
    let { data } = $props();
	let imageLoaded = $state(false);
</script>

<header class="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
	<div
	  class="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pt-20 lg:pb-36 xl:py-32">
	  <div class="relative flex items-end lg:col-span-5 lg:row-span-2">
		<div
		  class="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-6xl bg-blue-100 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
		  <svg aria-hidden="true" class="absolute inset-0 h-full w-full">
			<defs>
			  <pattern id="_S_2_" width="128" height="128" patternUnits="userSpaceOnUse" x="100%" y="100%"
				patternTransform="translate(112 64)">
				<path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
			  </pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#_S_2_)"></rect>
		  </svg>
		</div>
		<div
		  class="relative z-10 mx-auto flex w-64  bg-slate-600 shadow-xl rounded-xl border-4 border-slate-600 md:w-80 lg:w-auto">
		  <img alt="" width="960" height="1284" decoding="async" data-nimg="1" class="w-full rounded-md"
			style="color: transparent" src="/pivot.webp" />
		</div>
	  </div>
	  <div class="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
		<div
		  class="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-slate-100">
		</div>
		<figure class="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
		  <div class="flex justify-center text-blue-600 lg:justify-start">
			<div class="flex gap-1">
			  <svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
				<path
				  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
				</path>
			  </svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
				<path
				  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
				</path>
			  </svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
				<path
				  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
				</path>
			  </svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
				<path
				  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
				</path>
			  </svg><svg aria-hidden="true" viewBox="0 0 20 20" class="h-5 w-5 fill-current">
				<path
				  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
				</path>
			  </svg>
			</div>
		  </div>
		  <blockquote class="mt-2">
			<p class="font-display text-xl font-medium text-slate-900">
			  “SellFlo helped me validate my business idea in just under a day that would've taken me months!
			  Wish I had found this before!”
			</p>
		  </blockquote>
		  <figcaption class="mt-2 text-sm text-slate-500">
			<strong class="font-semibold text-blue-600 before:content-['—_']">Ashwin</strong>, Founder
		  </figcaption>
		</figure>
	  </div>
	  <div class="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
		<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 -mt-10 mb-6">
		  <img class="h-14 w-auto" src="/logo.svg" alt="SellFlo" />
		</div>
		<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
		  <h1 class="font-display text-3xl font-extrabold text-slate-900 sm:text-6xl">
			Idea to first 100 customers with AI
		  </h1>
		  <p class="mt-4 text-3xl text-slate-600">
			Our AI Co-Pilot researches your market, validates demand, and delivers a go-to-market plan in hours — not
			months.
		  </p>
		  <div class="mt-8 flex gap-4">
			<a class="inline-flex items-center gap-2 justify-center rounded-md py-4 px-4 text-base font-semibold tracking-tight shadow-sm bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600"
			  color="blue" variant="solid" href="/start">
			  Get My Custom GTM Plan
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
				stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4">
				<path d="M18 8L22 12L18 16" />
				<path d="M2 12H22" />
			  </svg>
			</a>
		  </div>
		</div>
	  </div>
	</div>
  </header>
  <section aria-labelledby="GTM-Strategy-Research" class="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-20">
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
	  <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
		Your Guided Path to Traction
	  </p>
	  <p class="mt-4 text-lg tracking-tight text-slate-700">
		Turn your idea into a clear, actionable go-to-market strategy. Our AI GTM Co-pilot walks you through each step —
		from defining your market to launching with a landing page and a 30-day plan.
	  </p>
	</div>
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
	  <ol role="list" class="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4">
		<!-- Card 1: Understanding Your Market -->
		<li>
		  <div class="border-2 border-neutral-700 relative h-44 rounded-2xl overflow-hidden shadow-lg bg-slate-800">
			<!-- Magnifying glass + chart -->
			<img src="/landing/market_research.webp" alt="Market research" class="w-full h-full object-cover" />
		  </div>
		  <h3
			class="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
			Understanding Your Market
		  </h3>
		  <p class="mt-2 text-sm text-slate-600">
			Pinpoint your ideal customers and uncover the signals that matter. Learn how to define your ICP, map pain
			points, and validate early demand before spending your first dollar.
		  </p>
		</li>
  
		<!-- Card 2: Crafting Your Messaging -->
		<li class="[counter-increment:video]">
		  <div class="border-2 border-neutral-700 relative h-44 rounded-2xl overflow-hidden shadow-lg bg-slate-800">
			<!-- Magnifying glass + chart -->
			<img src="/landing/messaging.webp" alt="Core Messaging" class="w-full h-full object-cover" />
		  </div>
		  <h3
			class="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
			Crafting Your Messaging
		  </h3>
		  <p class="mt-2 text-sm text-slate-600">
			Translate insights into words that convert. Build your positioning statement, value props, and messaging
			hierarchy that resonates with your target audience.
		  </p>
		</li>
  
		<!-- Card 3: Your Landing Page, Generated for You -->
		<li class="[counter-increment:video]">
		  <div class="border-2 border-neutral-700 relative h-44 rounded-2xl overflow-hidden shadow-lg bg-slate-800">
			<!-- Magnifying glass + chart -->
			<img src="/landing/landing_page.webp" alt="Landing Page" class="w-full h-full object-cover" />
		  </div>
		  <h3
			class="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
			Your Landing Page, Generated for You
		  </h3>
		  <p class="mt-2 text-sm text-slate-600">
			Skip the hassle of design and copywriting. Our AI Co-pilot instantly generates a high-converting landing page
			tailored to your startup's ICP and messaging — so you can start collecting leads and validating demand on day
			one.
		  </p>
		</li>
  
		<!-- Card 4: Building Your 30-Day GTM Plan -->
		<li class="[counter-increment:video]">
		  <div class="border-2 border-neutral-700 relative h-44 rounded-2xl overflow-hidden shadow-lg bg-slate-800">
			<!-- Magnifying glass + chart -->
			<img src="/landing/gtm.webp" alt="Market research" class="w-full h-full object-cover" />
		  </div>
		  <h3
			class="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
			Building Your 30-Day GTM Plan
		  </h3>
		  <p class="mt-2 text-sm text-slate-600">
			Put it all together into a clear, execution-ready playbook. Walk away with a prioritized roadmap, campaign
			templates, and the confidence to launch fast.
		  </p>
		</li>
	  </ol>
  
	</div>
  </section>
  <section id="pricing" aria-labelledby="pricing-section"
	class="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-20 lg:pb-16">
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
	  <p class="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Pick your package</p>
	  <p class="mt-4 max-w-xl text-lg tracking-tight text-slate-600">Our AI GTM Co-Pilot is available in two
		different packages so you can pick the one that's right for you.</p>
	</div>
	<div class="mx-auto mt-16 max-w-7xl lg:px-6">
	  <div class="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-3 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
		<div class="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12">
		  <div class="relative flex flex-col">
			<h3 class="mt-7 text-lg font-semibold tracking-tight text-slate-900">Seed</h3>
			<p class="mt-2 text-lg tracking-tight text-slate-600">The perfect starting point for seed-stage founders and
			  lean marketing teams.</p>
			<p class="order-first flex font-display font-bold"><span class="text-[1.75rem]/9 text-slate-500">$</span><span
				class="mt-1 ml-1 text-7xl tracking-tight text-slate-900">499</span></p>
			<div class="order-last mt-8">
			  <ul role="list" class="-my-2 divide-y text-base tracking-tight divide-slate-200 text-slate-900">
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">1 Customized GTM Strategy</span></li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">The AI Landing Page E-Book</span></li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Community Access</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">E-Mail Support</span>
				</li>
			  </ul>
			</div><a
			  class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8"
			  color="slate" aria-label="Get started with the Essential plan for $15" variant="solid" href="#">Get
			  started</a>
		  </div>
		</div>
		<div class="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12 bg-blue-600 sm:shadow-lg">
		  <div class="absolute inset-0 mask-[linear-gradient(white,transparent)] text-white/10"><svg aria-hidden="true"
			  class="absolute inset-0 h-full w-full">
			  <defs>
				<pattern id="_S_8_" width="128" height="128" patternUnits="userSpaceOnUse" x="50%" y="50%">
				  <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
				</pattern>
			  </defs>
			  <rect width="100%" height="100%" fill="url(#_S_8_)"></rect>
			</svg></div>
		  <div class="relative flex flex-col">
			<h3 class="mt-7 text-lg font-semibold tracking-tight text-white">Growth</h3>
			<p class="mt-2 text-lg tracking-tight text-white">For Series-A funded startups and above</p>
			<p class="order-first flex font-display font-bold"><span class="text-[1.75rem]/9 text-blue-200">$</span><span
				class="mt-1 ml-1 text-7xl tracking-tight text-white">1999</span></p>
			<div class="order-last mt-8">
			  <ul role="list" class="-my-2 divide-y text-base tracking-tight divide-white/10 text-white">
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Everything in Seed Plan</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Upto 3 Customized GTM Strategies</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Upto 3 GTM-Customized Landing Pages</span></li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">ICP & buyer persona brief</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">30-day experiment plan template</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Community Access</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32" class="h-8 w-8 flex-none fill-white">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Priority Support</span></li>
			  </ul>
			</div><a
			  class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-8"
			  color="white" aria-label="Get started with the Complete plan for $229" variant="solid" href="#">Get
			  started</a>
		  </div>
		</div>
		<div class="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12">
		  <div class="relative flex flex-col">
			<h3 class="mt-7 text-lg font-semibold tracking-tight text-slate-900">Custom</h3>
			<p class="mt-2 text-lg tracking-tight text-slate-600">For accelerators, venture studios, and scaling startups.</p>
			<p class="order-first flex font-display font-bold">
			  <span class="mt-1 ml-1 text-7xl tracking-tight text-slate-900">Enterprise</span>
			</p>
			<div class="order-last mt-8">
			  <ul role="list" class="-my-2 divide-y text-base tracking-tight divide-slate-200 text-slate-900">
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Everything in Growth Plan</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Full research report (TAM/SAM/SOM, competitor, pricing hypotheses)</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Investor-ready deck adaptation</span>
				</li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Unlimited Customized GTM Strategies</span></li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Unlimited GTM-Customized Landing Pages</span></li>
				<li class="flex py-2"><svg aria-hidden="true" viewBox="0 0 32 32"
					class="h-8 w-8 flex-none fill-slate-600">
					<path
					  d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
					</path>
				  </svg><span class="ml-4">Dedicated Account Manager</span>
				</li>
			  </ul>
			</div><a
			  class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8"
			  color="slate" aria-label="Get started with the Essential plan for $15" variant="solid" href="#">Get
			  started</a>
		  </div>
		</div>
	  </div>
	</div>
  </section>
  <aside id="14-day-guarantee" aria-label="7 Day Money Back Guarantee"
	class="relative bg-slate-100 py-16 sm:py-32">
	<div class="text-slate-900/10"><svg aria-hidden="true" class="absolute inset-0 h-full w-full">
		<defs>
		  <pattern id="_S_3_" width="128" height="128" patternUnits="userSpaceOnUse" x="50%"
			patternTransform="translate(0 80)">
			<path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
		  </pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#_S_3_)"></rect>
	  </svg></div>
	<div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2 relative">
	  <figure>
		<blockquote class="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
		  <p>14 day money-back guarantee if you don't get actionable insights.</p>
		</blockquote>
	  </figure>
	</div>
  </aside>
  <section id="free-chapters" aria-label="subscribe" class="scroll-mt-14 bg-blue-600 sm:scroll-mt-32">
	<div class="overflow-hidden lg:relative">
	  <div
		class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
		<svg aria-hidden="true" width="432" height="184"
		  class="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:right-2 lg:left-auto lg:ml-0 xl:right-auto xl:left-2/3">
		  <defs>
			<symbol id="_S_5_-0" width="40" height="40">
			  <rect class="fill-blue-500" width="40" height="40"></rect>
			  <circle class="fill-blue-600" cx="20" cy="20" r="13"></circle>
			</symbol>
			<symbol id="_S_5_-1" width="40" height="40">
			  <circle class="fill-blue-300" cx="20" cy="20" r="20"></circle>
			  <rect class="fill-blue-600" width="20" height="20" x="10" y="10"></rect>
			</symbol>
		  </defs>
		  <use href="#_S_5_-0" x="0" y="0"></use>
		  <use href="#_S_5_-1" x="56" y="0"></use>
		  <use href="#_S_5_-0" x="112" y="0"></use>
		  <use href="#_S_5_-1" x="168" y="0"></use>
		  <use href="#_S_5_-1" x="224" y="0"></use>
		  <use href="#_S_5_-0" x="280" y="0"></use>
		  <use href="#_S_5_-1" x="336" y="0"></use>
		  <use href="#_S_5_-0" x="392" y="0"></use>
		  <use href="#_S_5_-1" x="0" y="48"></use>
		  <use href="#_S_5_-0" x="56" y="48"></use>
		  <use href="#_S_5_-1" x="112" y="48"></use>
		  <use href="#_S_5_-1" x="168" y="48"></use>
		  <use href="#_S_5_-0" x="224" y="48"></use>
		  <use href="#_S_5_-0" x="280" y="48"></use>
		  <use href="#_S_5_-0" x="336" y="48"></use>
		  <use href="#_S_5_-1" x="392" y="48"></use>
		  <use href="#_S_5_-0" x="0" y="96"></use>
		  <use href="#_S_5_-1" x="56" y="96"></use>
		  <use href="#_S_5_-0" x="112" y="96"></use>
		  <use href="#_S_5_-1" x="168" y="96"></use>
		  <use href="#_S_5_-1" x="224" y="96"></use>
		  <use href="#_S_5_-0" x="280" y="96"></use>
		  <use href="#_S_5_-1" x="336" y="96"></use>
		  <use href="#_S_5_-0" x="392" y="96"></use>
		  <use href="#_S_5_-1" x="0" y="144"></use>
		  <use href="#_S_5_-0" x="56" y="144"></use>
		  <use href="#_S_5_-1" x="112" y="144"></use>
		  <use href="#_S_5_-1" x="168" y="144"></use>
		  <use href="#_S_5_-0" x="224" y="144"></use>
		  <use href="#_S_5_-0" x="280" y="144"></use>
		  <use href="#_S_5_-0" x="336" y="144"></use>
		  <use href="#_S_5_-1" x="392" y="144"></use>
		</svg>
		<div>
		  <h2
			class="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
			Get a free sample report</h2>
		  <p class="mt-4 text-lg tracking-tight text-blue-200">Enter your email address and we'll send you a free sample report of a startup.</p>
		</div>
		<form class="lg:pl-16">
		  <h3 class="text-base font-medium tracking-tight text-white">Get two free chapters straight to your inbox<!-- -->
			<span aria-hidden="true">→</span>
		  </h3>
		  <div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
			<div class="relative sm:static sm:flex-auto"><input type="email" id="email-address" required=""
				aria-label="Email address" placeholder="Email address"
				class="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-hidden sm:py-3">
			  <div
				class="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl">
			  </div>
			</div><button
			  class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
			  type="submit" color="white" variant="solid">Get free chapters</button>
		  </div>
		</form>
	  </div>
	</div>
  </section>
  <footer class="relative pt-5 pb-20 sm:pt-14 sm:pb-32">
	<div class="absolute inset-x-0 top-0 h-32 mask-[linear-gradient(white,transparent)] text-slate-900/10"><svg
		aria-hidden="true" class="absolute inset-0 h-full w-full">
		<defs>
		  <pattern id="_S_7_" width="128" height="128" patternUnits="userSpaceOnUse" x="50%">
			<path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
		  </pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#_S_7_)"></rect>
	  </svg></div>
	<div class="relative text-center text-sm text-slate-600">
	  <p>Copyright &copy; 2025 Creative Foundry Pte. Ltd.</p>
	  <p>All rights reserved.</p>
	</div>
  </footer>