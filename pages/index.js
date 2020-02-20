import React, { useState } from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import TextDocument from "../components/TextDocument/TextDocument"
import Container from "../components/Container"
import ReactLogo from "../components/ReactLogo"
import Avatar from "../components/Avatar/Avatar"
import Header from "../components/Header"
import Input from "../components/Input/Input"

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

export default () => {
  const [isTyping, setIsTyping] = useState(false)

  return (
    <section>
      <Container>
        <TextDocument>
          <Header>
            <Avatar type="squared" src="/images/background.jpeg" />
            <StyledTitleSection>
              <StyledTitle size="large">Harmonious interfaces.</StyledTitle>
              <Text>Less is more.</Text>
            </StyledTitleSection>
          </Header>

          <Text>
            Currently building elegant products effortlessly
            <StyledReactLogo />
          </Text>

          <Text>
            You can read more{" "}
            {!isTyping ? (
              <a onClick={() => setIsTyping(prev => !prev)}>about me</a>
            ) : (
              <Input></Input>
            )}
          </Text>
        </TextDocument>
      </Container>
    </section>
  )
}
