import "@testing-library/jest-dom/extend-expect"
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react"
import { render } from "@testing-library/react"
import Text from "./Text"

import { ThemeProvider } from "styled-components"

import { theme } from "../../styles/theme"

test("renders successfully!", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Text size="small">I'm a random text</Text>
    </ThemeProvider>
  )

  getByTestId("text")
})
