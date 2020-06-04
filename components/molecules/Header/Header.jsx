import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

import ExitIcon from "../../atoms/Icons/ExitIcon"
import { ActiveLink } from "../../atoms/ActiveLink/ActiveLink"
import Logo from "../../atoms/Icons/Logo"

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
  align-items: center;
  margin: 0;
  padding: 0 2em 0 1em;
  font-size: 1.5em;
  color: #1b5e20;
`

const StyledNavLink = styled.a`
  padding: 0.5em;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
  color: ${({ active }) => (active ? "#1b5e20;" : "#363636")};
  cursor: pointer;
  transition: color 0.2s linear, opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
    color: #1b5e20;
  }
`

const StyledNavigation = styled.nav`
  display: none;
  flex: 1 auto;
  padding: 0 2em;

  @media (min-width: 60em) {
    display: block;
  }
`

const StyledLink = styled(StyledNavLink)`
  margin: 0;
  color: #1b5e20;
`

const StyledMenuToggleBar = styled.span`
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px 0;
  background: #868e96;
`

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
const StyledMobileMenu = styled.div`
  position: fixed;
  visibility: hidden;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  padding: 1.5em 2em;
  line-height: 1em;
  background: #fff;
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

const StyledMobileNavLink = styled(StyledNavLink)`
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
          <Logo size="48" />
        </Link>
      </StyledTitle>

      <StyledNavigation>
        <ActiveLink href="/garden">
          <StyledNavLink>garden</StyledNavLink>
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
