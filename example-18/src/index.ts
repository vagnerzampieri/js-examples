import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const users = [
  { id: 1, name: 'John Doe', email: 'jonh@doe.com', age: 18 },
  { id: 2, name: 'Jane Doe', email: 'jane@doe.com', age: 19 },
  { id: 3, name: 'Joe Doe', email: 'joe@doe.com', age: 20 }
];

const schema = buildSchema(`
  input UserInput {
    name: String!
    email: String!
    age: Int!
  }

  type User {
    id: Int!
    name: String!
    email: String!
    age: Int!
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: Int!, input: UserInput): User
  }

  type Query {
    getUsers: [User]
    getUser(id: Int!): User
  }
`);

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserInput = Pick<User, 'name' | 'email' | 'age'>;

const getUser = (args: { id: number }): User | undefined =>
  users.find(u => u.id === args.id)

const getUsers = (): User[] => users

const createUser = (args: { input: UserInput }): User => {
  const user = {
    id: users.length + 1,
    ...args.input,
  }
  users.push(user)

  return user
}

const updateUser = (args: { user: User }): User => {
  const index = users.findIndex(u => u.id === args.user.id)
  const targetUser = users[index]

  if (targetUser) users[index] = args.user

  return targetUser
}

const root = {
  getUser,
  getUsers,
  createUser,
  updateUser,
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions: cors.CorsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',') || [],
};

app.use(cors(corsOptions));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/graphql`);
});
