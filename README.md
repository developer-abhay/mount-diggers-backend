# MountDiggers Backend

### Install all dependencies

```sh
npm install
```

### Setup

1. Copy `.env.example` to `.env`.

```sh
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT = 8080
```

2. Fill in the actual values in the `.env` file.

### Start the server

```sh
npm run dev

# which is using nodemon under the hood
npx nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts
```
