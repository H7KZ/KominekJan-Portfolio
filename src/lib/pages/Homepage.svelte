<script lang="ts">
	import { onMount } from 'svelte';
	import ParallaxBackground from '$lib/components/ParallaxBackground.svelte';
	import ProjectArrowLink from '$lib/components/ProjectArrowLink.svelte';
	import plugins from '$lib/data/byteMdPlugins';

	import { Viewer } from 'bytemd';

	let value;

	onMount(async () => {
		const reader = new FileReader;
		value = await fetch("https://hackmd.io/e3f8nAf-Ru6P5QoxhyHkdw").then(async (r) => {
			return reader.readAsText(await r.blob(), "utf-8");
		})
	});
</script>

<div class="top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8">
	<h1
		class="min-w-max h-full font-ms font-bold text-xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-2xl md:text-3xl lg:text-4xl"
	>
		<span class="text-grayWhite">Hi, my name is</span>&nbsp;&nbsp;<span
			class="text-5xl bg-gradient-to-tr from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl"
			>Jan</span
		><br />
		<span class="text-grayWhite">I am a freelance</span><br />
		Front-end Developer <span class="text-grayWhite">&</span><br />
		Minecraft Plugin Developer<span class="text-grayWhite">.</span>
	</h1>
	<Viewer value={value} plugins={plugins} />
	<ProjectArrowLink />
</div>
<ParallaxBackground />
