import {rm} from 'node:fs/promises'
import {createAbsolutePath} from "../utils/createAbsolutePath.js";


const remove = async () => {
    const destination = createAbsolutePath(import.meta.url, "files/fileToRemove.txt");

    try {
        await rm(destination)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();