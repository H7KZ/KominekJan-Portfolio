<script lang="ts">
	import ParallaxBackground from '$lib/components/ParallaxBackground.svelte';
	import ProjectArrowLink from '$lib/components/ProjectArrowLink.svelte';
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
	<ProjectArrowLink />
</div>
<ParallaxBackground />
