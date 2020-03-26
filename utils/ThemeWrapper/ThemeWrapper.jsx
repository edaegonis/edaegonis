import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import { lightTheme } from "../../styles/theme-light"
import { darkTheme } from "../../styles/theme-dark"
import GlobalStyle from "../../styles/GlobalStyle"

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
