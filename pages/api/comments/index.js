import dbConnect from "@/db/connect";
import Comment from "@/db/models/Comment";
import Post from "@/db/models/Post";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comment = await Comment.find();
    return response.status(200).json(comment);
  } else if (request.method === "POST") {
    try {
      const { comment, postId } = request.body;
      console.log("comment", comment);
      const createdComment = await Comment.create({ comment: comment });
      console.log("createdComment", createdComment);
      console.log("id", postId);

      const updatedPost = await Post.findByIdAndUpdate(postId, {
        $push: { comments: createdComment._id },
      });
      console.log("updatedPost", updatedPost);
      return response.status(201).json({ status: "Comment created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  //   try {
  //     const comments = await Comment.find();

  //     res.status(200).json(comments);
  //   } catch (error) {
  //     console.log(error);
  //   }
}
