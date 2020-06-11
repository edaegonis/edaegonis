import React, { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import SunLogo from "../../components/atoms/Icons/Sun"
import GlobalStyle from "../../styles/GlobalStyle"
import { generateRandomTheme, getDefaultTheme } from "../themes"
import Moon from "../../components/atoms/Icons/Moon"
import ConfigIcon from "../../components/atoms/Icons/ConfigIcon"
import ExitIcon from "../../components/atoms/Icons/ExitIcon"
import Text from "../../components/atoms/Text/Text"

const StyledThemeSettingsButton = styled.span(({ theme }) => {
  const {
    colors: { secondary },
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
    background: ${secondary[0]};
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 3;
  `
})

const StyledThemeGeneratorWrapper = styled(StyledThemeSettingsButton)`
  bottom: 8rem;
`

const StyledThemeSettingsWrapper = styled.div(({ theme }) => {
  const {
    settings: {
      small: { size },
    },
    colors: { secondary, primary },
  } = theme

  return `
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    padding: 1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    border-top: 1px solid ${secondary[3]};
    border-right: 1px solid ${secondary[3]};
    background: linear-gradient(to left bottom, ${primary.map(
      (shade) => shade
    )});
    box-shadow: 0px 4px 4px ${secondary[4]};
  `
})

const StyledExitIcon = styled(ExitIcon)`
  align-self: flex-end;
  cursor: pointer;
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
      <StyledThemeSettingsButton onClick={handleThemeTypeToggle}>
        <ConfigIcon />
        {/* {isDarkTheme ? <SunLogo /> : <Moon />} */}
      </StyledThemeSettingsButton>

      <StyledThemeSettingsWrapper>
        <StyledExitIcon />
        <Text>dark mode</Text>
        <Text>generate random theme</Text>
      </StyledThemeSettingsWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper
