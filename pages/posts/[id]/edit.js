import { useRouter } from "next/router";
import Link from "next/link";
import useSWR, { mutate } from "swr";
import Form from "../../../components/testForm/Form";
import { StyledLink } from "../../../components/testStyledLink/StyledLink.js";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: post, isLoading, error, mutate } = useSWR(`/api/posts/${id}`);

  async function editPost(post) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      mutate();
    }
    router.push("/");
  }

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-post">edit post</h2>
      <Link href={`/posts/${id}`} passHref legacyBehavior>
        <StyledLink justifySelf="start">back</StyledLink>
      </Link>
      <Form onSubmit={editPost} formName={"edit-post"} defaultData={post} />
    </>
  );
}
