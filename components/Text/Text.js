import React from "react"
import styled from "styled-components"

const StyledText = styled.h1(({ theme, selectedSize }) => {
  const {
    settings: {
      [selectedSize]: { size, line_height }
    }
  } = theme

  return `
    text-align: center;
    font-size: ${size};
    line-height: ${line_height};
  `
})

/**
 * Component responsible for rendering default text attributes and styles according to props
 */
const Text = ({ size, children }) => (
  <StyledText selectedSize={size}>{children}</StyledText>
)

export default Text
