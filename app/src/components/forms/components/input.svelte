<input
    value={val}
    oninput={(e) => onInput(name, e.target.value)}
    required={required || null}
    placeholder={placeholder || null}
    tabindex={tabIndex}
    type={type}
    name={name}
    id={id || name}
    disabled={disabled}
    class="{inputClasses} {classes} {disabled ? disabledClasses : 'bg-white'} {focus == "blue" ? blueFocusClasses : defaultFocusClasses} {padding}"
/>
<script>
    // convert to runes
    let { 
            id, 
            type = "text", 
            name, 
            tabIndex, 
            required, 
            focus = "blue", 
            padding = "py-2 px-3", 
            placeholder, 
            val,
            classes = "",
            disabled = false,
            onInput = function (){}
        } = $props()

    let inputClasses = "dark:bg-slate-200 block w-full rounded-lg text-black dark:text-black transition"
    let blueFocusClasses = "border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-black dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600"
    let defaultFocusClasses = "ring-4 ring-transparent focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 border border-neutral-300 dark:border-[#3e4d5d] placeholder:text-neutral-500"
    let disabledClasses = "bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400 cursor-not-allowed"
</script>