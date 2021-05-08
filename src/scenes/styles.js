import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    max-height: 100%;
    margin: 0px;
    padding: 0px;
  }

  body {
    font-size: 14px;
    font-family: 'Nunito', 'Adobe Blank', 'sans-serif';
    font-style: normal;
    line-height: 1.5;
    text-shadow: 0 0 1px rgba(black, 0.01);
    text-stroke: 1px, transparent;
    font-smothing: antialiased;
    overflow: hidden;
  }

  pre {
    font-size: 14px;
    font-family: 'Nunito', 'Adobe Blank', 'sans-serif';
    line-height: 1.5;
    margin: 0;
  }

  a, a:visited, a:active {
    color: inherit;
    text-decoration: none;
  }

  input {
    font-family: 'Nunito', 'Adobe Blank', 'sans-serif';
    min-width: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
`
export default GlobalStyles
