import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../../styles/GlobalStyle"

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    {children}
  </ThemeProvider>
)

export default ThemeWrapper
