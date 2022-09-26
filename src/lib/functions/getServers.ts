import { servers } from '$lib/stores/store';

import { watchedServers } from '$lib/data/stats';

export default function getServers() {
    getServersInterval();
    setInterval(getServersInterval, 1000 * 60);
}

function getServersInterval() {
    let record = 0;
    watchedServers.forEach(async plugin => {
        await fetch(plugin)
        .then(res => {
            res.json().then(data => {
                let recordOne = 0;
                for (let i = 0; i < data.length; i++) {
                    recordOne = data[i][1] > record ? data[i][1] : record;
                }

                record += recordOne;

                servers.set(record);
            });
        });        
    });
}