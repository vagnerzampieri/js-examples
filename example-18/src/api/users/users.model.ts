import { WithId } from "mongodb";
import { z } from "zod";
import { db } from "../../db";

export const User = z.object({
  name: z.string(),
  email: z.string().email(),
  nickname: z.string(),
  location: z.string()
});

export type User = z.infer<typeof User>;
export type UserWithId = WithId<User>;
export const Users = db.collection<User>('users');
