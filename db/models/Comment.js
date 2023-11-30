import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const commentSchema = new Schema({
  content: { type: String, required: true },
  create_at: { type: Date, default: Date.now },
});

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
