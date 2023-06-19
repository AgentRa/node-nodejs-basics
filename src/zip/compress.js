import {createGzip} from 'node:zlib'
import {pipeline} from 'node:stream'
import {createReadStream, createWriteStream} from 'node:fs'
import {promisify} from 'node:util'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/fileToCompress.txt");
const destination = resolve(dirname(__filename), "./files/archive.txt.gz");

const compress = async () => {
    const gzip = createGzip();
    const input = createReadStream(source);
    const output = createWriteStream(destination);

    await promisify(pipeline)(input, gzip, output)
};

await compress();