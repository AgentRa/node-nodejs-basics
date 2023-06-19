import {rename as changeName, access, constants} from 'node:fs/promises';
import {createAbsolutePath} from "../utils/createAbsolutePath.js";

const isAlreadyExistException = async (filepath) => {
    try {
        await access(filepath, constants.F_OK)
        return true
    } catch (e) {
        return false
    }
}

const rename = async () => {
    const source = createAbsolutePath(import.meta.url, "files/wrongFilename.txt");
    const destination = createAbsolutePath(import.meta.url, "files/properFilename.md");

    const condition = await isAlreadyExistException(destination)
    if (condition) throw new Error('FS operation failed')
    try {
        await changeName(source, destination)
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await rename();