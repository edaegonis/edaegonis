import React, { useState } from "react"
import styled from "styled-components"

import Text from "../../components/Text/Text"
import DataRadarChart from "../../components/DataRadarChart/DataRadarChart"
import TextDocument from "../../components/TextDocument/TextDocument"
import Container from "../../components/Container"
import Avatar from "../../components/Avatar/Avatar"
import {
  toolsData,
  frameworksData,
  languagesData
} from "../../lib/technologies"
import Header from "../../components/Header"
import { randomQuantityOptions } from "../../lib/random"

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
  text-align: left;

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
    color: { link }
  } = theme

  return `
    margin-bottom: 0;
    text-align: center;
    color: ${link};
  `
})

const StyledTextDocument = styled(TextDocument)`
  padding: 0;
`

const StyledHeaderInfo = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  align-items: center;
`

const StyledNav = styled.nav`
  display: flex;
  flex: 1 100%;
  justify-content: center;
`

export default () => {
  const [randomQuantity, setRandomQuantity] = useState("quadrillions")

  const handleRandomQuantity = () => {
    const picked = Math.floor(Math.random() * randomQuantityOptions.length)

    setRandomQuantity(randomQuantityOptions[picked])
  }

  return (
    <section>
      <Container>
        <TextDocument>
          <Header>
            <StyledHeaderInfo>
              <Avatar src="/images/avatar2.jpeg" />
              <StyledTitleSection>
                <StyledTitle size="large">you see eduardo</StyledTitle>
                <Text>an adept software developer</Text>
              </StyledTitleSection>
            </StyledHeaderInfo>
            <StyledNav>
              <a>index</a>
              <a>story</a>
              <a>works</a>
              <a>texts</a>
            </StyledNav>
          </Header>

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <a onClick={handleRandomQuantity}>{randomQuantity}</a> of users on
            e-commerce websites. 😥
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
}
