<script lang="ts">
	import Navbar from '$lib/components/common/navbar/Navbar.svelte';

	import Development from '$lib/components/full/Development.svelte';
</script>

<div>
	<nav>
		<Navbar />
	</nav>
	<Development />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
