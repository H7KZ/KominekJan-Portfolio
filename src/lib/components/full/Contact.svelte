<script lang="ts">
	import contactData from '$lib/data/contact.json';
</script>

<div class='h-full min-h-screen w-full flex flex-col items-center justify-center'>
	<div class="w-3/4 h-full mb-72 flex flex-col items-start gap-4 lg:w-1/2">
		<h1
		class="font-ms font-bold text-4xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase md:text-5xl xl:text-6xl"
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
</div>
