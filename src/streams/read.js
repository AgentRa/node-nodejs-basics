import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const read = async () => {
  const source = createAbsolutePath(import.meta.url, "./files/fileToRead.txt");

  createReadStream(source).pipe(stdout);
};

await read();