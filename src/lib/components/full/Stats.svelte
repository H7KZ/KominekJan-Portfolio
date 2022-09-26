<script lang="ts">
    import { servers, players, downloads } from "$lib/stores/store";
    import getServers from "$lib/functions/getServers";
    import getPlayers from "$lib/functions/getPlayers";
    import getDownloads from "$lib/functions/getDownloads";
	import { onMount } from "svelte";

    onMount(() => {
        getServers();
        getPlayers();
        getDownloads();
    });

    servers.subscribe((value) => {
        console.log(value);
    });

    players.subscribe((value) => {
        console.log(value);
    });

    downloads.subscribe((value) => {
        console.log(value);
    });
</script>