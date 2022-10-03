<script lang="ts">
	import { onMount } from 'svelte';

	import Axios from 'axios';
	
	import ProjectArrowLink from '$lib/components/common/project/ProjectArrowLink.svelte';
	import homepageBackup from '$lib/data/homepage.json';
	import { APIURL } from '$lib/data/common';
	
	let homepageData: any = homepageBackup.home;
	
	onMount(async () => {
		await Axios.get(APIURL + "/data/home")
		.then((res: any) => {
			homepageData = res.data.home;
		})
		.catch(() => {
			homepageData = homepageBackup.home;
		});
	});
</script>

<div class="top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8">
	<div class="flex justify-center">
		{@html homepageData}
	</div>

	<ProjectArrowLink />
</div>
