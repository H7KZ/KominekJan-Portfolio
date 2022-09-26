import { downloads } from '$lib/stores/store';

import { watchedDownloads } from '$lib/data/stats';

export default function getDownloads() {
    getDownloadsInterval();
    setInterval(getDownloadsInterval, 1000 * 60);
}

function getDownloadsInterval() {
    let total = 0;
    watchedDownloads.forEach(async plugin => {
        await fetch(plugin)
        .then(res => {
            res.json().then(data => {
                total += data.downloads;

                downloads.set(total);
            });
        });
    });
}