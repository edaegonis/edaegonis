import React, { useState } from "react"

import Text from "../../components/atoms/Text/Text"
import DataRadarChart from "../../components/atoms/DataRadarChart/DataRadarChart"
import TextDocument from "../../components/atoms/TextDocument/TextDocument"
import Container from "../../components/atoms/Container"
import {
  toolsData,
  frameworksData,
  languagesData
} from "../../lib/technologies"
import { randomQuantityOptions } from "../../lib/random"
import {
  StyledChartsWrapper,
  StyledChartWrapper,
  StyledChartsTitle,
  StyledTextDocument
} from "./styles"
import AboutPageHeader from "../../components/molecules/AboutPageHeader/AboutPageHeader"

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
