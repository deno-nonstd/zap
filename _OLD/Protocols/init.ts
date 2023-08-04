export const init = `
# used by https://deno.land/x/zap/mod.ts
#   to wrap the Deno options.
#
# To Install:
#
# $ deno install --allow-read --allow-write --allow-env --unstable -n zap https://deno.land/x/zap/mod.ts
#
# To use (with this file as configured below):
#
# $ zap test
#
---
deno:
  run:
    main: app.ts
    dotenv: 
    security:
      allow-all:
      allow-env: 
      allow-hrtime: 
      allow-net:
      allow-plugin:
      allow-read:
      allow-run:
      allow-write:

    options:
      cached-only:
      cert:
      config:
      help:
      importmap:
      inspect:
      inspect-brk:
      lock:
      lock-write:
      log-level:
      no-remote:
      quiet:
      reload:
      seed:
      unstable:
      v8-flags:
  `;