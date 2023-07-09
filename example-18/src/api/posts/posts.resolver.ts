import { Arg, ID, Query, Resolver } from "type-graphql";
import { Posts } from "./posts.model";
import { PostType } from "./posts.type";
import { ObjectId } from "mongodb";

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
}