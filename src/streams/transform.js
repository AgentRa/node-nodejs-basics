import {Transform, pipeline} from 'node:stream'
import {stdout, stdin} from 'node:process'

const transform = async () => {
    const readable = stdin, writable = stdout;

    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStringified = chunk.toString().trim();
            const reversedChunk = chunkStringified.split('').reverse().join('');
            this.push(reversedChunk + '\n');
            callback();
        }
    })

    pipeline(readable, transform, writable, err => {throw new Error(`Error: ${err}`)})
};

await transform();