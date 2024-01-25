// // pages/api/toggleBookmark.js

// import connectToDatabase from "../../utils/mongodb"; // Import your MongoDB connection

// export default async function handler(req, res) {
//   const { postId } = req.body;

//   if (req.method === "POST") {
//     const { db } = await connectToDatabase(); // Connect to MongoDB
//     const collection = db.collection("bookmarks"); // Replace "bookmarks" with your collection name

//     // Check if the post is already bookmarked
//     const bookmarkedPost = await collection.findOne({ postId });

//     if (bookmarkedPost) {
//       // Post is already bookmarked, remove it from bookmarks
//       await collection.deleteOne({ postId });
//       res.status(200).json({ message: "Bookmark removed successfully" });
//     } else {
//       // Post is not bookmarked, add it to bookmarks
//       await collection.insertOne({ postId });
//       res.status(200).json({ message: "Bookmark added successfully" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }
