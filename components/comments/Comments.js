import styled from "styled-components";
import { FormContainer, Input, Label } from "../form/Form";
import { StyledButton } from "../styled-button/StyledButton";
import { useRouter } from "next/router.js";
import { mutate } from "swr";

export default function Comments({ comments }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 1px;
    padding: 0.5rem;
    text-align: center;
    margin: 5px;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
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
    <Article>
      {comments && (
        <>
          {comments.map(({ comment }, idx) => {
            return (
              <div key={idx}>
                <span>{comment}</span>
              </div>
            );
          })}
        </>
      )}
      <FormContainer onSubmit={handleSubmitComment}>
        {/* <Label htmlFor="comment">Your Comment</Label> */}
        <Input type="text" name="comment" placeholder="your comment.." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
    </Article>
  );
}
