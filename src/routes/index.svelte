<script>
	import Homepage from '/src/components/fullComponent/Homepage.svelte';

	import About from '/src/components/fullComponent/About.svelte';

	import Skills from '/src/components/fullComponent/Skills.svelte';

	import Projects from '/src/components/fullComponent/Projects.svelte';

	import Footer from '/src/components/common/Footer.svelte';
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
