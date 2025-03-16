<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description
Just for learning Nestjs for creating CRUD 💻

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## What i use
- Typescript ✅
- Typeform (ORM) ✅
- Postgres with Docker Compose ✅
- JWT 🔄

## How to run

## How to run migration
- Makesure postgresql is running with docker-compose, for checking you can open the connection database using database client like Dbeaver, tablesplus, whatever you have
- Create migration file with command
```bash
npx typeorm migration:create src/migrations/CreateUserTable
```
- After that, running migration with command
```bash
npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts 
```

