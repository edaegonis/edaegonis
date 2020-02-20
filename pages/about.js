import React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import DataRadarChart from "../components/DataRadarChart/DataRadarChart"
import TextDocument from "../components/TextDocument/TextDocument"
import Container from "../components/Container"
import Avatar from "../components/Avatar/Avatar"
import { toolsData, frameworksData, languagesData } from "../data/technologies"
import Header from "../components/Header"

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

const StyledTitleSection = styled.section(({ theme }) => {
  const {
    settings: { desktop_breakpoint }
  } = theme

  return `
  flex: 1 auto;

  @media (min-width: ${desktop_breakpoint}) {
    flex: 1 auto;
  }
`
})

const StyledTitle = styled(Text)`
  margin: 0;
`

const StyledChartsTitle = styled(Text)(({ theme }) => {
  const {
    colors: { another_special }
  } = theme

  return `
  margin-bottom: 0;
  text-align: center;
  color: ${another_special};
`
})

const StyledTextDocument = styled(TextDocument)`
  padding: 0;
`

export default () => (
  <section>
    <GlobalStyle />

    <Container>
      <TextDocument>
        <Header>
          <Avatar src="/images/avatar2.jpeg" />
          <StyledTitleSection>
            <StyledTitle size="large">Eduardo Campos de Souza</StyledTitle>
            <Text>edusorcerer@gmail.com</Text>
          </StyledTitleSection>
        </Header>

        <Text>
          Previously I built interfaces and delivered projects for millions of
          users on e-commerce websites.
        </Text>
      </TextDocument>

      <StyledTextDocument>
        <StyledChartsTitle size="medium">
          Favorite Technologies
        </StyledChartsTitle>
      </StyledTextDocument>

      <StyledChartsWrapper>
        <StyledChartWrapper>
          <DataRadarChart data={languagesData} />
        </StyledChartWrapper>
        <StyledChartWrapper>
          <DataRadarChart data={frameworksData} />
        </StyledChartWrapper>
        <StyledChartWrapper>
          <DataRadarChart data={toolsData} />
        </StyledChartWrapper>
      </StyledChartsWrapper>
    </Container>
  </section>
)
