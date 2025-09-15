<div class="relative">
    <!-- Card -->
    <div class="{colors.background} {colors.border} flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10">
        <h2 class="font-display text-xl font-semibold text-gray-800 dark:text-neutral-200">
            {f.title}
        </h2>
        <h4 class="text-gray-800 dark:text-slate-400">{@html f.subtitle}</h4>

        <form 
            on:submit={validateSubmission}
            method={f.method || "POST"} action={f.action}>
                {#each f.hiddenFields as field}
                    <input type="hidden" name={field.name} value={field.value} />
                {/each}
                <div class="mt-6 grid gap-2 lg:gap-2">
                    {#each f.layout as fieldset}
                        <div class="mt-2 grid grid-cols-1 md:grid-cols-{fieldset.columns} gap-4 lg:gap-6">
                            {#each fieldset.fields as field}
                                <div>
                                    <div class="flex flex-row items-start justify-start content-start">
                                        <Label label={field.label} labelFor={field.id} />
                                        {#if field.required}
                                            <span class="ml-0.5 text-lg text-red-500 leading-tight mb-2">*</span>
                                        {/if}
                                    </div>   
                                    <svelte:component this={getFieldComponent(field.type)} type={field.type} {...field} />
                                </div>
                            {/each}
                        </div>
                    {/each}
                </div>

                <!-- Checkbox -->
                <div class="mt-6 flex">
                    <div class="flex">
                        <input tabindex={f.submissionCondition.tabIndex} id="condition-agreement" name="condition-agreement" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                    </div>
                    <div class="ms-3">
                        <label for="condition-agreement" class="text-sm text-gray-600 dark:text-slate-500">By submitting this form I agree to the <a class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" target="_blank" href="/privacy-policy">Terms</a> and <a class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" target="_blank" href="/privacy-policy">Privacy policy</a></label>
                    </div>
                </div>
                <!-- End Checkbox -->
                <div class="mt-6 grid">
                    <CTA {...cta} />
                </div>
        </form>

        <div class="mt-3 text-center">
            <p class="text-sm text-gray-500 dark:text-slate-500">
                {f.footer.text}
            </p>
        </div>
    </div>
    <!-- End Card -->
</div>
<script>
    import Select from './components/select.svelte'
    import Input from './components/input.svelte'
    import Label from './components/label.svelte'
    import CTA from '../../components/buttons/cta.svelte'

    export let f
    export let customColors = {}
    let colors = {
        background: "bg-orange-100 dark:bg-slate-800",
        border: "border-none",
        text: "text-blue-600",
        hover: "hover:bg-blue-200",
        focus: "focus:bg-blue-200",
        button: "bg-[#F3134D] text-white hover:bg-[#F3134D] focus:bg-rose-700",
        buttonText: "text-white",
        buttonHover: "hover:bg-blue-700",
        ...customColors
    }
    let cta = {
        label: f.cta.text || "Submit",
        type: "submit",
        size: "medium",
        rounded: "medium",
        icon: f.cta.icon || "play",
        button: true
    }

    // @ts-ignore
    function getFieldComponent(field) {
        let fields = {
            "text": Input,
            "email": Input,
            "select": Select,
            "label": Label
        }
        // @ts-ignore
        return fields[field];
    }

    function validateSubmission(event) {
        const checkbox = document.getElementById('condition-agreement');
        if (!checkbox.checked) {
            alert('You must agree to the terms and conditions before submitting.');
            event.preventDefault(); // Prevent form submission
            return false;
        }
        return true;
    }

</script>