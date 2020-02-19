import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render } from "@testing-library/react"

import Text from "./Text"
import ThemeWrapper from "../ThemeWrapper/ThemeWrapper"

test("renders successfully!", () => {
  const { getByTestId } = render(
    <ThemeWrapper>
      <Text size="small">I'm a random text</Text>
    </ThemeWrapper>
  )

  getByTestId("text")
})
