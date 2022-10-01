<script lang="ts">
	import Axios from 'axios';
	import { APIURL, watchingInterval } from '$lib/data/common';
	import { onMount } from 'svelte';

	export let title: string;
	export let url: string;

	let value: number = 0;

	onMount(() => {
		getInterval();
		const intervalID = setInterval(getInterval, watchingInterval);

		window.onbeforeunload = () => {
			clearInterval(intervalID);
		};
	});

	async function getInterval() {
		if (window.location.pathname != '/') return;
		await Axios.get(APIURL + url)
			.then((res) => {
				value = res.data;
			})
			.catch(() => {
				value = 0;
			});
	}
</script>

<div class="w-full flex flex-col justify-center items-center text-grayWhite">
	<div class="w-full flex flex-col items-center text-4xl md:text-5xl">
		<h1 class="text-center font-ms font-semibold text-grayWhite uppercase">
			{value}
		</h1>
	</div>
	<div class="w-full flex flex-col items-center text-xl md:text-2xl">
		<h1 class="text-center font-ms font-semibold text-[#b6b6b6] uppercase">
			{title}
		</h1>
	</div>
</div>
