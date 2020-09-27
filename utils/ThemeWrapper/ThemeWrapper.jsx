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

const StyledThemeSettingsWrapper = styled.div(({ theme, isOpened }) => {
  const {
    settings: { desktop_breakpoint },
    colors: { secondary, primary },
  } = theme

  return `
    visibility: ${isOpened ? "visible" : "hidden"};
    opacity: ${isOpened ? "1" : "0"};
    position: fixed;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    padding: 1.5rem 1.5rem 4rem 1.5rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    border-top: .5px solid ${secondary[3]};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background: linear-gradient(to left bottom, ${primary.map(
      (shade) => shade
    )});
    box-shadow: 0px 4px 4px ${secondary[4]};
    transition: all .4s linear;

    @media (min-width: ${desktop_breakpoint}) {
      padding: 2.5rem 2.5rem 4rem 2.5rem;
      border-top-left-radius: 0;
      border-right: 1px solid ${secondary[3]};
    }
  `
})

const StyledExitIconWrapper = styled.span`
  align-self: flex-end;
  cursor: pointer;
`

const StyledThemeIconWrapper = styled.span(({ theme }) => {
  const {
    colors: { secondary },
  } = theme

  return `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: ${secondary[0]};
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    z-index: 3;
  `
})

const StyledSettingRow = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0;
  }

  span {
    margin-right: 1.2rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const defaultTheme = getDefaultTheme()
  const [isSettingsPanelOpened, setIsSettingsPanelOpened] = useState(false)
  const [theme, setTheme] = useState(defaultTheme)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

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

  function handleSettingsPanelToggle() {
    setIsSettingsPanelOpened((prev) => !prev)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />

      {children}

      {!isSettingsPanelOpened && (
        <StyledThemeSettingsButton onClick={handleSettingsPanelToggle}>
          <ConfigIcon />
        </StyledThemeSettingsButton>
      )}

      <StyledThemeSettingsWrapper isOpened={isSettingsPanelOpened}>
        <StyledExitIconWrapper onClick={handleSettingsPanelToggle}>
          <ExitIcon />
        </StyledExitIconWrapper>

        <StyledSettingRow>
          <StyledThemeIconWrapper onClick={handleThemeTypeToggle}>
            {isDarkTheme ? <SunLogo /> : <Moon />}
          </StyledThemeIconWrapper>

          <Text variation="a" onClick={handleThemeTypeToggle}>
            {isDarkTheme ? "switch to light mode" : "switch to dark mode"}
          </Text>
        </StyledSettingRow>
        <StyledSettingRow>
          <Text variation="a" onClick={handleRandomThemeGeneration}>
            generate random theme
          </Text>
        </StyledSettingRow>
      </StyledThemeSettingsWrapper>
    </ThemeProvider>
  )
}

export default ThemeWrapper
