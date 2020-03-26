import React, { useState } from "react"

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
import Link from "next/link"

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
              <StyledNavItem>index</StyledNavItem>
              <Link href="/about/story">
                <StyledNavItem>story</StyledNavItem>
              </Link>
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
