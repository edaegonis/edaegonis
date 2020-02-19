import React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "../../styles/theme"

/**
 * Will wrap children components into a ThemeProvider
 */
const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
