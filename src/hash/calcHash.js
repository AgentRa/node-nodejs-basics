import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const calculateHash = async () => {
  const source = createAbsolutePath(
    import.meta.url,
    "files/fileToCalculateHashFor.txt"
  );

  try {
    const file = await readFile(source);
    const hash = createHash("sha256").update(file).digest("hex");
    console.log(hash);
  } catch (error) {
    throw new Error(error);
  }
};

await calculateHash();