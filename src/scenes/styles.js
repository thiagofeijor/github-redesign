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
    background: rgb(239, 242, 247);
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

  a, a:visited, a:active {
    color: inherit;
    text-decoration: none;
  }

  input {
    font-family: 'Nunito', 'Adobe Blank', 'sans-serif';
    min-width: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  @media only screen and (max-width: 400px) {
    body {
      font-size: 8px;
    }
  }
`
export default GlobalStyles
