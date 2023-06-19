import {rename as changeName, access, constants} from 'node:fs/promises';
import {resolve, dirname, sep} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files") + sep;

const isAlreadyExistExeption = async (filepath) => {
    try {
        await access(filepath, constants.F_OK)
        return true
    } catch (e) {
        return false
    }
}

const rename = async () => {
    const condition = await isAlreadyExistExeption(source + 'properFilename.md')
    if (condition) throw new Error('FS operation failed')
    try {
        await changeName(source + 'wrongFilename.txt', source + 'properFilename.md')
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await rename();