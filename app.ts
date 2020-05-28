
// ~/Library/Caches/Deno/
// $HOME/.deno

import { Zap } from "./src/Zap.ts";

let app = new Zap();

let config = app.loadConfig(undefined,"launch-template.yaml");
let proto = app.loadProtocol()

