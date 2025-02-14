<script lang="ts">
	import { currentTheme } from '$lib/store';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import NowPlaying from '$lib/components/NowPlaying.svelte';
	import StationList from '$lib/components/StationList.svelte';
</script>

<div class="base {$currentTheme} mx-auto flex h-screen flex-col">
	<div class="flex-none bg-[var(--background-base)]">
		<Header />
		<NowPlaying />
	</div>
	<main class="flex-1 overflow-y-auto bg-[var(--background-base)]">
		<StationList />
	</main>
	<div class="flex-none">
		<Footer />
	</div>
</div>
