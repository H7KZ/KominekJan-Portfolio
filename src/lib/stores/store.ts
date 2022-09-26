import { writable } from "svelte/store";

export let servers = writable(0);
export let players = writable(0);
export let downloads = writable(0);