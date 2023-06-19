import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const write = async () => {
  const source = createAbsolutePath(import.meta.url, "./files/fileToWrite.txt");

  stdin.pipe(createWriteStream(source));
};

await write();