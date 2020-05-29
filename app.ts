
// ~/Library/Caches/Deno/
// $HOME/.deno

import { Zap } from "./src/Zap.ts";

let app = new Zap();

let config = await app.loadConfig();
let proto = await app.loadProtocol();

let which = "run";
let command = app.generateCommand(which);
let {code}= await app.runCommand();

Deno.exit(code);

// Use this to generate a .ts file for a protocol
//
//await app.writeToTs(`${app.Here}/${app.ProtocolFile}`);
