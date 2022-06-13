<script lang="ts">
	const projectListColumn1 = [
		{
			title: 'Frontend for crypto site',
			description:
				'A site where I created landing page, login & singup page and dashboard. This entire job was done in framework Svelte and CSS framework TailwindCSS. Everything on the site is responsive and easily editable.',
			image: '/projects/cryptolounge.webp'
		},
		{
			title: 'Frontend & backend of chat application',
			description:
				'A final school project for subject programming. This project was made with Typescript, MongoDB, ExpressJS, Svelte, TailwindCSS.',
			image: '/projects/chatapp.webp',
			link: 'https://chat.kominekjan.cz/',
			linkName: 'chat.kominekjan.cz'
		}
	];

	const projectListColumn2 = [
		{
			title: 'Admin role minecraft plugin',
			description:
				'A minecraft plugin that allows players to change from normal mode to admin mode. It saves the player inventory, armor, experiences etc. and then gives it back when player changes to the normal mode. It has an own configuration to specify which fields to save, to what gamemode to change. This plugin works with luckPerms and EssentialsX/EssentialsX Chat.',
			image: '/projects/minecraft.webp',
			link: 'https://github.com/H7KZ/AdminRole',
			linkName: 'github.com/H7KZ/AdminRole'
		}
	];

	const projectList = [projectListColumn1, projectListColumn2];
</script>

<div class="w-full flex flex-col gap-8 items-center">
	<div class="w-full flex flex-col items-center text-4xl md:text-5xl">
		<h1
			class="text-center font-ms font-semibold bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase"
		>
			My Projects
		</h1>
	</div>
	<div class="w-5/6 max-w-5xl flex flex-col gap-12 sm:flex-row">
		{#each projectList as projectListColumn}
			<div class="flex flex-col gap-12">
				{#each projectListColumn as project}
					<div class="font-ms bg-[#292929] transition-all hover:scale-105">
						<div class="flex flex-col gap-2">
							<img src={project.image} alt={project.image} />
							<div class="p-2 pb-4 border-[#cbff6ab2] flex flex-col gap-2">
								<h1 class="font-semibold text-xl text-[#cbff6a]">{project.title}</h1>
								<p class="font-op text-sm text-grayWhite">
									{project.description}
								</p>
								{#if project.link}
									<a href={project.link} class="text-sm text-grayWhite">
										<span class="underline text-[#cbff6a]">{project.link.split('//')[1]}</span>
									</a>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
