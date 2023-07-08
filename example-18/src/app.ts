import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from './schema';

dotenv.config();

const app: Express = express();

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

export default app;