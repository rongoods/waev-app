// this whole file is a test from tourio app

import Link from "next/link.js";
import styled from "styled-components";
import { useRouter, mutate } from "next/router";
import Form from "../components/testForm/Form";
import { StyledLink } from "../components/testStyledLink/StyledLink.js";

const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePostPage() {
  const router = useRouter();

  async function addPost(post) {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    console.log("the post: ", post);

    router.push("/");
    // /*   if (response.ok) {
    //   mutate();
    // } */
  }

  return (
    <>
      <h2 id="add-post">add post</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPost} formName={"add-post"} />
    </>
  );
}
