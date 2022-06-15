<script lang="ts">
	import Header from '$lib/components/Header.svelte';

	import aboutList from '$lib/data/about';
</script>

<div class="flex flex-col items-center gap-12">
	<Header name="about" />
	<div
		class="grid grid-cols-1 justify-items-center gap-6 font-op font-medium text-sm text-grayWhite px-8 sm:text-base md:grid-cols-2 md:gap-10 md:w-4/5"
	>
	{#each aboutList as about}
		<p class="max-w-[32rem]">
			<img src={about.icon} alt={about.icon} class="h-10 mb-2">
			{#each about.text as sentence}
				{#if about.text.indexOf(sentence) % 2 == 0 || about.text.indexOf(sentence) == 0}
					{sentence}
				{:else}
				<span class="font-semibold italic text-YellowGreen">{sentence}</span>
				{/if}
			{/each}
		</p>
	{/each}
	</div>
</div>
