import { Query, Resolver } from "type-graphql";
import { Posts } from "./posts.model";
import { PostType } from "./posts.type";

@Resolver(PostType)
export class PostsResolver {

  @Query(() => [PostType])
  async posts() {
    return Posts.find().toArray();
  }
}