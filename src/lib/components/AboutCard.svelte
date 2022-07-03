<script lang="ts">
	export let about: any;
</script>

<p class="max-w-[32rem]">
	<img alt={about.icon} class="h-10 mb-2" src={about.icon} />
	{#each about.text as sentence}
		{#if about.text.indexOf(sentence) % 2 === 0 || about.text.indexOf(sentence) === 0}
			{sentence}
		{:else}
			<span class="font-semibold italic text-YellowGreen">{sentence}</span>
		{/if}
	{/each}
</p>
