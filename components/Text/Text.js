import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

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

Text.propTypes = {
  /** The size of the text to be rendered */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** The children components */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Text
