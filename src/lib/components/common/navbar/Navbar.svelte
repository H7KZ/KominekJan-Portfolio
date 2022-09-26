<script lang='ts'>
	import MobileNavbar from './MobileNavbar.svelte';
	import NavbarLinks from './NavbarLinks.svelte';

	let fillColor = '#C1C8D8';

	let showMobileNavbar = false;
</script>

<div
	class='w-full h-16 fixed flex flex-row items-center p-2 md:px-8 md:py-4 lg:px-32 lg:py-8 xl:px-48 lx:py-12 bg-[#161616] bg-opacity-70 z-50'
>
	<div class='w-full hidden md:flex flex-row items-center justify-between font-ms text-[#eaf2ff]'>
		<div class='font-bold text-grayWhite text-2xl uppercase'>
			<a href='/'>
				<h1>komínekjan</h1>
			</a>
		</div>
		<div class='flex gap-6 items-center font-medium text-xl'>
			<NavbarLinks />

			<a class='transition-colors ease-out duration-150 hover:text-[#c2ff4f]' href='/contact'>
				<button class='border-2 border-[#c2ff4f] rounded-md font-medium px-3 py-0.5'>
					Contact
				</button>
			</a>
		</div>
	</div>
	<div class='w-full flex items-center justify-end md:hidden'>
		<svg
			class='h-12 cursor-pointer'
			on:click={() => (showMobileNavbar = true)}
			style='fill: {fillColor};'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z' />
		</svg>
	</div>
</div>
<MobileNavbar on:click={() => (showMobileNavbar = false)} {showMobileNavbar} />
