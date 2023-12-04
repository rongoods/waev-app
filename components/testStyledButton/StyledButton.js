import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  padding: 0.8rem;
  border-radius: 2px;
  color: rgb(249, 222, 176);
  text-decoration: none;

  border: none;
  font-size: inherit;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
