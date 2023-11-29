import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Post = models.Post || model("Post", postSchema);

export default Post;
