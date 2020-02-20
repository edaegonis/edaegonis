import React from "react"
import styled from "styled-components"

const StyledInput = styled.input(() => {
  return `
    outline: none;
    background: none;
    border: none;
    `
})

const Input = () => <StyledInput></StyledInput>

export default Input
