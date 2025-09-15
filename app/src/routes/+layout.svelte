<script>
    import "../app.css"
    import Header from "$components/header/standard.svelte";
    import Footer from "$components/footer/standard.svelte";
    import { page } from '$app/stores';

	let { children } = $props();
    // #f3124e
</script>

<!-- Don't show on homepage -->
{#if $page.url.pathname !== '/'}
  <Header />
{/if}

{@render children()}

<Footer />