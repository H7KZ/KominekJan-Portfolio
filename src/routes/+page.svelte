<script lang='ts'>
	import Homepage from '$lib/components/full/Homepage.svelte';

	import About from '$lib/components/full/About.svelte';

	import Skills from '$lib/components/full/Skills.svelte';

	import Stats from '$lib/components/full/Stats.svelte';

	import Projects from '$lib/components/full/Projects.svelte';

	import Footer from '$lib/components/common/footer/Footer.svelte';
</script>

<div>
	<section class='pt-48 md:pt-56' id='home'>
		<Homepage />
	</section>

	<section class='pt-6' id='about'>
		<About />
	</section>

	<section class='pt-32' id='skills'>
		<Skills />
	</section>

	<section class='pt-32' id='stats'>
		<Stats />
	</section>

	<section class='pt-32' id='projects'>
		<Projects />
	</section>

	<section class='pt-24'>
		<Footer />
	</section>
</div>
