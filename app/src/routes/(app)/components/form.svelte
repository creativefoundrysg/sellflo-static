<form
    method="POST"
    action="/api?/form"
    class="mt-8 sm:flex sm:w-full sm:max-w-lg bg-black rounded-xl p-2"
    id="lead-form">
    <div class="min-w-0 flex-1">
        <label for="email" class="sr-only">Email address</label>
        <input name="email" type="email" class="block w-full h-12 rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-xs outline-hidden focus:border-rose-500 focus:ring-1 focus:ring-rose-500" placeholder="Enter your email" />
        <input type="hidden" name="_csrf" value="{data.csrfToken}" />
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-2">
        <button type="submit" class="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-bold text-white shadow-sm hover:bg-rose-600 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:outline-hidden sm:px-10">Get Access</button>
    </div>
</form>
<script>
    let { data } = $props();
</script>