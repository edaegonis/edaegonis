import React, { useState } from "react"

import Text from "../../components/atoms/Text/Text"
import DataRadarChart from "../../components/atoms/DataRadarChart/DataRadarChart"
import TextDocument from "../../components/atoms/TextDocument/TextDocument"
import Container from "../../components/atoms/Container"
import AboutPageHeader from "../../components/molecules/AboutPageHeader/AboutPageHeader"

import {
  toolsData,
  frameworksData,
  languagesData
} from "../../lib/technologies"
import {
  StyledChartsWrapper,
  StyledChartWrapper,
  StyledChartsTitle,
  StyledTextDocument
} from "../../styles/about"
import { randomQuantityOptions } from "../../lib/random"

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
          <AboutPageHeader />

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <a onClick={handleRandomQuantity}>{randomQuantity}</a> of users on
            e-commerce websites.
          </Text>
        </TextDocument>

        <StyledTextDocument>
          <StyledChartsTitle size="medium">
            favorite technologies
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
