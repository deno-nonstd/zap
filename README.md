# Zap

A wrapper for Deno commands that adds the ability to use configuration files to encapsulate complex options.

Example showing multiple launch configurations (run, install):

```sh
deno:
  run:
    main: sampleApp.ts
    dotenv: main.env
    security:
      allow-env: true

  install:
    main: sample.ts
    security:
      allow-env: true

    options:
      force: true
      name: sampleApp
```

## Compatibility

- [x] Deno >1.0.0
- [x] MacOS 10.14.6 Mojave
- [ ] Linux (not tested yet)
- [ ] Windows (not tested yet, needs path fixing)

## Install or Upgrade

`$ deno install -Af -n zap https://deno.land/x/deno-nonstd/zap/app.ts`

To test whether it installed, type:

`$ zap`

and it should respond.  On MacOS Mojave I had to add the .deno/bin to my
paths list and took some effort.  I dont know if this will work for you
but this is what worked for me (necessary to do for installing any Deno 
script to run as commandline app):

`$ echo '/User/<name>/.deno/bin' | sudo tee /etc/paths.d/deno`

Then, in a new (not existing) command instance, test it with:

`$ zap`

You may have to close any existing terminals or apps that need to use it.

Hopefully that works for you.


## Overview

Zap is an options wrapper for Deno.  It allows you to configure complex option profiles in a file and launch
Deno without having to type them in agin.  You can have as many configuration profiles as you wish.

Do launch a deno script we have to type something like the following:

`$ deno run --allow-env --allow-net=google.com,deno.land --allow-read unstable app.ts`

But with zap, you can create a file that holds all that info like this:

```sh
deno:
  run:
    main: app.ts
    dotenv: main.env
    security:
      allow-env: true
      allow-read: true
      allow-net:
        - google.com
        - deno.land

  install:
    main: app.ts
    security:
      allow-env: true

    options:
      force: true
      name: sampleApp
```

In the above example, to run the script, simply type:

`$ zap run`

and from the above exmaple, to install the script, type:

`$ zap install`

## Supported features:

### Subcommands
All of the deno sub commands are supported.

`bundle, cache, completions, doc, eval, fmt, help, info, install, repl, run, test, types, upgrade`

And all the options for each is supported.


### Environment Variables

Currently environment variables are supported via .env files in the following way:

* Must have a `.env` file present
* Reference the file from the `dotenv: <fileName` option in the profile
* Pass in the name as a command arg

#### From the launch file:

```sh
deno:
  run:
    main: app.ts
    dotenv: main.env
```

#### From the command line:

`$ zap run --dotenv=main.env`


### File Init

You can init a starting launch file like this:

`$ zap init launch.yaml`

And a starting .env file like this:

`$ zap init my.env`

It will create based on the file extension.  Only `.yaml` and `.env` are supported currently.  More are in the works.




### Coming Soon:

 - [ ] Host Zap into your own app
 - [ ] Environment varibles in the launch config, rather than only the dotenv file
 - [ ] Run any command that isn't a Deno comman
 - [ ] Reference other profiles
 - [ ] Daisy chain commands
 - [ ] Extensibility: add your own pre/post processing functions
 
 
 ----
 Contibutions are welcome.
 
 Join me on [Discord](https://discord.gg/YH9cZzt).