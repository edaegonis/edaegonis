import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const {
    settings: {
      small: { size }
    },
    color: { baseBackground, base, link }
  } = theme

  return `
      @font-face {
        font-family: 'Hermes Regular';
        src: url('/fonts/Hermes-Regular.ttf'); 
        font-style: normal;
        font-display: swap;
      }
  
      *, *:before, *:after {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
      }
  
      html {
        font-size: 62.5%;
      }
      
      body {
        font-size: ${size}
        line-height: ${size}
        margin: 0;
        background: ${baseBackground};
        color: ${base}
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
      }
  
      html, body {
        min-height: 100%;
      }
      
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
  
      p {
        margin: 0;
        margin-bottom: ${size};
      }
  
      a {
        text-decoration: none;
        cursor: pointer;
        color: ${link};
      }
  
      text {
        fill: ${base}!important;
      }
  
    `
})

export default GlobalStyle
