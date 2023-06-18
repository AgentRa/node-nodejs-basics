import {readFile} from 'node:fs/promises';

const read = async () => {
    try {
        console.log(await readFile('files/fileToRead.txt', {encoding: 'utf-8'}))
    } catch (error) {
        console.error('FS operation failed')
    }
};

await read();