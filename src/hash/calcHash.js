import {readFile} from "node:fs/promises";
import {createHash} from 'node:crypto'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
    try {
        const file = await readFile(source);
        const hash = createHash('sha256').update(file).digest('hex');
        console.log(hash)
    } catch (error) {
        throw new Error(error)
    }
};

await calculateHash();