import styled from "styled-components"

import Text from "../../components/Text/Text"
import TextDocument from "../../components/TextDocument/TextDocument"

export const StyledChartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #000;
`

export const StyledChartWrapper = styled.div`
  margin: 0 auto;
  height: 32rem;
  flex: 0 32rem;
`

export const StyledTitleSection = styled.section(({ theme }) => {
  const {
    settings: { desktop_breakpoint }
  } = theme

  return `
  flex: 1 auto;
  text-align: left;

  @media (min-width: ${desktop_breakpoint}) {
    flex: 1 auto;
  }
`
})

export const StyledTitle = styled(Text)`
  margin: 0;
`

export const StyledChartsTitle = styled(Text)(({ theme }) => {
  const {
    color: { link }
  } = theme

  return `
    margin-bottom: 0;
    text-align: center;
    color: ${link};
  `
})

export const StyledTextDocument = styled(TextDocument)`
  padding: 0;
`

export const StyledHeaderInfo = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  align-items: center;
`

export const StyledNav = styled.nav`
  display: flex;
  flex: 1 100%;
  justify-content: center;
`

export const StyledNavItem = styled.a`
  margin: 0 0.8rem;
  position: relative;
  cursor: pointer;
  transition: color 0.2s linear, opacity 0.2s linear;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
    &::before {
      background-color: #000;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    bottom: 0;
    right: 0;
    transition: background-color 0.4s linear;
    background-color: ${({ active }) => (active ? "#000" : "transparent")};
  }
`
