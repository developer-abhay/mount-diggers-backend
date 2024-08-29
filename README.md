# mount-diggers-backend

### Install all dependencies

```sh
npm install
```

### Setup

1. Copy `.env.example` to `.env`.

```sh
PORT = 8080
```

2. Fill in the actual values in the `.env` file.

### start the server

```sh
npx ts-node src/index.ts
```

### Or, use nodemon for automatic reloads on changes:

```sh
npx nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts
```
