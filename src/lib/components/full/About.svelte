<script lang="ts">
	import { onMount } from 'svelte';

	import Axios from 'axios';

	import AboutCard from '$lib/components/common/about/AboutCard.svelte';
	import Header from '$lib/components/common/Header.svelte';
	import aboutListBackup from '$lib/data/about.json';
	import { APIURL } from '$lib/data/common';
	
	let aboutListData: any = aboutListBackup;

	let aboutList: any = [];

	let aboutCol1 = [];

	let aboutCol2 = [];

	onMount(async () => {
		await Axios.get(APIURL + "/data/about")
		.then((res: any) => {
			aboutListData = res.data;
		})
		.catch(() => {
			aboutListData = aboutListBackup;
		});

		for (let i = 0; i < aboutListData.length; i++) {
			if (i % 2 == 0 || i == 0) {
				aboutCol1.push(aboutListData[i]);
			} else {
				aboutCol2.push(aboutListData[i]);
			}
		}

		aboutList = [aboutCol1, aboutCol2];
	});
</script>

<div class="w-full flex flex-col items-center gap-12">
	<Header title="about me" />
	
	<div class="flex flex-col gap-12 font-op font-medium text-sm text-grayWhite md:px-8 sm:text-base md:flex-row md:justify-center md:gap-16">
		{#each aboutList as aboutListColumn}
			<div class="flex flex-col justify-center gap-12 md:gap-16 md:justify-start">
				{#each aboutListColumn as about}
					<div class="w-full flex justify-center">
						<AboutCard {about} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
