import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledText = styled.p(({ theme, selectedSize }) => {
  const {
    settings: {
      [selectedSize]: { size, line_height }
    },
    colors: { special }
  } = theme

  return `
    font-size: ${size};
    line-height: ${line_height};
    color: ${selectedSize === "large" ? special : "inherit"}
  `
})

/**
 * Component responsible for rendering default text attributes and styles according to props
 */
const Text = ({ size, children, className }) => (
  <StyledText
    as={size === "large" ? "h1" : "p"}
    selectedSize={size}
    className={className}
    data-testid="text"
  >
    {children}
  </StyledText>
)

Text.propTypes = {
  /** The size of the text to be rendered */
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  /** The children components */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** The className for the element (generally from styled-components) */
  className: PropTypes.string
}

Text.defaultProps = {
  size: "small"
}

export default Text
