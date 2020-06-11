import React from "react"

import Header from "../../layout/Header"
import Avatar from "../../atoms/Avatar/Avatar"
import Text from "../../atoms/Text/Text"
import { ActiveLink } from "../../atoms/ActiveLink/ActiveLink"

import {
  StyledTitleSection,
  StyledTitle,
  StyledHeaderInfo,
  StyledNav,
  StyledNavItem,
} from "../../../styles/about"

const AboutPageHeader = () => (
  <Header>
    <StyledHeaderInfo>
      <Avatar src="/images/avatar2.jpg" />
      <StyledTitleSection>
        <StyledTitle size="large">hi, i am eduardo</StyledTitle>
        <Text>an adept software engineer</Text>
      </StyledTitleSection>
    </StyledHeaderInfo>
    <StyledNav>
      <ActiveLink href="/about" as="/about/index">
        <StyledNavItem>index</StyledNavItem>
      </ActiveLink>
      <ActiveLink href="/about/story">
        <StyledNavItem>story</StyledNavItem>
      </ActiveLink>
    </StyledNav>
  </Header>
)

export default AboutPageHeader
