import React from "react"
import styled from "styled-components"
import Link from "next/link"

import Text from "../components/Text/Text"
import TextDocument from "../components/TextDocument/TextDocument"
import Container from "../components/Container"
import ReactLogo from "../components/ReactLogo"
import Header from "../components/Header"
import Logo from "../components/Logo"
import { ParticlesField } from "../components/ParticlesField"

const StyledTitleSection = styled.section`
  flex: 1 100%;

  @media (min-width: ${({
      theme: {
        settings: { desktop_breakpoint }
      }
    }) => desktop_breakpoint}) {
    flex: 1 auto;
  }
`

const StyledTitle = styled(Text)`
  margin: 0;
`

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

  @media (min-width: ${desktop_breakpoint}) {
    flex: 1 0;

    margin-right: ${size};
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
            <StyledAvatarWrapper>
              <Logo />
            </StyledAvatarWrapper>
            <StyledTitleSection>
              <StyledTitle size="large">Harmonious interfaces.</StyledTitle>
              <Text>Less is more.</Text>
            </StyledTitleSection>
          </Header>

          <Text>
            Currently building elegant products effortlessly
            <StyledReactLogo />
          </Text>

          {/* {!isTyping ? "You can read more " : "Would you tell me your name? "} */}
          <Text>
            do you want{" "}
            <Link href="/about">
              <a>more?</a>
            </Link>
          </Text>
        </TextDocument>
      </Container>
    </StyledContentWrapper>
  </section>
)
