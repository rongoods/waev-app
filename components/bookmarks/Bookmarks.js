// import { useState } from "react";

// const Bookmarks = ({ postId, title, addToBookmarks }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const handleBookmarkClick = () => {
//     setIsBookmarked(!isBookmarked);
//     if (!isBookmarked) {
//       addToBookmarks({ postId, title }); // Function to add to bookmarks
//     } else {
//       removeFromBookmarks(postId); // Function to remove from bookmarks
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBookmarkClick}>
//         {isBookmarked ? "Remove from Favorites" : "Add to Favorites"}
//       </button>
//     </div>
//   );
// };

// export default Bookmarks;
// import { useState } from "react";

// const BookmarkButton = ({ postId, title }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const handleBookmarkClick = async (e) => {
//     e.stopPropagation(); // Prevent propagation to parent elements (Link)

//     setIsBookmarked(!isBookmarked);

//     if (!isBookmarked) {
//       addToBookmarks({ postId, title });

//       await new Promise((resolve) => setTimeout(resolve, 100));
//       router.push("/bookmarks");
//     } else {
//       removeFromBookmarks(postId);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleBookmarkClick}>
//         {isBookmarked ? "Remove from Favorites" : "Add to Favorites"}
//       </button>
//     </div>
//   );
// };

// export default BookmarkButton;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import styles from "./Bookmark.module.css";

const BookmarkButton = ({ postId, title }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const router = useRouter();

  // Assume you have an endpoint like '/api/bookmarks'
  const bookmarksAPI = "/api/bookmarks";

  // Function to check if the current post is bookmarked
  const checkIsBookmarked = async () => {
    try {
      const response = await axios.get(`${bookmarksAPI}/${postId}`);
      setIsBookmarked(response.data.bookmarked);
    } catch (error) {
      console.error("Error checking bookmark:", error);
    }
  };

  useEffect(() => {
    checkIsBookmarked();
  }, [postId]); // Re-run if postId changes

  const addToBookmarks = async () => {
    try {
      await axios.post(bookmarksAPI, { postId, title });
      setIsBookmarked(true);
      router.push("/bookmarks");
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  const removeFromBookmarks = async () => {
    try {
      await axios.delete(`${bookmarksAPI}/${postId}`);
      setIsBookmarked(false);
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  const handleBookmarkClick = async () => {
    if (isBookmarked) {
      await removeFromBookmarks();
    } else {
      await addToBookmarks();
    }
  };

  return (
    <div>
      <button onClick={handleBookmarkClick}>
        {isBookmarked ? (
          <Image
            src="/fullheart-pixel.png"
            alt="Remove from Favorites"
            width={30}
            height={30}
            className={styles.bookmark}
          />
        ) : (
          <Image
            src="/emptyheart-pixel.png"
            alt="Add to Favorites"
            width={30}
            height={30}
            className={styles.bookmark}
          />
        )}
      </button>
    </div>
  );
};

export default BookmarkButton;
