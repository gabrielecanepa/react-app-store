import colors from './colors'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i");

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    text-align: left;
    color: ${colors.blue};
    background-color: ${colors.grayLight};
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-weight: 400;
  }

  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    padding: 0 .5rem;
    font-weight: 300;
  }

  p {
    color: ${colors.greyDark};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;

    :active {
      box-shadow: none;
      outline: none;
    }
  }

  ul {
    list-style-type: none;
  }

  :focus {
    box-shadow: inset 0 0 0 2px ${colors.primary};
    outline: none;
  }
`
