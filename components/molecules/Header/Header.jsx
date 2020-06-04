import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

import ExitIcon from "../../atoms/Icons/ExitIcon"
import { ActiveLink } from "../../atoms/ActiveLink/ActiveLink"
import Logo from "../../atoms/Icons/Logo"
import { StyledNavItem } from "../../../styles/about"

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  height: 70px;
  line-height: 70px;
`

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 2em 0 1em;
  font-size: 1.5em;
  color: #1b5e20;

  a {
    display: flex;
  }
`

const StyledNavigation = styled.nav`
  display: none;
  flex: 1 auto;
  padding: 0 2em;

  @media (min-width: 60em) {
    display: flex;
    align-items: center;
  }
`

const StyledMenuToggleBar = styled.span(({ theme }) => {
  const {
    colors: { secondary },
  } = theme

  return `
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px 0;
    background: ${secondary[3]};
  `
})

const StyledMenuToggle = styled.span`
  margin: 0 10px;
  cursor: pointer;
`

const StyledMobileIcons = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 0 25px;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 60em) {
    display: none;
  }
`
const StyledMobileMenu = styled.div(({ theme }) => {
  const {
    colors: { primary },
  } = theme

  return `
    position: fixed;
    visibility: hidden;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    padding: 1.5em 2em;
    line-height: 1em;
    background: ${primary[2]};
    opacity: 0;
    -webkit-transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: opacity 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      visibility: visible;
      opacity: 1;
    }
  `
})

const StyledMobileNavLink = styled(StyledNavItem)`
  display: block;
  text-align: center;
`

const StyledMenuCloseIcon = styled.span`
  display: block;
  width: 100%;
  text-align: right;
`

const Header = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false)

  return (
    <StyledHeader>
      <StyledTitle>
        <Link href="/">
          <a>
            <Logo size="48" />
          </a>
        </Link>
      </StyledTitle>

      <StyledNavigation>
        <ActiveLink href="/garden">
          <StyledNavItem>garden</StyledNavItem>
        </ActiveLink>
      </StyledNavigation>

      <StyledMobileIcons>
        <StyledMenuToggle onClick={() => setMobileMenuActive(true)}>
          <StyledMenuToggleBar />
          <StyledMenuToggleBar />
          <StyledMenuToggleBar />
        </StyledMenuToggle>
      </StyledMobileIcons>

      <StyledMobileMenu className={`${isMobileMenuActive ? "active" : ""}`}>
        <StyledMenuCloseIcon onClick={() => setMobileMenuActive(false)}>
          <ExitIcon />
        </StyledMenuCloseIcon>

        <ActiveLink href="/garden">
          <StyledMobileNavLink onClick={() => setMobileMenuActive(false)}>
            garden
          </StyledMobileNavLink>
        </ActiveLink>
      </StyledMobileMenu>
    </StyledHeader>
  )
}

export default Header
