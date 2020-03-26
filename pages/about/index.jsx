import React, { useState } from "react"

import Text from "../../components/atoms/Text/Text"
import DataRadarChart from "../../components/atoms/DataRadarChart/DataRadarChart"
import TextDocument from "../../components/atoms/TextDocument/TextDocument"
import Container from "../../components/atoms/Container"
import Avatar from "../../components/atoms/Avatar/Avatar"
import {
  toolsData,
  frameworksData,
  languagesData
} from "../../lib/technologies"
import Header from "../../components/atoms/Header"
import { randomQuantityOptions } from "../../lib/random"
import {
  StyledChartsWrapper,
  StyledChartWrapper,
  StyledTitleSection,
  StyledTitle,
  StyledChartsTitle,
  StyledTextDocument,
  StyledHeaderInfo,
  StyledNav,
  StyledNavItem
} from "./styles"
import { ActiveLink } from "../../components/atoms/ActiveLink/ActiveLink"

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
              <ActiveLink href="/about">
                <StyledNavItem>index</StyledNavItem>
              </ActiveLink>
              <ActiveLink href="/about/story">
                <StyledNavItem>story</StyledNavItem>
              </ActiveLink>
              <StyledNavItem>works</StyledNavItem>
              <StyledNavItem>texts</StyledNavItem>
            </StyledNav>
          </Header>

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <a onClick={handleRandomQuantity}>{randomQuantity}</a> of users on
            e-commerce websites.
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
