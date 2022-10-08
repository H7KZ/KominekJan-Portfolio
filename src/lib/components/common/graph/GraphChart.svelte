<script lang="ts">
	import { onMount } from 'svelte';

	import Axios from 'axios';

	import Chart from 'chart.js/auto/auto';
	import skillBackup from '$lib/data/skills.json';
	import { APIURL } from '$lib/data/common';
	import Loading from '$lib/components/common/Loading.svelte';

	let skillData: any = skillBackup;

	let skillNames = [];
	let skillList = [];

	let ctx: HTMLCanvasElement;

	let loaded = false;

	onMount(async () => {
		await Axios.get(APIURL + "/data/skills")
		.then((res: any) => {
			skillData = res.data;
			loaded = true;
		})
		.catch(() => {
			skillData = skillBackup;
			loaded = true;
		});

		skillData.forEach((skill: { skill: any; points: any; }) => {
			skillNames.push(skill.skill);
			skillList.push(skill.points);
		});

		let gradient = ctx.getContext('2d').createLinearGradient(0, 150, 150, 0);
		gradient.addColorStop(0, '#EFFF3A');
		gradient.addColorStop(1, '#00ffc3d2');

		new Chart(ctx, {
			type: 'radar',
			data: {
				labels: skillNames,
				datasets: [
					{
						label: 'Skills',
						data: skillList,
						backgroundColor: '#00000000',
						borderColor: gradient,
						pointBackgroundColor: '#EFFF3A',
						pointHoverBorderColor: '#EFFF3A',
						pointRadius: 0
					}
				]
			},
			options: {
				scale: {
					min: 0,
					max: 50
				},
				scales: {
					r: {
						angleLines: {
							display: false
						},
						grid: {
							color: 'rgba(94, 94, 94, 0.8)'
						},
						pointLabels: {
							color: 'rgb(239, 255, 58)',
							font: {
								size: 14,
								family: 'Montserrat'
							}
						},
						ticks: {
							maxTicksLimit: 8,
							display: false
						}
					}
				},
				plugins: {
					legend: {
						display: false,
						labels: {
							font: {
								size: 14
							}
						}
					}
				}
			}
		});
	});
</script>

<div class="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
	<Loading loading={loaded} />
	<canvas bind:this={ctx} id="chart"></canvas>
</div>
