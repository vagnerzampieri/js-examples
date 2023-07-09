import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app: Express = express();

const corsOptions: cors.CorsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',') || [],
};

app.use(helmet());
app.use(cors(corsOptions));

export default app;