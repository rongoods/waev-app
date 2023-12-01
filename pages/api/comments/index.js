import dbConnect from "@/db/connect";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const comment = await Comment.find();
    return response.status(200).json(comment);
  } else if (request.method === "POST") {
    console.log(request.body);
    try {
      const commentData = request.body;
      await Comment.create(commentData);
      return response.status(201).json({ status: "Comment created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  try {
    const comments = await Comment.find();

    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
  }
}
