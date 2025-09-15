<script>
	import { onMount } from "svelte";

    let { 
        data,
        children,
        classes
    } = $props();

    onMount(() => {
        const form = document.getElementById('email-form');
        form.addEventListener('submit', (e) => {
            const email = form.email.value.trim();
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!isValid) {
                e.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    });
</script>
<form
    id="email-form"
    method="POST"
    action="/api/form?/submit"
    class={classes}>
        <label for="email" class="sr-only">Email address</label>    
        <input type="hidden" name="_csrf" value="{data.csrfToken}" />
        {@render children?.()}
</form>
