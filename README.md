# Sports Backend
This repository serves as a backend for the s&box game [Sports](https://github.com/trundler-dev/sbox-sports).

The goal is to provide functionality to players that can't be handled with s&box alone, such as persistence.

### Running
Make sure you have nodejs installed.

First, install the dependencies:
```bash
npm install
```

Next, compile the code:
```bash
./node_modules/.bin/tsc
```

Then, run the server:
```bash
node ./dist/server/server.js
```