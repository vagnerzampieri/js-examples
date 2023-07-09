import { ObjectId, WithId } from "mongodb";
import { z } from "zod";
import { db } from "../../db";

export const Post = z.object({
  _id: z.instanceof(ObjectId),
  user_id: z.instanceof(ObjectId),
  content: z.string(),
  parent_id: z.instanceof(ObjectId).optional(),
});

export type Post = z.infer<typeof Post>;
export type PostWithId = WithId<Post>;
export const Posts = db.collection<Post>('posts');
