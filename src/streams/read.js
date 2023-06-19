import {createReadStream} from 'node:fs'
import {stdout} from 'node:process'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/fileToRead.txt");

const read = async () => {
    createReadStream(source).pipe(stdout);
};

await read();