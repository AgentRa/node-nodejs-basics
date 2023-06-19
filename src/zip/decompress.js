import {createUnzip} from 'node:zlib'
import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from "node:stream";
import {createAbsolutePath} from "../utils/createAbsolutePath.js";

const decompress = async () => {
    const source = createAbsolutePath(import.meta.url, "files/archive.txt.gz");
    const destination = createAbsolutePath(import.meta.url, "files/fileToCompress.txt");

    const input = createReadStream(source)
    const output = createWriteStream(destination)

    const errorHandler = (err) => {
        if (err) {
            throw new Error('An error occurred: ' + err);
        }
    }

    pipeline(input, createUnzip(), output, errorHandler)
};

await decompress();