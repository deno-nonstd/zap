
import * as semver from "https://deno.land/x/semver@v1.0.0/mod.ts";


const CurrentVersion = "v0.5.0";
export { CurrentVersion };


export async function checkIfNewer(): Promise<void> {
  try {
    const tags = await fetch(`https://api.github.com/repos/deno-nonstd/zap/tags`);
    const json = await tags.json();
    const next = json[0].name;

    if (semver.gt(next, CurrentVersion)) {
      console.log(`
      The current version of zap is ${CurrentVersion}.  Update ${json[0].name} is available for immediate 
      install.  To update zap, type the following at the command line:
      
      deno install -Af -n zap https://deno.land/x/deno-nonstd/zap/app.ts
    `);
    }
  }
  catch (e) {
    console.log("Warning: Attempt to check for latest version of zap failed.");
  }
}