<script lang="ts">
	export let about: any;
</script>

<p class="max-w-[32rem] mx-4 lg:mx-10 xl:mx-16">
	<img alt={about.icon} class="h-10 mr-3 float-left" src={about.icon} />
	{@html about.text}
</p>
