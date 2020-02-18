import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { ResponsiveRadar } from "@nivo/radar"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

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
  { name: "CSS(SASS/LESS)", value: 85 },
  { name: "SQL", value: 50 },
  { name: "PHP", value: 70 },
  { name: "Javascript", value: 90 },
  { name: "Lua", value: 50 }
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

const StyledChartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
`

const StyledChartWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 60px;
`

const DataChart = ({ data }) => (
  <ResponsiveRadar
    data={data}
    keys={["value"]}
    curve="linearClosed"
    indexBy="name"
    margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
    maxValue={100}
    gridLevels={6}
    enableDotLabel={true}
    colors={["#900990"]}
  />
)

export default () => (
  <>
    <GlobalStyle />
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
  </>
)
