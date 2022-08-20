<script lang='ts'>
	import Chart from 'chart.js/auto/auto.js';
	import skillDatabackup from '$lib/data/skills.json';

	import { onMount } from 'svelte';

	let skillNames = [];
	let skillData = [];

	onMount(async () => {
		await fetch('https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/skills/skills.json')
			.then((response) => response.json())
			.then((data) => {
				data.forEach((skill) => {
					skillNames.push(skill.skill);
					skillData.push(skill.points);
				});
			})
			.catch(() => {
				skillDatabackup.forEach((skill) => {
					skillNames.push(skill.skill);
					skillData.push(skill.points);
				});
			});

		let grd = document
			.getElementById('chart')
			.getContext('2d')
			.createLinearGradient(0, 150, 150, 0);

		grd.addColorStop(0, '#EFFF3A');
		grd.addColorStop(1, '#00ffc3d2');

		new Chart(document.getElementById('chart'), {
			type: 'radar',
			data: {
				labels: skillNames,
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

<div class='w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96'>
	<canvas id='chart' />
</div>
