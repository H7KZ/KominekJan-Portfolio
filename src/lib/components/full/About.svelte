<script lang='ts'>
	import AboutCard from '$lib/components/common/about/AboutCard.svelte';
	import Header from '$lib/components/common/Header.svelte';
	import aboutListText from '$lib/data/about.json';
</script>

<div class='flex flex-col items-center gap-12'>
	<Header title='about me' />
	<div
		class='grid grid-cols-1 justify-items-center gap-6 font-op font-medium text-sm text-grayWhite px-8 sm:text-base md:grid-cols-2 md:gap-10 md:w-4/5'
	>
		{#each aboutListText as about}
			<AboutCard {about} />
		{/each}
	</div>
</div>
