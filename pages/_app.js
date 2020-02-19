import App from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    background: "#091836",
    text: "#F9F9F9",
    special: "#F93663"
  },
  settings: {
    s_size: "1.2rem",
    m_size: "1.6rem",
    l_size: "3.2rem"
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
