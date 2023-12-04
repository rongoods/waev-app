// whole file is a test from tourio app

//COMPLETE!!!!

import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/testStyledLink/StyledLink";
import { StyledButton } from "../../../components/testStyledButton/StyledButton";
import { StyledImage } from "../../../components/testStyledImage/StyledImage";
import Comments from "../../../components/testComments/Comments";

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;

const StyledLocationLink = styled(StyledLink)`
  text-align: center;
  background-color: white;
  border: 3px solid lightsalmon;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { _id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/posts/${_id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deletePost() {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }
  const { post, comments } = data;
  return (
    <>
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink justifySelf="start">back</StyledLink>
      </Link>
      {/* <ImageContainer>
        <StyledImage
          src={post.image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>
      <h2>
        {post.name}, {post.location}
      </h2>
      <Link href={post.mapURL} passHref legacyBehavior>
        <StyledLocationLink>Location on Google Maps</StyledLocationLink>
      </Link> */}
      <p>{post.content}</p>
      <ButtonContainer>
        <Link href={`/posts/${_id}/edit`} passHref legacyBehavior>
          <StyledLink>Edit</StyledLink>
        </Link>
        <StyledButton onClick={deletePost} type="button" variant="delete">
          Delete
        </StyledButton>
      </ButtonContainer>
      <Comments locationName={post._id} comments={comments} />
    </>
  );
}
