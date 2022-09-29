import { downloads } from '$lib/stores/store';

import { watchedDownloads } from '$lib/data/stats';
import { watchingInterval } from '$lib/data/common';

export default function getDownloads() {
    getDownloadsInterval();
    setInterval(getDownloadsInterval, watchingInterval);
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