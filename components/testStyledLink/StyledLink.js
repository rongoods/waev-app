import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  color: white;
  padding: 5px;
  border-radius: 1px;
  background-color: black;
  text-decoration: none;
  text-align: center;

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 1px solid black;
    `}
`;
