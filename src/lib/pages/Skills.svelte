<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SkillText from '$lib/components/SkillText.svelte';
	import GraphChart from '$lib/components/GraphChart.svelte';

	import skillList from '$lib/data/skills';
</script>

<div class="w-full h-full flex flex-col gap-8">
	<Header name="my skills" />
	<div class="w-full flex flex-col gap-8 justify-center items-center sm:flex-row">
		<div class="w-full flex justify-center sm:w-72 sm:h-72 lg:w-96 lg:h-96">
			<div class="flex flex-col gap-4">
				<h3
					class="font-ms font-semibold text-lg bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase"
				>
					Skills legend:
				</h3>
				<ul class="flex flex-col gap-3 font-op font-semibold text-sm text-grayWhite">
					{#each skillList as skill}
						<SkillText
							skillGroup={skill.skillGroup}
							between={skill.between}
							technology={skill.technology}
						/>
					{/each}
				</ul>
			</div>
		</div>
		<GraphChart />
	</div>
</div>
