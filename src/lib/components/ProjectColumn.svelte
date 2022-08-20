<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import projectsDataListBackup from '$lib/data/projects.json';
	import LoadingCircle from '$lib/components/loadingCircle.svelte';

	let projectDataList = [];

	let projectList = [];

	fetch('https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/projects/projects.json')
	.then((response) => response.json())
	.then((data) => {
		projectDataList = data;
		let projectListColumn1 = [];

		let projectListColumn2 = [];

		for (let i = 0; i < projectDataList.length; i++) {
			if (i % 2 == 0 || i == 0) {
				projectListColumn1.push(projectDataList[i]);
			} else {
				projectListColumn2.push(projectDataList[i]);
			}
		}

		projectList = [projectListColumn1, projectListColumn2];
	})
	.catch(() => {
		projectDataList = projectsDataListBackup;

		let projectListColumn1 = [];

		let projectListColumn2 = [];

		for (let i = 0; i < projectDataList.length; i++) {
			if (i % 2 == 0 || i == 0) {
				projectListColumn1.push(projectDataList[i]);
			} else {
				projectListColumn2.push(projectDataList[i]);
			}
		}

		projectList = [projectListColumn1, projectListColumn2];
	});
</script>

{#each projectList as projectListColumn}
	<div class="flex flex-col gap-12 w-5/6 sm:w-1/2">
		{#each projectListColumn as project}
			<ProjectCard
				image={project.image}
				video={project.video}
				title={project.title}
				description={project.description}
				link={project.link}
				linkName={project.linkName}
			/>
		{/each}
	</div>
{/each}
