import {rename as rn} from 'node:fs/promises';

const rename = async () => {
    try {
        await rn('files/wrongFilename.txt', 'files/properFilename.md')
    } catch (error) {
        console.error('FS operation failed')
    }
};

await rename();