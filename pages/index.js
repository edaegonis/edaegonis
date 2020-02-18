import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { ResponsiveRadar } from "@nivo/radar"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const data = [
  { language: "javascript", percentage: 80 },
  { language: "golang", percentage: 60 },
  { language: "python", percentage: 65 },
  { language: "java", percentage: 50 },
  { language: "php", percentage: 70 }
]

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  html, body {
    min-height: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    cursor: pointer
  }
  a, p, span {
    color: #363636;
    line-height: 1.5
  }
  h1, h2, h3 {
    color: #1d1d1d;
  }

  body {
    background: #F9F9F9
  }
`

const StyledDiv = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-top: 50px;
`

export default () => (
  <>
    <GlobalStyle />
    <StyledDiv>
      <ResponsiveRadar
        keys={["percentage"]}
        curve="linearClosed"
        indexBy="language"
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        data={data}
        maxValue={100}
        gridLevels={6}
        enableDotLabel={true}
        colors={["#900990"]}
      />
    </StyledDiv>
  </>
)
