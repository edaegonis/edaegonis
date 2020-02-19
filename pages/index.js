import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { ResponsiveRadar } from "@nivo/radar"
import Text from "../components/Text/Text"

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

const GlobalStyle = createGlobalStyle(({ theme }) => {
  const {
    settings: {
      small: { size }
    },
    colors: { background, text, special }
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
      color: ${special};
    }

    text {
      fill: ${text}!important;

    }

  `
})

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
    colors={"#D5A890"}
    dotLabelYOffset={-3}
    gridLabelOffset={9}
  />
)

const StyledDocumentSection = styled.section`
  padding: 3rem 0 18rem 0;
  margin-left: 6rem;
  max-width: 50rem;
`

export default () => (
  <>
    <GlobalStyle />

    <StyledContainer>
      <StyledDocumentSection>
        <Text size="large">Hello World</Text>
        <Text size="small">
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd
        </Text>
      </StyledDocumentSection>

      <Text size="medium">Charts</Text>

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
