import fs from 'fs';

export default function readMd(filePath: string) {
    return fs.readFileSync(filePath, 'utf-8');
}