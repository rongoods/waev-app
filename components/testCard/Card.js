import Link from "next/link.js";
import styled from "styled-components";

const Article = styled.article`
  border-bottom: 2px solid black;
  border-radius: 2px;
  padding: 2px;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function Card({ id, content, title }) {
  return (
    <Article key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Link href={`/posts/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}
