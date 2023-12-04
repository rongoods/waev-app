// import PostList from "@/components/post-list/PostList";
// import useSWR from "swr";
// import Link from "next/link";
// import styled from "styled-components";
// import CurrentDate from "@/components/current-date/DateTime";
// const FixedLink = styled(Link)`
//   position: fixed;
//   bottom: 50px;
//   right: 50px;
//   font-weight: bold;
// `;

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Home() {
//   const { data: posts } = useSWR(`/api/posts`, fetcher);

//   return (
//     <>
//       <br></br>
//       {/* <CurrentDate /> */}
//       <PostList posts={posts} />
//       <Link href={"/new-post"} passHref legacyBehavior>
//         <FixedLink>+ post</FixedLink>
//       </Link>
//     </>
//   );
// }

// below is all a test from tourio app

import styled from "styled-components";
import Card from "../components/testCard/Card";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/testStyledLink/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

// const ListItem = styled.li`
//   position: relative;
//   width: 100%;
// `;

const ListItem = styled.li`
  position: relative;
  width: 100%;

  &:first-child {
    padding-top: 35px;
  }

  &:last-child {
    padding-bottom: 80px;
  }
`;

const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
export default function Home() {
  const { data } = useSWR("/api/posts", { fallbackData: [] });
  return (
    <>
      <List role="list">
        {data.map((post) => {
          return (
            <ListItem key={post.id}>
              <Card
                title={post.title}
                content={post.content}
                // image={place.image}
                // location={place.location}
                id={`${post._id.$oid ?? post._id}`}
              />
            </ListItem>
          );
        })}
      </List>
      {/* <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ place</FixedLink>
      </Link> */}
    </>
  );
}
