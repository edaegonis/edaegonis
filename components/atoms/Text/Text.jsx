import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledText = styled.p(({ theme, selectedSize }) => {
  const {
    settings: {
      [selectedSize]: { size, line_height },
    },
    colors: { secondary },
  } = theme

  return `
    margin: 0;
    margin-bottom: 1rem;
    font-size: ${size};
    line-height: ${line_height};
    color: ${selectedSize === "small" ? secondary[2] : secondary[0]};
  `
})

/**
 * Component responsible for rendering default text attributes and styles according to props
 */
const Text = React.forwardRef(
  ({ variation, size, children, className, onClick }, ref) => (
    <StyledText
      className={className}
      ref={ref}
      as={variation}
      selectedSize={size}
      onClick={onClick}
      data-testid="text"
    >
      {children}
    </StyledText>
  )
)

Text.propTypes = {
  /** The text variation */
  variation: PropTypes.oneOf(["a", "span", "p", "h1", "h2", "h3"]),
  /** The size of the text to be rendered */
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]).isRequired,
  /** The children components */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** The className for the element (generally from styled-components) */
  className: PropTypes.string,
}

Text.defaultProps = {
  size: "small",
  variation: "p",
}

export default Text
