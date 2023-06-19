import {writeFile} from 'node:fs/promises'
import {fileURLToPath} from "node:url";
import {resolve, dirname} from "node:path";

const __filename = fileURLToPath(import.meta.url);
const destination = resolve(dirname(__filename), "./files/fresh.txt");

const create = async () => {
    try {
        await writeFile(destination, 'I am fresh and young', {flag: "wx"})
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await create();
