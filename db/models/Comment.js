import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
