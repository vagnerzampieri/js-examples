import { GraphQLID, GraphQLString } from "graphql";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class PostInput {
  @Field(type => GraphQLID, { nullable: true })
  _id: ObjectId;

  @Field(type => GraphQLString)
  content: string;

  @Field(type => GraphQLID)
  user_id: ObjectId;

  @Field(type => GraphQLID, { nullable: true })
  parent_id?: ObjectId;
}