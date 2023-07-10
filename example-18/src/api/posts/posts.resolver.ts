import { ObjectId } from "mongodb";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { Posts } from "./posts.model";
import { PostType } from "./posts.type";
import { PostInput } from "./posts.input";

@Resolver(PostType)
export class PostsResolver {

  @Query(() => PostType)
  async post(@Arg('id', () => ID) id: string) {
     return await Posts.findOne({ _id: new ObjectId(id) });
  }

  @Query(() => [PostType])
  async posts() {
    return await Posts.find().toArray();
  }

  @Mutation(() => PostType)
  async createPost(@Arg('post', () => PostInput) post: PostInput) {
    const result = await Posts.insertOne(post);
    const newPost = await Posts.findOne({ _id: result.insertedId });
    return newPost;
  }
}