import PostList from "@/components/post-list/PostList";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: posts } = useSWR(`/api/posts`, fetcher);

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
