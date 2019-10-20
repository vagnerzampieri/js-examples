import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Posts", PostSchema);
export { Post };
