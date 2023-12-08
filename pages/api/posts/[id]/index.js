import dbConnect from "../../../../db/connect";
import Post from "../../../../db/models/Post";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const post = await Post.findById(id).populate("comments");
    console.log("post!!!!!", post);

    if (!post) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json({ post });
  } else if (request.method === "PATCH") {
    await Post.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: `Post ${id} updated!` });
  } else if (request.method === "DELETE") {
    await Post.findByIdAndDelete(id);
    response.status(200).json({ status: `Post ${id} successfully deleted.` });
  }
}
