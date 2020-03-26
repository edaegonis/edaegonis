import React, { useState } from "react"
import Link from "next/link"

import Text from "../../components/Text/Text"
import TextDocument from "../../components/TextDocument/TextDocument"
import Container from "../../components/Container"
import Avatar from "../../components/Avatar/Avatar"

import Header from "../../components/Header"
import { randomQuantityOptions } from "../../lib/random"
import {
  StyledTitleSection,
  StyledTitle,
  StyledHeaderInfo,
  StyledNav,
  StyledNavItem
} from "./styles"
import { ActiveLink } from "../../components/ActiveLink/ActiveLink"

export default () => {
  const [randomQuantity, setRandomQuantity] = useState("quadrillions")

  const handleRandomQuantity = () => {
    const picked = Math.floor(Math.random() * randomQuantityOptions.length)

    setRandomQuantity(randomQuantityOptions[picked])
  }

  return (
    <section>
      <Container>
        <TextDocument>
          <Header>
            <StyledHeaderInfo>
              <Avatar src="/images/avatar2.jpeg" />
              <StyledTitleSection>
                <StyledTitle size="large">you see eduardo</StyledTitle>
                <Text>an adept software developer</Text>
              </StyledTitleSection>
            </StyledHeaderInfo>
            <StyledNav>
              <ActiveLink href="/about">
                <StyledNavItem>index</StyledNavItem>
              </ActiveLink>
              <StyledNavItem>story</StyledNavItem>
              <StyledNavItem>works</StyledNavItem>
              <StyledNavItem>texts</StyledNavItem>
            </StyledNav>
          </Header>

          <Text>
            Previously I built interfaces and delivered projects for{" "}
            <a onClick={handleRandomQuantity}>{randomQuantity}</a> of users on
            e-commerce websites.
          </Text>
        </TextDocument>
      </Container>
    </section>
  )
}
