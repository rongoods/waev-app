import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/testStyledLink/StyledLink";
import { StyledButton } from "../../../components/testStyledButton/StyledButton";

import Comments from "../../../components/testComments/Comments";

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/posts/${id}`);
  console.log("DATA", data);
  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePost() {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }
  const { post } = data;
  return (
    <>
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink justifySelf="start">back</StyledLink>
      </Link>
      <h2>{post.title}</h2>

      <p>{post.content}</p>
      <ButtonContainer>
        <Link href={`/posts/${id}/edit`} passHref legacyBehavior>
          <StyledLink>edit</StyledLink>
        </Link>
        <StyledButton onClick={deletePost} type="button" variant="delete">
          delete
        </StyledButton>
      </ButtonContainer>
      <Comments comments={post.comments} />
      {/* <p>{comments.comment}</p> */}
    </>
  );
}
