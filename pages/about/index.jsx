import React, { useState } from "react"

import Text from "../../components/atoms/Text/Text"
import DataRadarChart from "../../components/atoms/DataRadarChart/DataRadarChart"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"
import AboutPageHeader from "../../components/molecules/AboutPageHeader/AboutPageHeader"

import {
  toolsData,
  frameworksData,
  languagesData,
} from "../../lib/technologies"
import {
  StyledChartsWrapper,
  StyledChartWrapper,
  StyledChartsTitle,
  StyledTextDocument,
} from "../../styles/about"
import { randomQuantityOptions } from "../../lib/random"

const RandomQuantityText = () => {
  const [randomQuantity, setRandomQuantity] = useState("quadrillions")

  const handleRandomQuantity = () => {
    const picked = Math.floor(Math.random() * randomQuantityOptions.length)

    setRandomQuantity(randomQuantityOptions[picked])
  }

  return <a onClick={handleRandomQuantity}>{randomQuantity}</a>
}

export default () => {
  return (
    <section>
      <Container>
        <TextDocument>
          <AboutPageHeader />

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <RandomQuantityText /> of users on e-commerce websites.
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
