import { onMount } from 'svelte';

let fs;

onMount(async () => {
    fs = (await import('node:fs')).default;
})

export default function readMd(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8');
}