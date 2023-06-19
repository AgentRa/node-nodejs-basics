import {rm} from 'node:fs/promises'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const destination = resolve(dirname(__filename), "./files/fileToRemove.txt");

const remove = async () => {
    try {
        await rm(destination)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();