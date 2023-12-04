import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: black;
  padding: 5px;
  border-radius: 2px;
  color: rgb(249, 222, 176);
  text-decoration: none;

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
      border: 3px solid lightsalmon;
    `}
`;
