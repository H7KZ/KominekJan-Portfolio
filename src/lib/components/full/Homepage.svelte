<script lang='ts'>
	import ParallaxBackground from '$lib/components/common/ParallaxBackground.svelte';
	import ProjectArrowLink from '$lib/components/common/project/ProjectArrowLink.svelte';
	import homepageText from '$lib/data/homepage';
</script>

<div class='top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8'>
	<div class="flex justify-center">
		{@html homepageText}
	</div>
	
	<ProjectArrowLink />
</div>
