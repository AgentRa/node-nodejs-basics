import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const createAbsolutePath = (scriptPath, addon) => {
  const __filename = fileURLToPath(scriptPath);
  return resolve(dirname(__filename), addon);
};
export { createAbsolutePath };