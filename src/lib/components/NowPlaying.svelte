<script lang="ts">
	import { onMount } from 'svelte';
	import { currentStation, isPlaying } from '../store';
	import type { Station } from '../stationlist';
	import { stations } from '../stationlist';
	import Overlay from './Overlay.svelte';

	let previousStation: Station;
	let player: HTMLAudioElement;
	let isLoading = $state(false);
	const SPACE_BAR_KEYCODE = 32;
	let showOverlay = $state(false);
	let hashStation = $state<Station | undefined>(undefined);

	onMount(() => {
		const hash = window.location.hash.slice(1);
		if (hash) {
			const station = stations.find((s) => s.hashtag === hash);
			if (station) {
				hashStation = station;
				showOverlay = true;
				currentStation.set(station);
			}
		}
	});

	$effect(() => {
		if (!previousStation || previousStation.id != $currentStation.id) {
			$isPlaying = false;
			playRadio();
		}
	});

	$effect.root(() => {
		document.addEventListener('keydown', (e: KeyboardEvent) => {
			if ((e.target as HTMLElement).nodeName != 'TEXTAREA' && e.keyCode == SPACE_BAR_KEYCODE) {
				if (!$currentStation) {
					currentStation.set(stations[0]);
				} else {
					playRadio();
				}
			}
		});
	});

	const playRadio = async () => {
		previousStation = $currentStation;
		if (!$currentStation) {
			return false;
		}
		if (!$isPlaying) {
			isLoading = true;
			player.src = $currentStation.url;
			try {
				await player.play();
				isLoading = false;
				$isPlaying = true;
			} catch (error) {
				console.log('Autoplay prevented - waiting for user interaction');
				$isPlaying = false;
			}
		} else {
			player.pause();
			$isPlaying = false;
		}
	};

	const handleOverlayClick = () => {
		showOverlay = false;
		playRadio();
	};
</script>

{#if showOverlay && hashStation}
	<Overlay {handleOverlayClick} text={`click to play ${hashStation.name}`} />
{/if}

<div
	class="grid grid-cols-[auto_120px] grid-rows-[80px_40px] border-b border-t border-[var(--decorative-base)] border-[var(--text-base)]"
>
	<button
		class="m-0 flex items-center border-0 border-r border-solid border-r-[var(--decorative-base)] p-0 px-[var(--space-xl)] text-left text-[1.5rem] uppercase text-[var(--text-base)]"
		onclick={playRadio}
	>
		{$currentStation
			? isLoading
				? 'Awaiting Signal ...'
				: $currentStation.name
			: 'Select a station'}
		<div
			class="ml-auto mr-[var(--space-xl)] inline-block transition-all duration-100 {$isPlaying
				? 'h-5 w-5 border-[var(--background-base)] bg-[var(--essential-primary)]'
				: 'h-0 w-0 border-b-[12px] border-l-[22px] border-t-[12px] border-transparent border-l-[var(--essential-primary)] bg-[var(--background-base)]'}"
		></div>
	</button>
	<div
		class="col-start-1 col-end-2 row-start-2 flex items-center overflow-hidden border-r border-t border-[var(--border-width)] border-[var(--decorative-base)] px-[var(--space-xl)] text-[0.8rem] text-[var(--text-base)]"
	>
		<p class="overflow-hidden text-ellipsis whitespace-nowrap">
			{$currentStation ? $currentStation.description : 'Select a station to start playing'}
		</p>
		{#if $currentStation && $currentStation.link}
			<a
				class="mx-[var(--space-s)] ml-auto text-[var(--text-primary)] no-underline before:content-['$'] after:content-['$']"
				href={$currentStation.link}
			>
				Donate
			</a>
		{/if}
	</div>
	<div
		class="row-start-1 row-end-3 flex items-center justify-center text-[60px] font-bold text-[var(--text-base)]"
	>
		<span>{$currentStation.name.substring(0, 1).toUpperCase()}</span>
	</div>
	<audio class="invisible" id="player" bind:this={player}></audio>
</div>
