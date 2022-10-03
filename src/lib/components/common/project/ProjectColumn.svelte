<script lang="ts">
	import { onMount } from 'svelte';

	import Axios from 'axios';

	import ProjectCard from '$lib/components/common/project/ProjectCard.svelte';
	import projectListBackup from '$lib/data/projects.json';
	import { APIURL } from '$lib/data/common';

	let projectListData: any = projectListBackup;

	let projectList: any = [];

	let projectListColumn1 = [];

	let projectListColumn2 = [];

	onMount(async () => {
		await Axios.get(APIURL + "/data/projects")
		.then((res: any) => {
			projectListData = res.data;
		})
		.catch(() => {
			projectListData = projectListBackup;
		});

		for (let i = 0; i < projectListData.length; i++) {
			if (i % 2 == 0 || i == 0) {
				projectListColumn1.push(projectListData[i]);
			} else {
				projectListColumn2.push(projectListData[i]);
			}
		}

		projectList = [projectListColumn1, projectListColumn2];
	});
</script>

{#each projectList as projectListColumn}
	<div class="flex flex-col gap-12 w-full sm:w-1/2">
		{#each projectListColumn as project}
			<ProjectCard
				image={project.image}
				video={project.video}
				title={project.title}
				description={project.description}
				link={project.link}
				github={project.github}
			/>
		{/each}
	</div>
{/each}
