import {readFile} from 'node:fs/promises';
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/fileToRead.txt");

const read = async () => {
    try {
        console.log(await readFile(source, {encoding: 'utf-8'}))
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await read();