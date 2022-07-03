<script lang="ts">
	import Homepage from '$lib/pages/Homepage.svelte';

	import About from '$lib/pages/About.svelte';

	import Skills from '$lib/pages/Skills.svelte';

	import Projects from '$lib/pages/Projects.svelte';

	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<section class="pt-48 md:pt-56" id="home">
		<Homepage />
	</section>

	<section class="pt-16" id="about">
		<About />
	</section>

	<section class="pt-32" id="skills">
		<Skills />
	</section>

	<section class="pt-32" id="projects">
		<Projects />
	</section>

	<section class="pt-24">
		<Footer />
	</section>
</div>
