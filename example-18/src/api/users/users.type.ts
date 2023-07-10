import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(type => ID)
  _id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  nickname: string;

  @Field(type => String, { nullable: true })
  location?: string;
}