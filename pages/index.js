import styled from "styled-components";
import Card from "../components/card/Card";
import useSWR from "swr";
import { StyledLink } from "../components/styled-link/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 0;
`;

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
                id={`${post._id.$oid ?? post._id}`}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
