import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header(({ theme }) => {
  const {
    settings: {
      large: { size },
      desktop_breakpoint
    }
  } = theme

  return `
    display: flex;
    margin-bottom: ${size};
    flex-direction: column;
    align-items: center;

    @media (min-width: ${desktop_breakpoint}) {
      align-items: unset;
    }
  `
})
const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>

export default Header
