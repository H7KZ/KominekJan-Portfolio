<script lang="ts">
	import Chart from 'chart.js/auto/auto.js';

	import { onMount } from 'svelte';

    export let skillLabels = [];
    export let skillData = [];

	onMount(() => {
		let grd = document
			.getElementById('chart')
			.getContext('2d')
			.createLinearGradient(0, 150, 150, 0);

		grd.addColorStop(0, '#EFFF3A');
		grd.addColorStop(1, '#00ffc3d2');

		const myChart = new Chart(document.getElementById('chart'), {
			type: 'radar',
			data: {
				labels: skillLabels,
				datasets: [
					{
						label: 'Skills',
						data: skillData,
						backgroundColor: '#00000000',
						borderColor: grd,
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
	<canvas id="chart" />
</div>
