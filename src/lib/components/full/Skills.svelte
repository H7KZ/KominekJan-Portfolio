<script lang='ts'>
	import Header from '$lib/components/common/navbar/Header.svelte';
	import GraphChart from '$lib/components/GraphChart.svelte';
	import skillDataBackup from '$lib/data/skills.json';
	import LoadingCircle from '$lib/components/LoadingCircle.svelte';

	let skillData = [];

	fetch('https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/skills/skills.json')
		.then((response) => response.json())
		.then((data) => {
			skillData = data;
		})
		.catch(() => {
			skillData = skillDataBackup;
		});
</script>

<div class='w-full h-full flex flex-col gap-8'>
	<Header name='my skills' />
	{#if skillData.length == 0}
		<div class='flex items-center justify-center'>
			<LoadingCircle />
		</div>
	{/if}
	<div class='w-full flex flex-col gap-8 justify-center items-center sm:flex-row'>
		<div class='w-full flex justify-center sm:w-72 sm:h-72 lg:w-96 lg:h-96'>
			<div class='flex flex-col gap-4'>
				<h3
					class='font-ms font-semibold text-lg bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase'
				>
					Skills legend:
				</h3>
				<ul class='flex flex-col gap-3 font-op font-semibold text-sm text-grayWhite'>
					{#each skillData as skill}
						<li>
							{@html skill.text}
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<GraphChart />
	</div>
</div>
