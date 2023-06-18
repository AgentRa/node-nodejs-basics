import {createUnzip} from 'node:zlib'
import {createReadStream, createWriteStream} from 'node:fs'
import {pipeline} from "node:stream";

const GZIPPED_PATH = 'src/zip/files/archive.txt.gz';
const FILE_PATH = 'src/zip/files/fileToCompress.txt';

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(GZIPPED_PATH)
    const destination = createWriteStream(FILE_PATH)
    const errorHandler = (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    }

    pipeline(source, unzip, destination, errorHandler)
};

await decompress();