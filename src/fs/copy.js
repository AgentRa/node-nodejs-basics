import {readdir, copyFile, mkdir} from 'node:fs/promises'
import {createAbsolutePath} from "../utils/createAbsolutePath.js";

const copy = async () => {
    const source = createAbsolutePath(import.meta.url, "files");
    const destination = createAbsolutePath(import.meta.url, "files_copy");

    try {
        const files = await readdir(source);
        await mkdir(destination);
        for (let file of files) {
            copyFile(source + '/' + file, destination + '/' + file)
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await copy();
