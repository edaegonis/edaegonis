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
  { name: "CSS(SASS)", value: 85 },
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

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #F9F9F9
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

`

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 110rem;
`

const StyledChartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
    colors={["#900990"]}
    dotLabelYOffset={-6}
    gridLabelOffset={8}
  />
)

const StyledChartsTitle = styled.h3`
  color: #900990;
  text-align: center;
`

export default () => (
  <>
    <GlobalStyle />
    <StyledContainer>
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
