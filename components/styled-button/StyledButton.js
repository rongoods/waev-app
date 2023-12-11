import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  padding: 0.8rem;
  border-radius: 1px;
  color: white;
  text-decoration: none;
  border: 1px solid black;
  font-size: inherit;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
