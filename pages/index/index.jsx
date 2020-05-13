import React from "react"
import Link from "next/link"

import Text from "../../components/atoms/Text/Text"
import TextDocument from "../../components/layout/TextDocument/TextDocument"
import Container from "../../components/layout/Container"
import Header from "../../components/layout/Header"
import Logo from "../../components/atoms/Icons/Logo"

import { StyledTitle, StyledHeaderInfo } from "../../styles/about"
import {
  StyledTitleSection,
  StyledAvatarWrapper,
} from "../../styles/index/index"

export default () => (
  <section>
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
  </section>
)
