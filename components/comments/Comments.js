import styled from "styled-components";
import { FormContainer, Input, Label } from "../form/Form";
import { StyledButton } from "../styled-button/StyledButton";
import { useRouter } from "next/router.js";
import { mutate } from "swr";
import styles from "./Comments.module.css";
import { useTheme } from "next-themes";

export default function Comments({ comments }) {
  const { theme, setTheme } = useTheme();
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 1px;
    padding: 0.5rem;
    text-align: center;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
      background-color: white;
    }
  `;

  const router = useRouter();
  const { id } = router.query;

  async function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.postId = id;

    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) mutate(`/posts/${id}`);
  }

  return (
    <Article className={styles.article}>
      {comments && (
        <>
          {comments.map(({ comment }, idx) => {
            return (
              <div key={idx} className={styles.commentsDiv}>
                <span className={styles.comments}>{comment}</span>
              </div>
            );
          })}
        </>
      )}
      <FormContainer onSubmit={handleSubmitComment}>
        <Input
          type="text"
          name="comment"
          placeholder="your comment.."
          className={styles.commentsInput}
        />
        <StyledButton type="submit" className={styles.submitComment}>
          Send
        </StyledButton>
      </FormContainer>
    </Article>
  );
}
