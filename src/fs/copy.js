import {readdir, copyFile, mkdir} from 'node:fs/promises'
import {resolve, dirname, sep} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files") + sep;
const destination = resolve(dirname(__filename), "./files_copy") + sep;

const copy = async () => {
    try {
        const files = await readdir(source);
        await mkdir(destination);
        for (let file of files) {
            copyFile(source + file, destination + file)
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
