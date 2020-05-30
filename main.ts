
import { cac as CLI } from "./deps.ts";
import { checkIfNewer, VersionInfo, VersionResult } from "../nonstd/src/Version/version.ts";

const version = new VersionInfo(
  "Zap",
  "deno-nonstd",
  "zap",
  "main.ts",
  "v0.0.1"
);

let result = await checkIfNewer(version);

console.log("result: " + result.Result);
console.log("error: " + result.Error);

//const main = CLI("zap");
//main.option("")