import React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import DataRadarChart from "../components/DataRadarChart/DataRadarChart"
import { toolsData, frameworksData, languagesData } from "../data/technologies"
import ReactLogo from "../components/ReactLogo"

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

const StyledTextDocument = styled.div`
  padding: 8rem 0 18rem 0;
  margin-left: 3rem;
  max-width: 42rem;
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

const StyledReactLogo = styled(ReactLogo)`
  max-width: 3.6rem;
  vertical-align: middle;
`

export default () => (
  <section>
    <GlobalStyle />

    <StyledContainer>
      <StyledTextDocument>
        <StyledHeader>
          <StyledAvatarWrapper>
            <StyledAvatar>
              <StyledAvatarImg src="/images/background.jpeg" />
            </StyledAvatar>
          </StyledAvatarWrapper>
          <StyledTitleSection>
            <StyledTitle size="large">Harmonious interfaces.</StyledTitle>
            <Text>Less is more.</Text>
          </StyledTitleSection>
        </StyledHeader>

        <Text>
          Building elegant products effortlessly
          <StyledReactLogo />
        </Text>

        <Text>
          You can read more <a>about me</a>. Also, the <a>tools I use</a>.
        </Text>
      </StyledTextDocument>

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
  </section>
)
