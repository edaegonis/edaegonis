import App from "next/app"
import Router from "next/router"
import withGA from "next-ga"
import React from "react"

import ThemeWrapper from "../utils/ThemeWrapper/ThemeWrapper"
import theme from "../styles/theme"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeWrapper theme={theme}>
        <Component {...pageProps} />
      </ThemeWrapper>
    )
  }
}

export default withGA("UA-158796630-1", Router)(MyApp)
