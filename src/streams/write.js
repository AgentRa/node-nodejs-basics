import {createWriteStream} from 'node:fs'
import {stdin} from 'node:process'


const write = async () => {
    stdin.pipe(createWriteStream('files/fileToWrite.txt'))
};

await write();