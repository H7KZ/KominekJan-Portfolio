<script>
	import Homepage from '/src/components/fullComponent/Homepage.svelte';

	import About from '/src/components/fullComponent/About.svelte';

	import Skills from '/src/components/fullComponent/Skills.svelte';

	import Projects from '/src/components/fullComponent/Projects.svelte';
</script>

<div class="pb-24">
	<section id="home">
		<Homepage />
	</section>

	<section id="about">
		<About />
	</section>

	<section id="skills">
		<Skills />
	</section>

	<section id="projects">
		<Projects />
	</section>
</div>
