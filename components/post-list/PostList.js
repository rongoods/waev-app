import { useState } from "react";
import styles from "./PostList.module.css";
import CreateCommentForm from "../create-comment-form/CreateCommentForm.js";
// import Post from "../post/Post.js";

// below is a test  -------------------------------------------

// function Post({ post, handleViewComments, handleCloseComments }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div key={post._id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//       <div>
//         <button onClick={toggleDropdown}>comment</button>
//       </div>
//       {showDropdown && <CreateCommentForm />}
//       {post._id === handleViewComments ? (
//         <div>
//           <button className={styles.commentsBtn} onClick={handleCloseComments}>
//             close comments
//           </button>
//           {post.comments.map((comment) => (
//             <div key={comment._id}>
//               <p>{comment.text}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <button
//           className={styles.commentsBtn}
//           onClick={() => handleViewComments(post._id)}
//         >
//           view comments
//         </button>
//       )}
//     </div>
//   );
// }

// export default function PostList({ posts }) {
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleViewComments = (postId) => {
//     setSelectedPost(postId);
//   };

//   const handleCloseComments = () => {
//     setSelectedPost(null);
//   };

//   return (
//     <div className={styles.postsList}>
//       <h1 className={styles.pageTitle}>Posts</h1>
//       {posts?.map((post) => (
//         <Post
//           key={post._id}
//           post={post}
//           handleViewComments={selectedPost}
//           handleCloseComments={handleCloseComments}
//         />
//       ))}
//     </div>
//   );
// }

//below is original code ------------------------------------------------

// export default function PostList({ posts }) {
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handleViewComments = (postId) => {
//     setSelectedPost(postId);
//   };

//   const handleCloseComments = () => {
//     setSelectedPost(null);
//   };

//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <div className={styles.postsList}>
//       <h1 className={styles.pageTitle}>Posts</h1>
//       {posts?.map((post) => (
//         <div key={post._id}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>{" "}
//           <div>
//             <button onClick={toggleDropdown}>comment</button>
//           </div>
//           {showDropdown && <CreateCommentForm />}
//           {selectedPost === post._id ? (
//             <div>
//               <button
//                 className={styles.commentsBtn}
//                 onClick={handleCloseComments}
//               >
//                 close comments
//               </button>
//               {/* {post.comments.map((comment) => (
//                 <div key={comment.id}>
//                   <p>{comment.text}</p>
//                 </div>
//               ))} */}
//             </div>
//           ) : (
//             <button
//               className={styles.commentsBtn}
//               onClick={() => handleViewComments(post._id)}
//             >
//               view comments
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

//below is test 2

function Post({ post }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedPost, setSelectedPost] = useState(null);
  console.log(selectedPost);
  const handleViewComments = (postId) => {
    setSelectedPost(postId);
  };

  const handleCloseComments = () => {
    setSelectedPost(null);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <button onClick={toggleDropdown}>comment</button>
      </div>
      {showDropdown && <CreateCommentForm postId={post._id} />}
      {post._id === handleViewComments ? (
        <div>
          <button className={styles.commentsBtn} onClick={handleCloseComments}>
            close comments
          </button>
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <button
          className={styles.commentsBtn}
          onClick={() => handleViewComments(post._id)}
        >
          view comments
        </button>
      )}
    </div>
  );
}

export default function PostList({ posts }) {
  // const [selectedPost, setSelectedPost] = useState(null);

  // const handleViewComments = (postId) => {
  //   setSelectedPost(postId);
  // };

  // const handleCloseComments = () => {
  //   setSelectedPost(null);
  // };

  return (
    <div className={styles.postsList}>
      <h1 className={styles.pageTitle}>Posts</h1>
      {posts?.map((post) => (
        <Post
          key={post._id}
          post={post}
          // handleViewComments={selectedPost}
          // handleCloseComments={handleCloseComments}
        />
      ))}
    </div>
  );
}
