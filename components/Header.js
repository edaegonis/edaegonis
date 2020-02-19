import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${({
    theme: {
      settings: {
        large: { size }
      }
    }
  }) => size};
  flex-wrap: wrap;
  text-align: center;

  @media (min-width: ${({
      theme: {
        settings: { desktop_breakpoint }
      }
    }) => desktop_breakpoint}) {
    text-align: left;
  }
`
const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>

export default Header
