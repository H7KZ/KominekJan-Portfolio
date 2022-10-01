<script lang="ts">
	export let image: string = null;
	export let video: string = null;
	export let title: string = null;
	export let description: string = null;
	export let link: string = null;
	export let github: string = null;
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
			<p class="pb-1 font-op text-sm text-grayWhite">
				{description}
			</p>
			<div class="flex gap-4">
				{#if github}
					{#each github as g}
						<a href={g} class="text-sm text-grayWhite transition-all hover:text-YellowGreen">
							<i class="fa-brands fa-github fa-xl"></i>
						</a>
					{/each}
				{/if}
				{#if link}
					{#each link as l}
						<a href={l} class="text-sm text-grayWhite transition-all hover:text-YellowGreen">
							<i class="fa-solid fa-link fa-xl"></i>
						</a>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
