#### Links
 - Getting Started with Node.js - Full Tutorial - https://www.youtube.com/watch?v=gG3pytAY2MY
 - Comprehensive and exhaustive JavaScript & Node.js testing best practices - https://github.com/goldbergyoni/javascript-testing-best-practices

#### Examples
 - file `notes.md` has a lot of examples

#### Useful commands
 - see github.com/vagnerzampieri/cheatsheets/blob/master/javascript.md, there are commands to Node.js and npm.

#### Use exports without ES6
 - `cd /example-1 && node index.js` or `node index2.js`

#### Require with cache and without cache
 - `cd /example-2 && node index2.js`

#### Use ESM
 - `cd /example-3 && node --experimental-modules index2.js`

#### Run a server with HTTP
 - `cd /example-4 && npm run dev-start`

#### Run a server with Express and Nodemon (for reload automatically)
 - `cd /example-5 && npm run dev-start`

#### Use Promise, child_process example
 - `cd /example-6 && npm run dev-start`

#### Use EventEmitter
 - `cd /example-7 && npm run dev-start`

#### Express and MongoDB
 - Build a restful API with Node.js Express & MongoDB | Rest Api Tutorial - https://www.youtube.com/watch?v=vjf774RKrLc
 - `cd /example-8`
 - `docker-compose up`
 - `cp .env.example .env` put IP address in `DB_CONTAINER`
 - `npm run dev-start`
 - `curl -d '{"title":"This is a title", "description":"This is a description"}' -H "Content-Type: application/json" -X POST http://localhost:3000/posts`

#### Authentication with JWT
 - Build a Node.js API Authentication with JWT Tutorial - https://www.youtube.com/watch?v=2jqok-WgelI
 - `cd /example-9`
 - `docker-compose up`
 - `cp .env.example .env` put IP address in `DB_CONTAINER` and create a secret token for `TOKEN_SECRET`
 - `npm run dev-start`
 - `curl -d '{"name":"Your name", "email":"your@email.com", "password":"123456"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/user/register`
 - `curl -d '{"email":"your@email.com", "password":"123456"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/user/login`
 - `curl -H "Content-Type: application/json" -H "Auth-Token: <TOKEN>" -X GET http://localhost:3000/api/users`

#### Jest and Babel to use Node.js 12
 - Jest Crash Course - Unit Testing in JavaScript - https://www.youtube.com/watch?v=7r4xVDI2vho
 - Code - https://github.com/bradtraversy/jest_testing_basics
 - Mocking Axios in Jest + Testing Async Functions - https://www.youtube.com/watch?v=9Yrd4aZkse8
 - `cd /example-10`
 - `npm test`

#### Graphql
 - GraphQL Full Course - Novice to Expert - https://www.youtube.com/watch?v=ed8SzALpx1Q
 - Code - https://github.com/iamshaunjp/graphql-playlist ... See branchs
 - `cd /example-11/server`
 - `npm run dev-start`
 - `cd /example-11/client`
 - `npm start`
 - graphiql is available for test
 - Examples:
```
{
    author(id: 1) {
        name
        age
        books {
            name
        }
    }
}

{
    book(id: 1) {
        name
        genre
        authors {
            name
            age
        }
    }
}

mutation {
  addAuthor(name: "Homer Simpson", age: 42){
    name
    age
    id
  }
}

mutation {
  addBook(name: "My new book", genre: "bio", authorId: "5dc88adafead565ce4faa9bf") {
    name
    genre
    author {
      name
    }
  }
}
```

#### Redux
 - Redux For Beginners | React Redux Tutorial - https://www.youtube.com/watch?v=CVpUuw9XSjY
 - `cd example-12`
 - `npm start`
 - install redux chrome extension

#### Static files with Express
 - `cd example-13`
 - `npm run dev-start`

#### Kafka
 - Code Challenge: Micro-serviços com Node e Kafka - https://www.youtube.com/watch?v=-H8pD7sMcfo
 - Code - https://github.com/Rocketseat/youtube-challenge-node-kafka
 - `docker-compose up`
 - `cd example-14/api`
 - `npm run dev-start`
 - `cd example-14/certification`
 - `npm run dev-start`

#### React Router 6.0
 - React Router 6.0 - https://www.youtube.com/watch?v=G7hHdcW4kQY
 - `cd example-15`
 - `npm start`
