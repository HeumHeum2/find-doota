import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
 
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
