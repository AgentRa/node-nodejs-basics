import {readdir} from 'node:fs/promises'
import {resolve, dirname, sep} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files") + sep;

const list = async () => {
    try {
        console.log('files', await readdir(source))
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await list();