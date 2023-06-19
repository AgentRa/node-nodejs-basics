import {createUnzip} from 'node:zlib'
import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from "node:stream";
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/archive.txt.gz");
const destination = resolve(dirname(__filename), "./files/fileToCompress.txt");

const decompress = async () => {
    const unzip = createUnzip();
    const input = createReadStream(source)
    const output = createWriteStream(destination)
    const errorHandler = (err) => {
        if (err) {
            throw new Error('An error occurred: ' + err);
        }
    }

    pipeline(input, unzip, output, errorHandler)
};

await decompress();