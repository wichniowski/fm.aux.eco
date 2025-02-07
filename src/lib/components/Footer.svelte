<script lang="ts">
	import { currentTheme } from '../store';
</script>

<footer
	class="bottom-0 mt-auto grid w-full grid-cols-4 border-t border-[var(--decorative-base)] bg-[var(--background-base)] p-[var(--space-m)] text-[var(--text-base)]"
>
	<div class="flex items-center">
		<button class="py-[var(--space-m)]" on:click={() => ($currentTheme = 'dark-theme')}>Dark</button
		>
		<span class="px-[var(--space-m)]">|</span>
		<button class="py-[var(--space-m)]" on:click={() => ($currentTheme = 'light-theme')}
			>Light</button
		>
	</div>
</footer>
