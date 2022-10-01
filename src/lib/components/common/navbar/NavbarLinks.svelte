<script lang="ts">
	import navbarItems from '$lib/data/navbar';
</script>

{#each navbarItems as navbarLink}
	<div>
		<a href={navbarLink.link} class="transition-colors ease-out duration-150 hover:text-[#c2ff4f]">
			{navbarLink.name}
		</a>
	</div>
{/each}
