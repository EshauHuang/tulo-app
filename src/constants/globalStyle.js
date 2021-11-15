import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 12px;
  }

  body {
    margin: 0;
    font-family: win-bug-omega, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    background: #222;
  }

  input, textarea {
    font-family: win-bug-omega, system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }

  img {
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
    -webkit-font-smooting: antialiased;
  }

  a:-webkit-any-link {
    text-decoration: none;
    outline: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

`;

export default GlobalStyle;
