import {spawn} from 'node:child_process'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./files/script.js");

const spawnChildProcess = async (args) => spawn(`node`, [source, ...args])
    .stdout.on('data', data => console.log('stdout: ' + data))


const someArgument1 = '42',
      someArgument2 = 42,
      someArgument3 = [0, undefined, null, false];

// Put your arguments in function call to test this functionality
spawnChildProcess([someArgument1, someArgument2, ...someArgument3]);
