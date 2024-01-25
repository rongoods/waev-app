import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --navbar-background-light: white;
    --navbar-text-light: black;
    --navbar-border-light: black;
    /* Define other light theme variables */
  }

  [data-theme="dark"] {
    --navbar-background-dark: black;
    --navbar-text-dark: white;
    --navbar-border-dark: white;
    /* Define other dark theme variables */
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-image: url("/public/wireframe-waev.png");
  }
`;
