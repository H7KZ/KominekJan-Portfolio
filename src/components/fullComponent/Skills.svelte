<script lang="ts">
    import Chart from 'chart.js/auto/auto.js';

    const myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: chart.data,
					datasets: [
						{
							data: chart.data,
							label: '',
							borderColor: color,
						},
					],
				},
				options: {
					responsive: false,
					scales: {
						x: {
							grid: {
								display: false,
								drawBorder: false,
							},
							ticks: {
								display: false,
							},
						},
						y: {
							grid: {
								display: false,
								drawBorder: false,
							},
							ticks: {
								display: false,
							},
						},
					},
					plugins: {
						legend: {
							display: false,
						},
					},
					elements: {
						point: {
							radius: 0,
						},
					},
				},
			});
</script>