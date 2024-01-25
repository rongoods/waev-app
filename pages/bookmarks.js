import { useState, useEffect } from "react";

const BookmarksPage = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    console.log(storedBookmarks); // Check if data is fetched properly
    setBookmarkedPosts(storedBookmarks);
  }, []);

  console.log(bookmarkedPosts); // Check if bookmarkedPosts state has data

  return (
    <div>
      <h1>Bookmarked Posts</h1>
      <div>
        {bookmarkedPosts.map((post) => (
          <div key={post.postId}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
