<script lang="ts">
	export let image = null;
	export let video = null;
	export let title = '';
	export let description = '';
	export let link = '';
	export let linkName = '';
</script>

<div class="font-ms bg-[#292929] transition-all hover:scale-105">
	<div class="flex flex-col gap-2">
		{#if image}
		<img alt={image} src={image} />
		{:else if video}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video controls>
			<source src={video} type="video/mp4" />
		</video>
		{/if}
		
		<div class="p-2 pb-4 flex flex-col gap-2">
			<h1 class="font-semibold text-xl text-YellowGreen">{title}</h1>
			<p class="font-op text-sm text-grayWhite">
				{description}
			</p>
			{#if link}
				<a href={link} class="text-sm text-grayWhite">
					<span class="underline text-YellowGreen">{linkName}</span>
				</a>
			{/if}
		</div>
	</div>
</div>
