import 'reflect-metadata';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql';
import { PostsResolver } from './api/posts/posts.resolver';
import { UsersResolver } from './api/users/users.resolvers';

async function main() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, PostsResolver],
    emitSchemaFile: true,
  });

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    schema,
  });

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

  console.log(`🚀 Server listening at: ${url}`);
}

main()
