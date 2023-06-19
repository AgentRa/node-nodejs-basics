import { Worker } from "node:worker_threads";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const performCalculations = async () => {
  const workerPromises = [];
  const source = createAbsolutePath(import.meta.url, "worker.js");

  for (let i = 0; i < 4; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(source, { workerData: i + 10 });
      worker.on("error", (error) => reject(error));
      worker.on("message", (data) => resolve({ status: "resolved", data }));
    });
    workerPromises.push(workerPromise);
  }
  console.log(await Promise.all(workerPromises));
};

await performCalculations();