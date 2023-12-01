// import { useState } from "react";
// import CreateCommentForm from "../create-comment-form/CreateCommentForm";

// function Post({ post }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleViewComments = (postId) => {
//     setSelectedPost(postId);
//   };

//   const handleCloseComments = () => {
//     setSelectedPost(null);
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
//           {/* Uncomment and replace with your comment rendering logic */}
//           {/* {post.comments.map((comment) => (
//               <div key={comment.id}>
//                 <p>{comment.text}</p>
//               </div>
//             ))} */}
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
