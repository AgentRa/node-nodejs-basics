import {readdir} from 'node:fs/promises'


const list = async () => {
    try {
        console.log('files', await readdir('files/'))
    } catch (error) {
        console.error('FS operation failed')
    }
};

await list();