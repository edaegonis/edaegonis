import React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import DataRadarChart from "../components/DataRadarChart/DataRadarChart"
import TextDocument from "../components/TextDocument/TextDocument"
import { toolsData, frameworksData, languagesData } from "../data/technologies"

const StyledContainer = styled.main`
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

const StyledAvatar = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${({
    theme: {
      settings: {
        large: { size }
      }
    }
  }) => size};
`

const StyledTitleSection = styled.section`
  flex: 1 auto;
`

const StyledAvatarWrapper = styled.div`
  flex: 1 0;
  margin-right: ${({
    theme: {
      settings: {
        small: { size }
      }
    }
  }) => size};
  align-items: center;
`

const StyledAvatarImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
const StyledTitle = styled(Text)`
  margin: 0;
`

const StyledChartsTitle = styled(Text)`
  color: ${({
    theme: {
      colors: { another_special }
    }
  }) => another_special};
  }
`

const StyledTextDocument = styled(TextDocument)`
  padding: 0;
`

export default () => (
  <section>
    <GlobalStyle />

    <StyledContainer>
      <TextDocument>
        <StyledHeader>
          <StyledAvatarWrapper>
            <StyledAvatar>
              <StyledAvatarImg src="/images/avatar2.jpeg" />
            </StyledAvatar>
          </StyledAvatarWrapper>
          <StyledTitleSection>
            <StyledTitle size="large">Eduardo Campos de Souza</StyledTitle>
            <Text>edusorcerer@gmail.com</Text>
          </StyledTitleSection>
        </StyledHeader>

        <Text>
          Previously I built interfaces, delivered projects and features for
          millions of users on e-commerce websites.
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
    </StyledContainer>
  </section>
)
