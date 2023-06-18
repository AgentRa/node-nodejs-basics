import {spawn} from 'node:child_process'

const spawnChildProcess = async (args) => spawn(`node`, args)
    .stdout.on('data', data => console.log('stdout: ' + data))


const filePath = 'src/cp/files/script.js',
    someArgument2 = '42',
    someArgument3 = [0, undefined, false];

// Put your arguments in function call to test this functionality, filePath should stay first
spawnChildProcess([filePath, someArgument2, ...someArgument3]);
