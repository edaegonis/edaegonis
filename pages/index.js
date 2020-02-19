import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { ResponsiveRadar } from "@nivo/radar"

const toolsData = [
  { name: "Git", value: 90 },
  { name: "Webpack", value: 60 },
  { name: "Gulp", value: 65 },

  { name: "Docker", value: 55 },
  { name: "Babel", value: 65 },
  { name: "styled-components", value: 70 },
  { name: "react-testing-library", value: 70 },
  { name: "Jest", value: 70 }
]

const frameworksData = [
  { name: "Magento 2", value: 65 },
  { name: "React", value: 85 },
  { name: "jQuery", value: 80 },
  { name: "Tachyons", value: 70 },
  { name: "Express", value: 60 },
  { name: "React Native", value: 65 },
  { name: "ApolloGraphql", value: 65 }
]

const languagesData = [
  { name: "HTML", value: 85 },
  { name: "CSS(SASS)", value: 85 },
  { name: "SQL", value: 50 },
  { name: "PHP", value: 70 },
  { name: "Javascript", value: 90 },
  { name: "Lua", value: 50 }
]

const GlobalStyle = createGlobalStyle`
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
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Hermes Regular', sans-serif;
    background: ${({
      theme: {
        colors: { background }
      }
    }) => background};
    color: ${({
      theme: {
        colors: { text }
      }
    }) => text}
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
    cursor: pointer;
    color: ${({
      theme: {
        colors: { special }
      }
    }) => special};
  }

  a, p, span {
    line-height: 1.5
  }

  text {
    fill: ${({
      theme: {
        colors: { text }
      }
    }) => text}!important;
  }

`

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 110rem;
`

const StyledChartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #000;
`

const StyledChartWrapper = styled.div`
  margin: 0 auto;
  height: 32rem;
  flex: 0 32rem;
`

const DataChart = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={["value"]}
    curve="linearClosed"
    indexBy="name"
    margin={{ top: 70, right: 70, bottom: 70, left: 70 }}
    maxValue={100}
    gridLevels={6}
    enableDotLabel={true}
    colors={["#F93663"]}
    dotLabelYOffset={-3}
    gridLabelOffset={9}
  />
)

const StyledChartsTitle = styled.h3`
  text-align: center;
  font-size: ${({
    theme: {
      settings: { m_size }
    }
  }) => m_size};
`

const StyledTitle = styled.h1`
  text-align: center;
  font-size: ${({
    theme: {
      settings: { l_size }
    }
  }) => l_size};
`

export default () => (
  <>
    <GlobalStyle />
    <StyledContainer>
      <StyledTitle>Hello World</StyledTitle>
      <StyledChartsTitle>Charts</StyledChartsTitle>
      <StyledChartsWrapper>
        <StyledChartWrapper>
          <DataChart data={languagesData} />
        </StyledChartWrapper>
        <StyledChartWrapper>
          <DataChart data={frameworksData} />
        </StyledChartWrapper>
        <StyledChartWrapper>
          <DataChart data={toolsData} />
        </StyledChartWrapper>
      </StyledChartsWrapper>
    </StyledContainer>
  </>
)
