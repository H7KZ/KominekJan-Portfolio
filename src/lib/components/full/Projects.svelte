<script lang='ts'>
	import Header from '$lib/components/common/Header.svelte';
	import ProjectColumn from '$lib/components/common/project/ProjectColumn.svelte';
</script>

<div class='w-full flex flex-col gap-8 items-center'>
	<Header title='my projects' />
	<div class='w-5/6 max-w-5xl flex flex-col items-center gap-12 sm:flex-row sm:items-start'>
		<ProjectColumn />
	</div>
</div>
