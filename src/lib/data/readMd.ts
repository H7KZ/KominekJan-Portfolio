import fs from 'node:fs';

export default function readMd(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8');
}