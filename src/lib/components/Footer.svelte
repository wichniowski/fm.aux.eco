<script lang="ts">
	import { currentTheme } from '../store';
	import Europe from './Europe.svelte';
</script>

<footer
	class="bottom-0 mt-auto block w-full border-t border-[var(--decorative-base)] bg-[var(--background-base)] p-[var(--space-m)] text-[var(--text-base)]"
>
	<div class="flex w-full items-center">
		<button class="py-[var(--space-m)]" on:click={() => ($currentTheme = 'dark-theme')}>Dark</button
		>
		<span class="px-[var(--space-m)]">|</span>
		<button class="py-[var(--space-m)]" on:click={() => ($currentTheme = 'light-theme')}
			>Light</button
		>
		<div class="ml-auto">
			<Europe />
		</div>
		<a href="https://github.com/wichniowski/aux-fm.art" class="ml-auto">Contribute</a>
	</div>
</footer>
