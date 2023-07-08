import { buildSchema } from 'graphql';
import { z } from 'zod';

const users = [
  { id: 1, name: 'John Doe', email: 'jonh@doe.com', age: 18 },
  { id: 2, name: 'Jane Doe', email: 'jane@doe.com', age: 19 },
  { id: 3, name: 'Joe Doe', email: 'joe@doe.com', age: 20 }
];

export const schema = buildSchema(`
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

const UserInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive(),
});

type User = z.infer<typeof UserInputSchema> & { id: number };

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

export const root = {
  getUser,
  getUsers,
  createUser,
  updateUser,
}