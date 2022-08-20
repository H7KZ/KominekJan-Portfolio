<script lang='ts'>
	export let about: any;
</script>

<p class='max-w-[32rem]'>
	<img alt={about.icon} class='h-10 mb-2' src={about.icon} />
	{@html about.text}
</p>
