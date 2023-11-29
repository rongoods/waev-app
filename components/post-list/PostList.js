import styles from "./PostList.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.postsList}>
      <h1 className={styles.pageTitle}>Posts</h1>
      {posts?.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
