<script lang='ts'>
	export let image = null;
	export let video = null;
	export let title = null;
	export let description = null;
	export let link = null;
	export let github = null;
</script>

<div class='font-ms bg-[#292929] transition-all hover:scale-105'>
	<div class='flex flex-col gap-2'>
		{#if image}
			<img alt={image} src={image} />
		{:else if video}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls>
				<source src={video} type='video/mp4' />
			</video>
		{/if}

		<div class='p-2 pb-4 flex flex-col gap-2'>
			<h1 class='font-semibold text-xl text-YellowGreen'>{title}</h1>
			<p class='pb-1 font-op text-sm text-grayWhite'>
				{description}
			</p>
			<div class="flex gap-4">
				{#if github}
					<a href={github} class='text-sm text-grayWhite transition-all hover:text-YellowGreen'>
						<i class="fa-brands fa-github fa-xl"></i>
					</a>
				{/if}
				{#if link}
				<a href={link} class='text-sm text-grayWhite transition-all hover:text-YellowGreen'>
					<i class="fa-solid fa-link fa-xl"></i>
				</a>
				{/if}
			</div>
		</div>
	</div>
</div>