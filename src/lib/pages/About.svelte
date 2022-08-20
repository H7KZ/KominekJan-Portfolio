<script lang="ts">
	import AboutCard from '$lib/components/AboutCard.svelte';
	import Header from '$lib/components/Header.svelte';
	import LoadingCircle from '$lib/components/LoadingCircle.svelte';
	import aboutListBackup from '$lib/data/about.json';

	let aboutList = [];

	fetch('https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/about/about.json')
	.then((response) => response.json())
	.then((data) => aboutList = data)
	.catch(() => {
		aboutList = aboutListBackup;
	})
</script>

<div class="flex flex-col items-center gap-12">
	<Header name="about" />
	{#if aboutList.length == 0}
	<LoadingCircle />
	{/if}
	<div
		class="grid grid-cols-1 justify-items-center gap-6 font-op font-medium text-sm text-grayWhite px-8 sm:text-base md:grid-cols-2 md:gap-10 md:w-4/5"
	>
		{#each aboutList as about}
			<AboutCard {about} />
		{/each}
	</div>
</div>
