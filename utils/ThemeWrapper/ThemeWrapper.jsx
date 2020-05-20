import React, { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import SunLogo from "../../components/atoms/Icons/Sun"
import GlobalStyle from "../../styles/GlobalStyle"
import { generateRandomTheme, getDefaultTheme } from "../themes"
import Moon from "../../components/atoms/Icons/Moon"

const StyledThemeSettingsWrapper = styled.span(({ theme }) => {
  const {
    color: { special },
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

const StyledThemeGeneratorWrapper = styled(StyledThemeSettingsWrapper)`
  bottom: 8rem;
`

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(getDefaultTheme())
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (isMounted) {
      handleRandomThemeGeneration()
    }

    setIsMounted(true)
  }, [isDarkTheme, setIsMounted])

  function handleRandomThemeGeneration() {
    const theme = generateRandomTheme(isDarkTheme && "dark")
    console.log(
      "Generating random " + (isDarkTheme ? "dark" : "light") + " theme"
    )
    setTheme(theme)
  }

  function handleThemeTypeToggle() {
    setIsDarkTheme((prev) => !prev)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {children}
      <StyledThemeGeneratorWrapper onClick={handleRandomThemeGeneration}>
        <SunLogo />
      </StyledThemeGeneratorWrapper>
      <StyledThemeSettingsWrapper onClick={handleThemeTypeToggle}>
        {isDarkTheme ? <SunLogo /> : <Moon />}
      </StyledThemeSettingsWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper
