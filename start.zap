#
# used by https://deno.land/x/zap/mod.ts
#   to wrap the Deno options.
#
# To Install:
#
# $ deno install --allow-read --allow-write --allow-env --unstable -f -n zap https://deno.land/x/zap/mod.ts
#
# To use (with this file as configured below):
#
# $ zap run
# $ zap test
#
---

run:
  file: app.ts
  permissions:
    allow-all: true

  options:
    importmap: "imports.json"
    unstable: true
