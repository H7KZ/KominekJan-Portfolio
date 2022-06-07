<script lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/css';

	let projectList = [
		{
			title: 'Frontend for crypto site',
			description:
				'A site where I created landing page, login & singup page and dashboard. This entire job was done in framework Svelte and CSS framework TailwindCSS. Everything on the site is responsive and easily editable.',
			image: '/projects/cryptolounge.webp',
			isLink: false,
			link: ''
		},
		{
			title: 'Frontend & backend of chat application',
			description:
				'A final school project for subject programming. This project was made with Typescript, MongoDB, ExpressJS, Svelte, TailwindCSS.',
			image: '/projects/chatapp.webp',
			isLink: true,
			link: 'https://chat.kominekjan.cz/',
			linkName: 'chat.kominekjan.cz'
		},
		{
			title: 'Admin role minecraft plugin',
			description:
				'A minecraft plugin that allows players to change from normal mode to admin mode. It saves the player inventory, armor, experiences etc. and then gives it back when player changes to the normal mode. It has an own configuration to specify which fields to save, to what gamemode to change. This plugin works with luckPerms and EssentialsX/EssentialsX Chat.',
			image: '/projects/minecraft.webp',
			isLink: true,
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
		<p class="font-op text-xl text-grayWhite capitalize md:text-3xl">(carousel)</p>
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
						<div class="flex flex-col gap-3">
							<img
								src={project.image}
								alt=""
								class="border-t-2 border-l-2 p-2 border-[#cbff6ab2]"
							/>
							<div class="border-b-2 border-r-2 p-2 border-[#cbff6ab2]">
								<h1 class="font-semibold text-xl text-[#cbff6a]">{project.title}</h1>
								<p class="font-op text-sm text-grayWhite">
									{project.description}
								</p>
								{#if project.isLink}
									<a href={project.link} class="text-sm text-grayWhite"
										><span class="font-medium text-base text-[#cbff6a]">Link:</span>
										<span class="underline">{project.linkName}</span></a
									>
								{/if}
							</div>
						</div>
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>
</div>
