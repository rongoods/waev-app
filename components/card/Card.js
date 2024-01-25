import Link from "next/link.js";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Comments } from "../comments/Comments"; // Function to fetch comments for a post
import styles from "./Card.module.css";
import { useTheme } from "next-themes";
import BookmarkButton from "../bookmarks/Bookmarks";

// const Article = styled.article`
//   border-radius: 1px;
//   padding: 5px;
//   margin: 15px;
//   border: 1px solid black;
//   background-color: rgba(255, 255, 255, 0.9);
// `;

const Article = styled.article`
  border-radius: 1px;
  padding: 5px;
  margin: 15px;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function Card({ id, content, title }) {
  const [comments, setComments] = useState([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    async function fetchComments() {
      try {
        const commentsData = await Comments(id);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [id]);

  return (
    <Article key={id} className={styles.article}>
      <BookmarkButton />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <Link
        href={`/posts/${id}`}
        passHref
        legacyBehavior
        className={styles.pushedeffect}
      >
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>

      <div>
        <h4 className={styles.commentsTitle}>Comments:</h4>
        <ul className={styles.comments}>
          {comments.map((comment) => (
            <li key={comment._id}>{comments.comment}</li>
          ))}
        </ul>
      </div>
    </Article>
  );
}
