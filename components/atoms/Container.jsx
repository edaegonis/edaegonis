import React from "react"
import styled from "styled-components"

const StyledContainer = styled.main`
  margin: 0 auto;
  max-width: 110rem;
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
