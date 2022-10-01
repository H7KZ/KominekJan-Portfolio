<script lang="ts">
	import Header from '../common/Header.svelte';
	import StatsCard from '../common/stats/StatsCard.svelte';
	import SubHeader from '../common/SubHeader.svelte';
</script>

<div class="w-full flex flex-col gap-8 items-center">
	<div class="w-full">
		<Header title="statistics" />
		<SubHeader title="Minecraft plugins" />
	</div>
	<div class="w-5/6 max-w-5xl grid grid-cols-1 gap-16 justify-center items-center sm:grid-cols-2 md:grid-cols-3">
		<div class="flex justify-center items-center">
			<StatsCard title="SERVERS" url="/stats/servers" />
		</div>
		<div>
			<StatsCard title="PLAYERS" url="/stats/players" />
		</div>
		<div>
			<StatsCard title="DOWNLOADS" url="/stats/downloads" />
		</div>
	</div>
</div>
