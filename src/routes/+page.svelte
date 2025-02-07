<script lang="ts">
	import { currentTheme } from '$lib/store';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import NowPlaying from '$lib/components/NowPlaying.svelte';
	import StationList from '$lib/components/StationList.svelte';
</script>

<div class="base {$currentTheme} mx-auto flex min-h-screen flex-col">
	<div class="sticky top-0 z-50 bg-[var(--background-base)]">
		<Header />
		<NowPlaying />
	</div>
	<main class="bg-[var(--background-base)]">
		<StationList />
	</main>
	<Footer />
</div>
