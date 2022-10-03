<script lang="ts">
	import ProjectArrowLink from '$lib/components/common/project/ProjectArrowLink.svelte';
</script>

<div class="top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8">
	<div class="flex justify-center">
		<h1 class="w-full pb-2 font-ms font-bold text-xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]">
			<span class="text-grayWhite">
				Hi, my name is
			</span>
			&nbsp;<span class="text-5xl bg-gradient-to-tr from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl">Jan</span>
			<br />
			<span class="text-grayWhite">
				I am a freelance
			</span>
			<br />
			Front-end Developer
			<span class="text-grayWhite">
				&
			</span>
			<br />
			Minecraft Plugin Developer<span class="text-grayWhite">.</span>
		</h1>
	</div>

	<ProjectArrowLink />
</div>
