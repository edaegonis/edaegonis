import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const {
    settings: {
      small: { size }
    },
    colors: { background, text, another_special }
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
        font-family: 'Hermes Regular', sans-serif;
        background: ${background};
        color: ${text}
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
        color: ${another_special};
      }
  
      text {
        fill: ${text}!important;
  
      }
  
    `
})

export default GlobalStyle
