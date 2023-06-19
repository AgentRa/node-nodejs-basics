import { env } from "node:process";

const parseEnv = () => {
  const prefix = "RSS_";
  let output = "";
  for (let key in env) {
    if (key.substring(0, 4) === prefix)
      output += key.concat("=", env[key]) + "; ";
  }
  console.log(output.slice(0, -2));
};

parseEnv();