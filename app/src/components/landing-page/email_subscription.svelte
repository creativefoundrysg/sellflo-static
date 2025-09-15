<script>
	import { onMount } from 'svelte';
	import EmailForm from '$components/forms/email.svelte';
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
<section id="email-subscription" aria-label="subscribe" class="scroll-mt-14 bg-blue-600 sm:scroll-mt-32">
	<div class="overflow-hidden lg:relative">
		<div
			class="relative mx-auto grid grid-cols-1 items-end gap-y-12 px-4 py-20 sm:px-6 md:max-w-2xl md:px-4 lg:static lg:max-w-5xl lg:grid-cols-2 lg:px-8 lg:py-28 xl:py-32"
		>
			<svg
				aria-hidden="true"
				width="432"
				height="184"
				class="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto"
			>
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
					class="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto"
				>
					Get a free sample report
				</h2>
				<p class="mt-4 text-lg tracking-tight text-blue-200">
					Enter your email address and we'll send you a free sample report of a startup.
				</p>
			</div>
			<div class="lg:pl-16">
				<h3 class="text-base font-medium tracking-tight text-white">
					Get a free sample straight to your inbox
					<span aria-hidden="true">→</span>
				</h3>
				<div class="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
					<EmailForm data={data} classes="mt-4 relative flex items-center sm:py-0.5 sm:pr-2.5">
						<div class="relative sm:static sm:flex-auto">
								<input
									onclick={z('GTM Funnel:Consideration', 'Email Subscribe', 'Free Sample', 50)}
									name="email"
									type="email"
									id="email-address"
									required=""
									aria-label="Email address"
									placeholder="Email address"
									class="focus:outline-hidden peer border-none relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 sm:py-3"
								/>
							<div
								class="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl"
							></div>
						</div>
						<button
							class="mt-4 inline-flex w-full justify-center rounded-md bg-white px-4 py-1 text-base font-semibold tracking-tight text-blue-600 shadow-sm hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
							onclick={z('GTM Funnel:Consideration', 'Email Subscribe', 'Submit', 100)}
							type="submit"
							color="white"
							variant="solid">Get free sample</button
						>
					</EmailForm>
				</div>
				<p class="mt-3 text-blue-400 text-xs">
					By signing up, you consent to the collection and use of your information as outlined in our <a class="underline" target="_blank" data-sveltekit-reload href="/privacy-policy">Privacy Policy</a> (PIPEDA/PDPA compliant).
				</p>
			</div>
		</div>
	</div>
</section>