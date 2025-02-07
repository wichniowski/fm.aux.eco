<script lang="ts">
	import { currentStation } from '$lib/store';
	import type { Station } from '$lib/stationlist';
	import { stations } from '$lib/stationlist';
	import Overlay from './Overlay.svelte';
	let showOverlay = $state(false);

	$effect.root(() => {
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			const currentStationIndex = stations.findIndex((s) => s.id === $currentStation.id);
			setStationOnArrowKeys(e.key, currentStationIndex);
		});
	});

	const setStationOnArrowKeys = (key: string, stationIndex: number) => {
		if (stationIndex === -1) return;

		const isNext = key === 'ArrowRight' || key === 'ArrowDown';
		const isPrev = key === 'ArrowLeft' || key === 'ArrowUp';

		if (isNext) {
			const nextIndex = (stationIndex + 1) % stations.length;
			currentStation.set(stations[nextIndex]);
		} else if (isPrev) {
			const prevIndex = stationIndex - 1 < 0 ? stations.length - 1 : stationIndex - 1;
			currentStation.set(stations[prevIndex]);
		}
	};

	const setStation = (station: Station) => currentStation.set(station);

	const copyHashtag = (hashtag: string) => {
		navigator.clipboard.writeText(`${window.location.origin}/#${hashtag}`);
		showOverlay = true;
		setTimeout(() => {
			showOverlay = false;
		}, 1500);
	};
</script>

<div>
	{#if showOverlay}
		<Overlay text="link copied to clipboard" handleOverlayClick={() => (showOverlay = false)} />
	{/if}
	<ul class="m-0 list-none px-[var(--space-m)] py-[10px]">
		{#each stations as station}
			<li class="relative p-0 text-[21px]">
				<div class="flex w-full">
					<button
						class="flex-1 cursor-pointer text-left uppercase hover:text-[var(--essential-primary)] {$currentStation &&
						$currentStation.id === station.id
							? 'text-[var(--essential-primary)]'
							: 'text-[var(--text-base)]'}"
						onclick={() => setStation(station)}
					>
						{station.name}
					</button>
					{#if station.hashtag}
						<button
							class="text-[1rem] uppercase text-[var(--text-base)] opacity-50 hover:opacity-100"
							onclick={() => copyHashtag(station.hashtag)}
						>
							#{station.hashtag}
						</button>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</div>
