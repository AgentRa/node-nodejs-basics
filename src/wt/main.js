import {Worker} from 'node:worker_threads'

const performCalculations = async () => {
    const workerPromises = [];

    for (let i = 0; i < 4; i++) {
        const workerPromise = new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', {workerData: i + 10});
            worker.on("error", error => reject(error));
            worker.on("message", data => resolve({status: 'resolved', data}));
        })
        workerPromises.push(workerPromise);
    }
    console.log(await Promise.all(workerPromises))
};

await performCalculations();