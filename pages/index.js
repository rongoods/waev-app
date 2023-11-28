import PostList from "@/components/post-list/PostList";
import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";
const FixedLink = styled(Link)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-weight: bold;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: posts } = useSWR(`/api/posts`, fetcher);

  return (
    <>
      <PostList posts={posts} />
      <Link href={"/new-post"} passHref legacyBehavior>
        <FixedLink>+ post</FixedLink>
      </Link>
    </>
  );
}
