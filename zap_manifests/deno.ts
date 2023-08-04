
import { profile as baseProfile } from "../mod.ts";


export enum denoCommand {
  Bundle = "bundle",
  Cache = "cache",
  Completions = "completions",
  Doc = "doc",
  Eval = "eval",
  Fmt = "fmt",
  Help = "help",
  Info = "info",
  Install = "Install",
  Repl = "repl",
  Run = "run",
  Test = "test",
  Types = "types",
  Upgrade = "upgrade"
}

export type deno = baseProfile<profile>;


export type profile = {
  name: string,
  denoCommand: string | denoCommand
  type: bundle | cache | completions | doc | eval | fmt | info | install | repl | run | test | types
}

export type bundle = {
  runFormat?: "deno bundle [options] #source [#out]",

  source: string,
  out?: string,
  options?: {
    cert?: string,
    config?: string,
    importmap?: string,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    unstable?: boolean
  }
}

export type cache = {
  runFormat?: "deno cache [options] #file",

  file: string,
  options?: {
    cert?: string,
    config?: string,
    importmap: string,
    lock?: string,
    lockWrite?: boolean,
    logLevel?: "debug" | "info",
    noRemote?: boolean,
    quiet?: boolean,
    unstable?: boolean
  }
}

export type completions = {
  runFormat?: "deno completions [optoins] #shell",

  shell: "zsh" | "bash" | "fish" | "powershell" | "elvish",
  options?: {
    logLevel?: "debug" | "info",
    quiet?: boolean
  }
}

export type doc = {
  runFormat?: "deno doc [options] #file [filters]",

  file?: string,
  filters?: string | string[],
  options?: {
    json?: boolean,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    reload?: boolean | string | string[],
    unstable?: boolean
  }
}

export type eval = {
  runFormat?: "deno eval [options] #code [...]",

  code?: string,
  options?: {
    cert?: string,
    inspect?: string,
    inspectBrk?: string,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    ts?: boolean,
    unstable?: boolean,
    v8?: string | string[]
  }
}

export type fmt = {
  runFormat?: "deno fmt [options] #files",

  files: string | string[],
  options?: {
    check?: boolean,
    logLevel?: "debug" | "info",
    quiet?: boolean
  }
}

export type info = {
  runFormat?: "deno info [options] #file",

  file: string,
  options?: {
    cert?: string,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    unstable?: boolean
  }
}

export type install = {
  runFormat?: "deno install [permissions] [options] #file [...]",

  file: string,
  permissions?: {
    all?: boolean,
    env?: boolean,
    hrtime?: boolean,
    net?: boolean | string[],
    plugin?: boolean,
    read?: boolean | string[],
    run?: boolean,
    write?: boolean | string[]
  }
  options?: {
    cert?: string
    force?: boolean,
    logLevel?: "debug" | "info",
    name?: string,
    quiet?: boolean,
    root?: string,
    unstable?: boolean
  }
}

export type repl = {
  runFormat?: "deno repl [options]",

  options?: {
    cert?: string,
    inspect?: string,
    inspectBrk?: string,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    unstable?: boolean,
    v8?: string | string[]
  }
}

export type run = {
  runFormat?: "deno run [permissions] [options] #file [...]",

  file: string,
  dotenv?: string,
  permissions?: {
    all?: boolean,
    env?: boolean,
    hrtime?: boolean,
    net?: boolean | string[],
    plugin?: boolean,
    read?: boolean | string[],
    run?: boolean,
    write?: boolean | string[]
  }
  options?: {
    cachedOnly?: boolean
    cert?: string
    config?: string,
    importmap?: string,
    inspect?: string,
    inspectBrk?: string,
    lock?: string,
    lockWrite?: boolean,
    logLevel?: "debug" | "info",
    noRemote?: boolean,
    quiet?: boolean,
    reload?: boolean | string | string[],
    seed?: number,
    unstable?: boolean,
    v8?: string | string[]
  }
}

export type test = {
  runFormat?: "deno test [permissions] [options] #files [...]",

  files: string | string[],
  dotenv?: string,
  permissions?: {
    all?: boolean,
    env?: boolean,
    hrtime?: boolean,
    net?: boolean | string[],
    plugin?: boolean,
    read?: boolean | string[],
    run?: boolean,
    write?: boolean | string[],
    none?: boolean
  }
  options?: {
    cachedOnly?: boolean
    cert?: string
    config?: string,
    failfast?: boolean,
    filter?: string,
    importmap?: string,
    inspect?: string,
    inspectBrk?: string,
    lock?: string,
    lockWrite?: boolean,
    logLevel?: "debug" | "info",
    noRemote?: boolean,
    quiet?: boolean,
    reload?: boolean | string | string[],
    seed?: number,
    unstable?: boolean,
    v8?: string | string[]
  }
}

export type types = {
  runFormat?: "deno types [options]",

  options?: {
    logLevel?: "debug" | "info",
    quiet?: boolean,
    unstable?: boolean
  }
}

export type upgrade = {
  runFormat?: "deno upgrade [options]",

  options?: {
    dryRun?: boolean,
    force?: boolean,
    logLevel?: "debug" | "info",
    quiet?: boolean,
    version?: string
  }
}




