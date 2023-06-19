import {writeFile} from 'node:fs/promises'
import {createAbsolutePath} from "../utils/createAbsolutePath.js";

const create = async () => {
    const destination = createAbsolutePath(import.meta.url, "files/fresh.txt");

    try {
        await writeFile(destination, 'I am fresh and young', {flag: "wx"})
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await create();
