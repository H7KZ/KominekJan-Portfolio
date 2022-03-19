<script lang="ts">
	import Chart from 'chart.js/auto/auto.js';

	import { onMount } from 'svelte';

	onMount(() => {
		let grd = document.getElementById('chart').getContext('2d').createLinearGradient(0, 150, 150, 0);
		grd.addColorStop(0, "#EFFF3A");
		grd.addColorStop(1, "#00ffc3d2");

		const myChart = new Chart(document.getElementById('chart'), {
			type: 'radar',
			data: {
				labels: ['HTML', 'CSS', 'JS', 'Svelte', 'Java', 'C#', 'HW'],
				datasets: [{
					label: 'Skills',
					data: [40, 35, 32.5, 30, 17.5, 30, 35],
					backgroundColor: '#00000000',
					borderColor: grd,
					pointBackgroundColor: '#EFFF3A',
					pointHoverBorderColor: '#EFFF3A',
					pointRadius: 0,
				}]
			},
			options: {
				scale: {
					min: 0,
					max: 50,
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
								family: "Montserrat"
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
				},
			}
		});
	});
</script>

<div class="w-full h-full flex flex-col gap-8">
	<div class="w-full flex justify-center text-4xl md:text-5xl">
		<h1
			class="font-ms font-semibold bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase"
		>
			My Skills
		</h1>
	</div>
	<div class="w-full flex flex-col gap-8 justify-center items-center sm:flex-row">
		<div class="w-full flex justify-center sm:w-72 sm:h-72 lg:w-96 lg:h-96">
			<div>
				<h3 class="font-ms font-semibold text-lg bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase">Skills legend:</h3>
				<ul class="font-op font-semibold text-base text-[#cbff6a]">
					<li>HTML - 80%</li>
					<li>CSS - 70%</li>
					<li>JS - 65%</li>
					<li>Svelte - 60%</li>
					<li>Java - 35%</li>
					<li>C# - 60%</li>
					<li>HW (Hardware) - 70%</li>
				</ul>
			</div>
		</div>
		<div class="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
			<canvas id="chart" />
		</div>
	</div>
</div>
