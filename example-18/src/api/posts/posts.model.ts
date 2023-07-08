import { WithId } from "mongodb";
import { z } from "zod";
import { db } from "../../db";

export const Post = z.object({
  user_id: z.string(),
  content: z.string(),
  parent_id: z.string().optional()
});

export type Post = z.infer<typeof Post>;
export type PostWithId = WithId<Post>;
export const Posts = db.collection<Post>('posts');
