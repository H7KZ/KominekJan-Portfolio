<script>
	import FooterIcons from '../../FooterIcons.svelte';
</script>

<div class='flex flex-col items-center font-ms text-[#fff]'>
	<div class='flex gap-5'>
		<FooterIcons />
	</div>
	<div
		class='flex flex-col gap-2	items-center text-center capitalize pt-6 text-[#c2ff4f] sm:flex-row sm:gap-6'
	>
		<a class='transition-colors ease-out duration-150 text-[#fff] hover:text-[#c2ff4f]' href='/'>
			Home
		</a>
		<p class='hidden sm:block'>|</p>
		<div class='w-1/2 h-0.5 bg-[#c2ff4f] sm:hidden' />
		<a
			class='transition-colors ease-out duration-150 text-[#fff] hover:text-[#c2ff4f]'
			href='/contact'>Contact</a
		>
		<p class='hidden sm:block'>|</p>
		<div class='w-1/2 h-0.5 bg-[#c2ff4f] sm:hidden' />
		<a
			class='transition-colors ease-out duration-150 text-[#fff] hover:text-[#c2ff4f]'
			href='https://github.com/H7KZ/H7KZ-Portfolio-upgraded'>Source code</a
		>
		<p class='hidden sm:block'>|</p>
		<div class='w-1/2 h-0.5 bg-[#c2ff4f] sm:hidden' />
		<a
			class='transition-colors ease-out duration-150 text-[#fff] hover:text-[#c2ff4f]'
			href='https://www.linkedin.com/in/jan-kom%C3%ADnek-36b4b7209/'>More about me</a
		>
	</div>
	<div class='py-10'>
		<h2 class='text-[#c2c2c2]'>&copy; 2022 Komínek Jan</h2>
	</div>
</div>
