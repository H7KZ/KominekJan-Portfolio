<script lang='ts'>
	import navbarItems from '$lib/data/navbar';
</script>

{#each navbarItems as navbarLink}
	<li class='m-3'><a href={navbarLink.link} on:click>{navbarLink.name}</a></li>
{/each}
