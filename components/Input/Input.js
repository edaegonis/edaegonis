import React from "react"
import styled from "styled-components"

const StyledInput = styled.input(({ theme, selectedSize }) => {
  const {
    colors: { another_special },
    settings: {
      [selectedSize]: { size }
    }
  } = theme
  return `
    outline: none;
    background: none;
    border: none;
    border-bottom: 1px solid ${another_special}
    border-left: 1px solid ${another_special}
    text-indent: ${size}
    `
})

const Input = ({ size }) => <StyledInput selectedSize={size}></StyledInput>

Input.defaultProps = {
  size: "small"
}

export default Input
