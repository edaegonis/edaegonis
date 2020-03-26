import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import SunLogo from "../../components/atoms/Icons/Sun"
import MoonLogo from "../../components/atoms/Icons/Moon"
import { lightTheme } from "../../styles/theme-light"
import { darkTheme } from "../../styles/theme-dark"
import GlobalStyle from "../../styles/GlobalStyle"

const StyledThemeSettingsWrapper = styled.span(({ theme }) => {
  const {
    color: { special }
  } = theme

  return `
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 3rem;
    bottom: 3rem;
    width: 4rem;
    height: 4rem;
    background: ${special};
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 3;
  `
})

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  function handleThemeTypeToggle() {
    setIsDarkTheme(prev => !prev)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />

      {children}
      <StyledThemeSettingsWrapper onClick={handleThemeTypeToggle}>
        {isDarkTheme ? <SunLogo /> : <MoonLogo />}
      </StyledThemeSettingsWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper
