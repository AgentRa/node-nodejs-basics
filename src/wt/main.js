import { Worker } from "node:worker_threads";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";
import { cpus } from "node:os";

const performCalculations = async () => {
  const workerPromises = [];
  const source = createAbsolutePath(import.meta.url, "worker.js");

  for (let i = 0; i < cpus().length; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(source, { workerData: i + 10 });
      worker.on("error", (error) => reject(error));
      worker.on("message", (data) => resolve({ status: "resolved", data }));
    });
    workerPromises.push(workerPromise);
  }

  const workersData = (await Promise.allSettled(workerPromises)).map((worker) =>
    worker.status === "fulfilled"
      ? {
          status: "resolved",
          data: worker.value.data,
        }
      : { status: "error", data: null }
  );

  console.log(workersData);
};

await performCalculations();
