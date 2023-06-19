import { readdir } from "node:fs/promises";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const list = async () => {
  const source = createAbsolutePath(import.meta.url, "files");

  try {
    console.log("files: ", await readdir(source));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();