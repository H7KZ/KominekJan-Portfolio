<script>
	import Navbar from '/src/components/common/Navbar.svelte';
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
