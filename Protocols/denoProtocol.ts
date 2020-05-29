let protocol = {
 "deno": {
  "run": {
   "sub": "run",
   "main": "app.ts",
   "format": "deno run [security] [options] #main [...args]",
   "dotenv": [
    "--",
    "#file"
   ],
   "security": {
    "allow-all": [
     "--"
    ],
    "allow-env": [
     "--"
    ],
    "allow-hrtime": [
     "--"
    ],
    "allow-net": [
     "--",
     "array",
     "#url"
    ],
    "allow-plugin": [
     "--"
    ],
    "allow-read": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-run": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-write": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ]
   },
   "options": {
    "cached-only": [
     "--"
    ],
    "cert": [
     "--",
     "#file"
    ],
    "config": [
     "--",
     "#file"
    ],
    "help": [
     "--"
    ],
    "importmap": [
     "--",
     "#file"
    ],
    "inspect": [
     "--",
     "#url"
    ],
    "inspect-brk": [
     "--",
     "#url"
    ],
    "lock": [
     "--",
     "#url"
    ],
    "lock-write": [
     "--"
    ],
    "log-level": [
     "--",
     "#text"
    ],
    "no-remote": [
     "--"
    ],
    "quiet": [
     "--"
    ],
    "reload": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "seed": [
     "--",
     "#number"
    ],
    "unstable": [
     "--"
    ],
    "v8-flags": [
     "--",
     "...args"
    ]
   }
  },
  "install": {
   "sub": "install",
   "main": "app.ts",
   "format": "deno install [security] [options] [...args]",
   "dotenv": [
    "--",
    "#file"
   ],
   "security": {
    "allow-all": [
     "--"
    ],
    "allow-env": [
     "--"
    ],
    "allow-hrtime": [
     "--"
    ],
    "allow-net": [
     "--",
     "array",
     "#url"
    ],
    "allow-plugin": [
     "--"
    ],
    "allow-read": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-run": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-write": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ]
   },
   "options": {
    "cert": [
     "--",
     "#file"
    ],
    "force": [
     "--"
    ],
    "help": [
     "--"
    ],
    "log-level": [
     "--",
     "#text"
    ],
    "name": [
     "--",
     "#text"
    ],
    "quiet": [
     "--"
    ],
    "root": [
     "--",
     "#file"
    ],
    "unstable": [
     "--"
    ]
   }
  },
  "bundle": {
   "sub": "bundle",
   "main": "app.ts",
   "format": "deno bundle [options] #file [#out_file]",
   "dotenv": [
    "--",
    "#file"
   ],
   "options": {
    "cert": [
     "--",
     "#file"
    ],
    "config": [
     "--",
     "#file"
    ],
    "help": [
     "--"
    ],
    "log-level": [
     "--",
     "#text"
    ],
    "quiet": [
     "--"
    ],
    "unstable": [
     "--"
    ]
   }
  },
  "test": {
   "sub": "test",
   "main": "app.ts",
   "format": "deno test [security] [options] [...args]",
   "dotenv": [
    "--",
    "#file"
   ],
   "security": {
    "allow-all": [
     "--"
    ],
    "allow-env": [
     "--"
    ],
    "allow-hrtime": [
     "--"
    ],
    "allow-net": [
     "--",
     "array",
     "#url"
    ],
    "allow-plugin": [
     "--"
    ],
    "allow-read": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-run": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-write": [
     "--",
     "array",
     [
      "#file",
      "#url"
     ]
    ],
    "allow-none": [
     "--"
    ]
   },
   "options": {
    "cached-only": [
     "--"
    ],
    "cert": [
     "--",
     "#file"
    ],
    "config": [
     "--",
     "#file"
    ],
    "failfast": [
     "--"
    ],
    "filter": [
     "--",
     "#text"
    ],
    "help": [
     "--"
    ],
    "importmap": [
     "--",
     "#file"
    ],
    "inspect": [
     "--",
     "#url"
    ],
    "inspect-brk": [
     "--",
     "#url"
    ],
    "lock": [
     "--",
     "#file"
    ],
    "log-level": [
     "--",
     "#text"
    ],
    "no-remote": [
     "--"
    ],
    "quiet": [
     "--"
    ],
    "reload": [
     "--"
    ],
    "seed": [
     "--",
     "#number"
    ],
    "unstable": [
     "--"
    ],
    "v8-flags": [
     "--",
     "...args"
    ]
   }
  }
 }
} 
export { protocol };