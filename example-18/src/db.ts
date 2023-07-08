import { MongoClient } from "mongodb";

let mongoUri = process.env.DB_CONNECTION || 'mongodb://localhost:27017/example-18';

export const client = new MongoClient(mongoUri);
export const db = client.db(process.env.DB_NAME);
