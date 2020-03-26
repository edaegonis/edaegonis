import React from "react"
import styled from "styled-components"
import Link from "next/link"

import Text from "../components/atoms/Text/Text"
import TextDocument from "../components/atoms/TextDocument/TextDocument"
import Container from "../components/atoms/Container"
import ReactLogo from "../components/atoms/ReactLogo"
import Header from "../components/atoms/Header"
import Logo from "../components/atoms/Logo"
import { ParticlesField } from "../components/atoms/ParticlesField"

import { StyledTitle, StyledHeaderInfo } from "../styles/about"

export const StyledTitleSection = styled.section(({ theme }) => {
  const {
    settings: { desktop_breakpoint }
  } = theme

  return `
  flex: 1 auto;
  text-align: center;

    @media (min-width: ${desktop_breakpoint}) {
      text-align: left;
    }
  `
})

const StyledReactLogo = styled(ReactLogo)`
  max-width: 3.6rem;
  vertical-align: middle;
`

const StyledAvatarWrapper = styled.div(({ theme }) => {
  const {
    settings: {
      desktop_breakpoint,
      small: { size }
    }
  } = theme

  return `
    flex: 1 100%;
    margin-right: 0;
    align-items: center;
    text-align: center;

    @media (min-width: ${desktop_breakpoint}) {
      flex: 1 0;
      margin-right: ${size};
      text-align: left;
    }
  `
})

const StyledAbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`

const StyledContentWrapper = styled(StyledAbsoluteWrapper)`
  z-index: 2;
`

export default () => (
  <section>
    <StyledAbsoluteWrapper>
      <ParticlesField />
    </StyledAbsoluteWrapper>
    <StyledContentWrapper>
      <Container>
        <TextDocument>
          <Header>
            <StyledHeaderInfo>
              <StyledAvatarWrapper>
                <Logo />
              </StyledAvatarWrapper>
              <StyledTitleSection>
                <StyledTitle size="large">Harmonious interfaces.</StyledTitle>
                <Text>Scalable high performing technology.</Text>
              </StyledTitleSection>
            </StyledHeaderInfo>
          </Header>

          <Text>
            Currently building elegant qualitative <a>things</a>
            <StyledReactLogo />
          </Text>

          {/* {!isTyping ? "You can read more " : "Would you tell me your name? "} */}
          <Text>
            Do you want{" "}
            <Link href="/about">
              <a>more?</a>
            </Link>
          </Text>
        </TextDocument>
      </Container>
    </StyledContentWrapper>
  </section>
)
