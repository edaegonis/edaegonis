import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const {
    settings: {
      small: { size },
    },
    color: { base, link },
    shader,
  } = theme

  return `
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
        background: linear-gradient(to left bottom, ${shader.map(
          (shade) => shade
        )});
        color: ${base};
        transition: all 5s cubic-bezier(0.37, 0, 0.63, 1);
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
