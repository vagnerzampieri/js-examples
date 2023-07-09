import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class PostType {

  @Field(type => ID)
  _id: string;

  @Field(type => String)
  content: string;

  @Field(type => ID)
  user_id: string;

  @Field(type => ID, { nullable: true })
  parent_id?: string;
}
