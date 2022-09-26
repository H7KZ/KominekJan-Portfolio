<script lang='ts'>
	import Navbar from '$lib/components/common/navbar/Navbar.svelte';
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
