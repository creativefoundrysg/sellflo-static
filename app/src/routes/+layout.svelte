<script>
    import "../app.css"
    import Footer from "$components/footer/standard.svelte";

	let { children } = $props();
    // #f3124e
</script>

{@render children()}

<Footer />