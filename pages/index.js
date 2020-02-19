import React from "react"
import styled from "styled-components"
import Link from "next/link"

import GlobalStyle from "../styles/GlobalStyle"
import Text from "../components/Text/Text"
import TextDocument from "../components/TextDocument/TextDocument"
import ReactLogo from "../components/ReactLogo"

const StyledContainer = styled.main`
  margin: 0 auto;
  max-width: 110rem;
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
      <TextDocument>
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
          Currently building elegant products effortlessly
          <StyledReactLogo />
        </Text>

        <Text>
          You can read more{" "}
          <Link href="/about">
            <a>about me</a>
          </Link>
        </Text>
      </TextDocument>
    </StyledContainer>
  </section>
)
