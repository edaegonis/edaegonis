import React from "react"

import Header from "../../atoms/Header"
import Avatar from "../../atoms/Avatar/Avatar"
import Text from "../../atoms/Text/Text"
import { ActiveLink } from "../../atoms/ActiveLink/ActiveLink"

import {
  StyledTitleSection,
  StyledTitle,
  StyledHeaderInfo,
  StyledNav,
  StyledNavItem
} from "../../../pages/about/styles"

const AboutPageHeader = () => (
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
      <ActiveLink href="/about/story">
        <StyledNavItem>story</StyledNavItem>
      </ActiveLink>
      <StyledNavItem>works</StyledNavItem>
      <StyledNavItem>texts</StyledNavItem>
    </StyledNav>
  </Header>
)

export default AboutPageHeader
