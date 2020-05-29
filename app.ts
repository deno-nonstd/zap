
// ~/Library/Caches/Deno/
// $HOME/.deno

import { Zap } from "./src/Zap.ts";

let app = new Zap();
let fromArgs = "run"; // zap run => deno run

let config = await app.loadConfig();
let proto = await app.loadProtocol();

let command = app.generateCommand(fromArgs);
console.log(command);


// Use this to generate a .ts file for a protocol
//
//await app.writeToTs(`${app.Here}/${app.ProtocolFile}`);
