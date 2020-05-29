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
              <StyledTitle size="large">
                A place for sharing and growing
              </StyledTitle>
              <Text>That’s it. You shouldn’t expect too much tho ;)</Text>
            </StyledTitleSection>
          </StyledHeaderInfo>
        </Header>

        <Text>
          Maybe you can start by reading some of my <a>writings</a> or checking
          out my
          <a>projects</a>. You can also play mmorpg here Currently building
          elegant qualitative <a>things</a>
        </Text>

        {/* {!isTyping ? "You can read more " : "Would you tell me your name? "} */}
        <Text>
          <Link href="/about">
            <a>Who even are you?</a>
          </Link>
        </Text>
      </TextDocument>
    </Container>
  </section>
)
