import React from "react"
import styled from "styled-components"

import GlobalStyle from "../GlobalStyle"
import Text from "../components/Text/Text"
import DataRadarChart from "../components/DataRadarChart/DataRadarChart"
import { toolsData, frameworksData, languagesData } from "../data/charts"

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
        <Text size="large">Eduardo Campos de Souza</Text>
        <Text size="small">
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd
        </Text>
      </StyledDocumentSection>

      <Text size="medium">Favorite Development Technologies</Text>

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
    </StyledContainer>
  </>
)
