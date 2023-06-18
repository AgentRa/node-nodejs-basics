import {readFile} from "node:fs/promises";
import {createHash} from 'node:crypto'

const calculateHash = async () => {
    try {
        const file = await readFile('files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256').update(file).digest('hex');
        console.log(hash)
    } catch (error) {
        console.log(error)
    }
};

await calculateHash();