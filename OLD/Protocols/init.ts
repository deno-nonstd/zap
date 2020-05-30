export const init = `
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