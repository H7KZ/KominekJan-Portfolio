<script lang="ts">
	import Homepage from '/src/lib/pages/Homepage.svelte';

	import About from '/src/lib/pages/About.svelte';

	import Skills from '/src/lib/pages/Skills.svelte';

	import Projects from '/src/lib/pages/Projects.svelte';

	import Footer from '/src/lib/components/Footer.svelte';
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
