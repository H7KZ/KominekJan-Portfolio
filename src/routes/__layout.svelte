<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
	<nav>
		<Navbar />
	</nav>
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
