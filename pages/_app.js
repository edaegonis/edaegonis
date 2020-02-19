import App from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    background: "#091836",
    text: "#F3F3F3",
    special: "#D5A890"
  },
  settings: {
    s_size: { value: "1.6rem", line_height: "1.92" },
    m_size: { value: "1.9rem", line_height: "2.28" },
    l_size: { value: "2.2rem", line_height: "2.64" },
    desktop_breakpoint: "45rem"
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
