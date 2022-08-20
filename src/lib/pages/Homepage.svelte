<script lang="ts">
	import LoadingCircle from '$lib/components/LoadingCircle.svelte';
	import ParallaxBackground from '$lib/components/ParallaxBackground.svelte';
	import ProjectArrowLink from '$lib/components/ProjectArrowLink.svelte';
	import homepageBackup from '$lib/data/homepage';

	let value: string = "";

	fetch("https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/homepage/homepage.md")
    .then(response => response.blob())
    .then(blob => blob.text())
    .then(markdown => {
      value = markdown;
    })
	.catch(() => {
		value = homepageBackup;
	});
</script>

<div class="top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8">
	{#if value == ""}
	<LoadingCircle />
	{/if}
	{@html value}
	<ProjectArrowLink />
</div>
<ParallaxBackground />
