import { players } from '$lib/stores/store';

import { watchedPlayers } from '$lib/data/stats';

export default function getPlayers() {
    getPlayersInterval();
    setInterval(getPlayersInterval, 1000 * 60);
}

function getPlayersInterval() {
    let current = 0;
    watchedPlayers.forEach(async plugin => {
        await fetch(plugin)
        .then(res => {
            res.json().then(data => {
                current += data[data.length - 1][1];

                players.set(current);
            });
        });
    });
}