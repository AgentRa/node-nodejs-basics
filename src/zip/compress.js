import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { createAbsolutePath } from "../utils/createAbsolutePath.js";

const compress = async () => {
  const source = createAbsolutePath(
    import.meta.url,
    "files/fileToCompress.txt"
  );
  const destination = createAbsolutePath(
    import.meta.url,
    "files/archive.txt.gz"
  );

  const input = createReadStream(source);
  const output = createWriteStream(destination);

  try {
    await promisify(pipeline)(input, createGzip(), output);
  } catch (e) {
    throw new Error("Compress operation failed");
  }
};

await compress();