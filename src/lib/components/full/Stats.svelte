<script lang="ts">
    import { onMount } from "svelte";

    import StatCard from "../common/stat/StatCard.svelte";

    import { servers, players, downloads } from "$lib/stores/store";
    import getServers from "$lib/functions/getServers";
    import getPlayers from "$lib/functions/getPlayers";
    import getDownloads from "$lib/functions/getDownloads";
	
    onMount(() => {
        getServers();
        getPlayers();
        getDownloads();
    });

    let serverCount = 0;
    let playerCount = 0;
    let downloadCount = 0;

    servers.subscribe((value) => {
        serverCount = value;
    });

    players.subscribe((value) => {
        playerCount = value;
    });

    downloads.subscribe((value) => {
        downloadCount = value;
    });
</script>

<div class="w-full h-96 grid grid-flow-row">
    <StatCard title="Servers" value={serverCount}/>
</div>