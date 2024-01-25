import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/styled-link/StyledLink";
import { StyledButton } from "../../../components/styled-button/StyledButton";
import Comments from "../../../components/comments/Comments";

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;

const Heading2 = styled.h2`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid black;
  border-outline: 1px;
  margin-top: 5px;
`;

const Paragraph = styled.p`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-outline: 1px;
  margin-bottom: 5px;
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
      <Heading2>{post.title}</Heading2>

      <Paragraph>{post.content}</Paragraph>
      <ButtonContainer>
        <Link href={`/posts/${id}/edit`} passHref legacyBehavior>
          <StyledLink>edit</StyledLink>
        </Link>
        <StyledButton onClick={deletePost} type="button" variant="delete">
          delete
        </StyledButton>
      </ButtonContainer>
      <Comments comments={post.comments} />
    </>
  );
}
