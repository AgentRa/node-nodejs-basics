import {createWriteStream} from 'node:fs'
import {stdin} from 'node:process'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/fileToWrite.txt");


const write = async () => {
    stdin.pipe(createWriteStream(source))
};

await write();