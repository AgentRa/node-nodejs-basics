import {createGzip} from 'node:zlib'
import {pipeline} from 'node:stream'
import {createReadStream, createWriteStream} from 'node:fs'
import {promisify} from 'node:util'

const FILE_PATH = 'src/zip/files/fileToCompress.txt';
const GZIPPED_PATH = 'src/zip/files/archive.txt.gz';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(FILE_PATH);
    const destination = createWriteStream(GZIPPED_PATH);

    await promisify(pipeline)(source, gzip, destination)
};

await compress();