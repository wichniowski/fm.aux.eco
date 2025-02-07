<script lang="ts">
	const { handleOverlayClick, text } = $props<{
		handleOverlayClick: () => void;
		text: string;
	}>();
</script>

<button
	class="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/50 text-[var(--text-base)]"
	onclick={handleOverlayClick}
>
	<div class="rounded-lg bg-[var(--background-base)] p-8 text-center">
		<p class="text-xl">{text}</p>
	</div>
</button>
