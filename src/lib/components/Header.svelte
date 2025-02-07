<script lang="ts">
	import Logo from './Logo.svelte';
	export const logoUrl = '';
</script>

<header class="grid grid-cols-[auto_120px]">
	<div
		class="col-start-1 flex items-center border-r border-[var(--border-width)] border-[var(--decorative-base)] p-4"
	>
		<Logo />
	</div>
	<div class="col-start-2 flex p-4 ps-2 text-right">
		<h1
			class="m-0 w-full self-end tracking-[8.5px] text-[var(--font-size-s)] text-[var(--text-base)]"
		>
			AUX<br />FM
		</h1>
	</div>
</header>
