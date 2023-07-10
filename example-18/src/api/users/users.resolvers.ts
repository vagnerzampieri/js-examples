import { Arg, ID, Query, Resolver } from "type-graphql";
import { UserType } from "./users.type";
import { Users } from "./users.model";
import { ObjectId } from "mongodb";

@Resolver()
export class UsersResolver {
  @Query(() => UserType)
  async user(@Arg('id', () => ID) id: string) {
    return await Users.findOne({ _id: new ObjectId(id) });
  }

  @Query(() => [UserType])
  async users() {
    return await Users.find().toArray();
  }
}