import App from "next/app"
import React from "react"
import ThemeWrapper from "../components/ThemeWrapper/ThemeWrapper"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    )
  }
}
