import React from "react"
import Link from "next/link"

import Text from "../components/atoms/Text/Text"
import TextDocument from "../components/atoms/TextDocument/TextDocument"
import Container from "../components/atoms/Container"
import Header from "../components/atoms/Header"
import Logo from "../components/atoms/icons/Logo"
import ParticlesField from "../components/atoms/ParticlesField"

import { StyledTitle, StyledHeaderInfo } from "../styles/about"
import {
  StyledTitleSection,
  StyledAvatarWrapper,
  StyledAbsoluteWrapper,
  StyledContentWrapper
} from "../styles/index"

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
