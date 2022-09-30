<script lang='ts'>
	import Navbar from '$lib/components/common/navbar/Navbar.svelte';

	import ParallaxBackground from '$lib/components/common/ParallaxBackground.svelte';
</script>

<div>
	<nav>
		<Navbar />
	</nav>
	<slot />
	<ParallaxBackground />
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
