<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';

	let projectList = [
		{
			title: 'Frontend for crypto site',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			image: '/projects/cryptolounge.png',
			link: '',
			linkName: '- none -'
		},
		{
			title: 'Frontend & backend of chat application',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			image: '/projects/chatapp.png',
			link: 'https://chat.kominekjan.cz/',
			linkName: 'chat.kominekjan.cz'
		},
		{
			title: 'Admin role minecraft plugin',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			image: '/projects/minecraft.png',
			link: 'https://github.com/H7KZ/AdminRole',
			linkName: 'github.com/H7KZ/AdminRole'
		}
	];
</script>

<div class="w-full flex flex-col gap-8 items-center">
    <div class="w-full flex flex-col items-center text-4xl md:text-5xl">
		<h1
			class="text-center font-ms font-semibold bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase"
		>
			My Projects
		</h1>
        <p class="font-op text-xl text-grayWhite md:text-3xl">
            (It is a carousel)
        </p>
	</div>
	<div class="w-5/6 max-w-5xl">
		<Swiper
			spaceBetween={48}
			loop={true}
			breakpoints={{
				160: {
					slidesPerView: 1,
					spaceBetween: 16
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 48
				}
			}}
		>
			{#each projectList as project}
				<SwiperSlide>
					<div class="font-ms">
						<div class="flex flex-col gap-2">
							<img src={project.image} alt="" />
							<div>
								<h1 class="font-semibold text-xl text-[#cbff6a]">{project.title}</h1>
								<p class="font-op text-sm text-grayWhite">
									<span class="font-ms font-medium text-base text-[#cbff6a]">Desc:</span>
									{project.description}
								</p>
								<a href={project.link} class="text-sm text-grayWhite"
									><span class="font-medium text-base text-[#cbff6a]">Link:</span>
									<span class="underline">{project.linkName}</span></a
								>
							</div>
						</div>
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>
</div>
