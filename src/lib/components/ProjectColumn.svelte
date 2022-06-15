<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import projectDataList from '$lib/data/projects';

	let projectListColumn1 = [];

	let projectListColumn2 = [];

	for (let i = 0; i < projectDataList.length; i++) {
		if (i % 2 == 0 || i == 0) {
			projectListColumn1.push(projectDataList[i]);
		} else {
			projectListColumn2.push(projectDataList[i]);
		}
	}

	const projectList = [projectListColumn1, projectListColumn2];
</script>

{#each projectList as projectListColumn}
	<div class="flex flex-col gap-12 w-5/6 sm:w-1/2">
		{#each projectListColumn as project}
			<ProjectCard
				image={project.image}
				title={project.title}
				description={project.description}
				link={project.link}
			/>
		{/each}
	</div>
{/each}
