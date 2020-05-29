
// ~/Library/Caches/Deno/
// $HOME/.deno

import { Zap } from "./src/Zap.ts";
import { init as initContent } from "./Protocols/init.ts";
import { writeFileStr } from "./deps.ts";
import { checkIfNewer } from "./version.ts";


let which = "";
let file = "";

try {
  // Check if there's a new version available
  //
  await checkIfNewer();

  let app = new Zap();

// Args format:
//
// zap <which-Run> <launch-File-Name> ...
//
  if (Deno.args.length == 0) {
    console.log("Please enter the config you wish to run.");
    console.log();
    console.log("   zap <name> ...");
    console.log();

    Deno.exit(1);
  }

  which = Deno.args[0].toLowerCase();

  if (Deno.args.length == 2) {
    file = Deno.args[1];
  }

  if (which.toLowerCase() === "init") {
    // zap init <name>
    //  when ".yaml" creates yaml init file
    //  when ".env" creates a blank env file
    //
    try {
      if (file.endsWith(".yaml")) {
        writeFileStr(file, initContent);
      }
      else if (file.endsWith(".env")) {
        writeFileStr(file, "");
      }
      else {
        throw Error("Unregognized file type.");
      }

      console.log(`  ${file} successfully created.`);
    } catch (e) {
      console.log(`  Failed to create '${file}' with the following error:`);
      console.log();
      console.log("  " + e.message);
      console.log();
    }
  } else if (which.toLowerCase() === "gen") {
    // Use this to generate a .ts file for a protocol
    //
    await app.writeToTs(
      `${Deno.cwd()}/Protocols/denoProtocol.yaml`);
  } else {
    let config = await app.loadConfig(undefined, file);
    let proto = await app.loadProtocol();

    let command = app.generateCommand(which);
    let {code} = await app.runCommand();

    Deno.exit(code);
  }
}
catch (e) {
  console.log("Zap failed for the following reason: ");
  console.log();
  console.log(e.message);
  console.log();
}
