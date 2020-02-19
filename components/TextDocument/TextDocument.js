import React from "react"
import styled from "styled-components"

const StyledTextDocument = styled.div`
  padding: 8rem 0;
  margin-left: 1.5rem;
  max-width: 42rem;

  @media (min-width: ${({
      theme: {
        settings: { desktop_breakpoint }
      }
    }) => desktop_breakpoint}) {
    margin-left: 3rem;
  }
`

const TextDocument = ({ children, className }) => (
  <StyledTextDocument className={className}>{children}</StyledTextDocument>
)

export default TextDocument
