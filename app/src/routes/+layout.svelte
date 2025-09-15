<script>
    import "../app.css"
    import Header from "$components/header/standard.svelte";
    import Footer from "$components/footer/standard.svelte";

	let { children } = $props();
    // #f3124e
</script>

<Header />

{@render children()}

<Footer />