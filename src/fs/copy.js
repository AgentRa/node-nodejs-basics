import {readdir, copyFile, mkdir} from 'node:fs/promises'


const copy = async () => {
    try {
        const files = await readdir('files/');
        await mkdir('files_copy')
        for (let file of files) {
            copyFile(`files/${file}`, `files_copy/${file}`)
        }
    } catch (error) {
        console.error('FS operation failed')
    }
};

await copy();
