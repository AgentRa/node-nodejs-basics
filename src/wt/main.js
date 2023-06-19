import {Worker} from 'node:worker_threads'
import {resolve, dirname} from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url);
const source = resolve(dirname(__filename), "./worker.js");

const performCalculations = async () => {
    const workerPromises = [];

    for (let i = 0; i < 4; i++) {
        const workerPromise = new Promise((resolve, reject) => {
            const worker = new Worker(source, {workerData: i + 10});
            worker.on("error", error => reject(error));
            worker.on("message", data => resolve({status: 'resolved', data}));
        })
        workerPromises.push(workerPromise);
    }
    console.log(await Promise.all(workerPromises))
};

await performCalculations();