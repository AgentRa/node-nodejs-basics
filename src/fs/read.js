import { readFile } from "node:fs/promises";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const read = async () => {
  const source = createAbsolutePath(import.meta.url, "files/fileToRead.txt");

  try {
    console.log(await readFile(source, { encoding: "utf-8" }));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();