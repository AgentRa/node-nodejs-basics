import {rm} from 'node:fs/promises'

const remove = async () => {
    try {
        await rm('fileToRemove.txt')
    } catch (error) {
        console.error('FS operation failed')
    }
};

await remove();