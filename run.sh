
# 1. Type: chmod +x run.sh              To set execute permissions on this script file
# 2. Type: sh run.sh                    To run the app

#deno run -A app.ts run
#deno cache --reload ./app.ts
#deno run -A app.ts init x.yaml
deno install -Af --name zap app.ts
#deno install -A -f --name zap https://deno.land/x/gh:deno-nonstd:zap/app.ts
#deno install -Af -n zap https://denopkg.com/deno-nonstd/zap/app.ts
#export PATH="/Users/.../.deno/bin:$PATH

