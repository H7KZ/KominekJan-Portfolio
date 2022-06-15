<script lang="ts">
	import Homepage from '$lib/pages/Homepage.svelte';

	import About from '$lib/pages/About.svelte';

	import Skills from '$lib/pages/Skills.svelte';

	import Projects from '$lib/pages/Projects.svelte';

	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<section id="home" class="pt-48 md:pt-56">
		<Homepage />
	</section>

	<section id="about" class="pt-16">
		<About />
	</section>

	<section id="skills" class="pt-32">
		<Skills />
	</section>

	<section id="projects" class="pt-32">
		<Projects />
	</section>

	<section class="pt-24">
		<Footer />
	</section>
</div>
