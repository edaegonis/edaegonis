import React from "react"
import styled from "styled-components"
import Link from "next/link"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import TextDocument from "../components/TextDocument/TextDocument"
import Container from "../components/Container"
import ReactLogo from "../components/ReactLogo"
import Avatar from "../components/Avatar/Avatar"
import Header from "../components/Header"

const StyledTitleSection = styled.section`
  flex: 1 100%;
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

    <Container>
      <TextDocument>
        <Header>
          <Avatar src="/images/background.jpeg" />
          <StyledTitleSection>
            <StyledTitle size="large">Harmonious interfaces.</StyledTitle>
            <Text>Less is more.</Text>
          </StyledTitleSection>
        </Header>

        <Text>
          Currently building elegant products effortlessly
          <StyledReactLogo />
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd
        </Text>

        <Text>
          You can read more{" "}
          <Link href="/about">
            <a>about me</a>
          </Link>
        </Text>
      </TextDocument>
    </Container>
  </section>
)
