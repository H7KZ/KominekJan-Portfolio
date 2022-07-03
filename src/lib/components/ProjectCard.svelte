<script lang="ts">
	export let image = '';
	export let title = '';
	export let description = '';
	export let link = '';
</script>

<div class="font-ms bg-[#292929] transition-all hover:scale-105">
	<div class="flex flex-col gap-2">
		<img alt={image} src={image} />
		<div class="p-2 pb-4 flex flex-col gap-2">
			<h1 class="font-semibold text-xl text-YellowGreen">{title}</h1>
			<p class="font-op text-sm text-grayWhite">
				{description}
			</p>
			{#if link}
				<a href={link} class="text-sm text-grayWhite">
					<span class="underline text-YellowGreen">{link.split('//')[1]}</span>
				</a>
			{/if}
		</div>
	</div>
</div>
