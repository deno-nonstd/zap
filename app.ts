
import { checkIfNewer, VersionInfo, VersionResult } from "https://deno.land/x/nonstd/src/Version/version.ts";
import { Command } from "./deps.ts";

try {
  // Check whether newer version
  //
  const version: VersionInfo = {
    AppName: "Zap",
    Org: "deno-nonstd",
    Repo: "zap",
    MainFile: "app.ts",
    CurrentVersion: "v0.8.2"
  };

  //let result = await checkIfNewer(version);

  // Options
  //

}
catch (e) {
  console.log("Error: " + e);
}

