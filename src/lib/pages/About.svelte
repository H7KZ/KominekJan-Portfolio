<script lang="ts">
	import AboutCard from '$lib/components/AboutCard.svelte';
	import Header from '$lib/components/Header.svelte';

	import aboutList from '$lib/data/about';
</script>

<div class="flex flex-col items-center gap-12">
	<Header name="about" />
	<div
		class="grid grid-cols-1 justify-items-center gap-6 font-op font-medium text-sm text-grayWhite px-8 sm:text-base md:grid-cols-2 md:gap-10 md:w-4/5"
	>
		{#each aboutList as about}
			<AboutCard {about} />
		{/each}
	</div>
</div>
