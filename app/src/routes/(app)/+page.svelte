<script>
	import { onMount } from 'svelte';
	import EmailSubscription from '$components/landing-page/email_subscription.svelte';
	import Guarantee from '$components/landing-page/guarantee.svelte';
	import Features from '$components/landing-page/features.svelte';
	import Testimonials from '$components/landing-page/testimonials.svelte';
	import Hero from '$components/landing-page/hero.svelte';

	let { data } = $props();
</script>

<Hero data={data} />
<Testimonials data={data} />
<Features data={data} />
<Guarantee data={data} />
<EmailSubscription data={data} />