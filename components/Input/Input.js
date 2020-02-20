import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledInput = styled.input(({ theme, selectedSize }) => {
  const {
    color: { base, link },
    settings: {
      [selectedSize]: { size }
    }
  } = theme
  return `
    outline: none;
    background: none;
    border: none;
    padding: .6rem 0;
    border-bottom: 1px solid ${link}
    border-left: 1px solid ${link}
    text-indent: 1rem;
    color: ${base};
    font-family: 'Hermes Regular',sans-serif;
    transition: all .4s cubic-bezier(1, 0.35, 0, 0.93);

    &:focus {
      text-indent: 0;
      border-left: none;
    }
    `
})

/**
 * Component responsible for rendering an input with theme styles and some default attributes
 */
const Input = ({ size }) => <StyledInput selectedSize={size}></StyledInput>

Input.propTypes = {
  /** The size for the input */
  size: PropTypes.string
}

Input.defaultProps = {
  size: "small"
}

export default Input
