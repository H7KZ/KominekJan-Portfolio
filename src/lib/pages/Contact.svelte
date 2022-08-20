<script>
	import LoadingCircle from '$lib/components/LoadingCircle.svelte';

	import contactData from '$lib/data/contact';

	let value = "";

	fetch("https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/contact/contact.md")
	.then(response => response.blob())
	.then(blob => blob.text())
	.then(markdown => {
		value = markdown;
	})
	.catch(() => {
		value = contactData;
	});
</script>

<div class="h-full min-h-screen w-full flex flex-col items-center">
	<div
		class="w-4/5 max-w-6xl mt-32 px-5 py-3 rounded-xl border-4 bg-[#1d1d1d] border-YellowGreen flex flex-row justify-items-center gap-12 sm:px-10 sm:py-6 md:rounded-3xl md:border-8 md:px-28 md:py-20"
	>
		{#if value == ""}
			<div class="flex w-full h-full items-center justify-center">
				<LoadingCircle />
			</div>
		{/if}

		{@html value}
	</div>
</div>
