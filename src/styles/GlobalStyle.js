import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --rich-black-fogra-29: #011627ff;
    --imperial-red: #f71735ff;
    --turquoise: #41ead4ff;
    --baby-powder: #fdfffcff;
    --orange-peel: #ff9f1cff;

    --font-sans: 'Lora', 'Roboto', 'Source Serif Pro', -apple-system, system-ui, sans-serif;
    --font-mono: 'Cutive Mono', 'Roboto Mono','Fira Mono', monospace;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px*/

    @media screen and (max-width: 1444px) {
      font-size: 62.5%;
    }
    @media screen and (max-width: 992px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 768px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 600px) {
      font-size: 50%;
    }

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-sans);

    background: ${({ theme }) => theme.color.background};

    section {
      margin: 0 auto;
      padding: 100px 0;
      max-width: 1000px;

      @media (max-width: 768px) {
        padding: 80px 0;
      }

      @media (max-width: 480px) {
        padding: 60px 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 10px 0;
      font-weight: 600;
      line-height: 1.1;
    }

    .big-heading {
      margin: 0;
      font-size: clamp(40px, 8vw, 80px);
    }
    .medium-heading {
      margin: 0;
      font-size: clamp(40px, 5.5vw, 60px);
    }

    button {
      cursor: pointer;
      border: 0;
      border-radius: 3px;
    }

    ul {
      color: inherit;
    }

    li {
      color: inherit;
    }

    code {
	    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
  }
`;

export default GlobalStyle;
