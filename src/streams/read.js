import {createReadStream} from 'node:fs'
import {stdout} from 'node:process'

const read = async () => {
    createReadStream('files/fileToRead.txt').pipe(stdout);
};

await read();