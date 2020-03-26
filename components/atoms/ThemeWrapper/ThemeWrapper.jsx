import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyle from "../../../styles/GlobalStyle"

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    {children}
  </ThemeProvider>
)

export default ThemeWrapper
