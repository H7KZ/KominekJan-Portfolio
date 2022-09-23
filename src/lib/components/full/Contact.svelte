<script lang="ts">
	import LoadingCircle from '$lib/components/LoadingCircle.svelte';

	import contactDataBackup from '$lib/data/contact.json';

	let contactData: any = {
		"header": "",
		"description": "",
		"contacts": [
		],
		"picture": ""
	};

	fetch('https://raw.githubusercontent.com/H7KZ/portfolio-cms/main/contact/contact.json')
		.then((response) => response.json())
		.then((data) => contactData = data)
		.catch(() => {
			contactData = contactDataBackup;
		});
</script>

<div class='h-full min-h-screen w-full flex flex-col items-center'>
	<div
		class='w-4/5 max-w-6xl mt-32 px-5 py-3 rounded-xl border-4 bg-[#1d1d1d] border-YellowGreen flex flex-row justify-items-center gap-12 sm:px-10 sm:py-6 md:rounded-3xl md:border-8 md:px-28 md:py-20'
	>
		{#if !contactData}
			<div class='flex w-full h-full items-center justify-center'>
				<LoadingCircle />
			</div>
		{/if}

		<div class="w-full h-full flex flex-col items-start gap-4 lg:w-1/2">
			<h1
			class="font-ms font-bold text-2xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase md:text-3xl xl:text-4xl"
			>
				{contactData.header}
			</h1>
			<p class="font-op font-medium text-base text-grayWhite">
				{contactData.description}
			</p>
			<div class="grid grid-cols-4 gap-3 text-[#fff]">
				{#each contactData.contacts as contact}
					<a href={contact.href} class="flex justify-center items-center text-grayWhite transition-all hover:text-YellowGreen">
						{@html contact.icon}
					</a>
				{/each}
			</div>
		</div>
		
		<div class="hidden lg:block lg:w-1/2">
			<img
				alt="contact_pic"
				class="h-full object-cover hidden rounded-2xl lg:block"
				src={contactData.picture}
			/>
		</div>
	</div>
</div>
