import React from "react"
import styled from "styled-components"

const StyledAvatarWrapper = styled.div`
  flex: 1 100%;

  margin-right: ${({
    theme: {
      settings: {
        small: { size }
      }
    }
  }) => size};
  align-items: center;

  @media (min-width: ${({
      theme: {
        settings: { desktop_breakpoint }
      }
    }) => desktop_breakpoint}) {
    flex: 1 0;
  }
`

const StyledAvatar = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
`

const StyledAvatarImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const Avatar = ({ src }) => (
  <StyledAvatarWrapper>
    <StyledAvatar>
      <StyledAvatarImg src={src} />
    </StyledAvatar>
  </StyledAvatarWrapper>
)

export default Avatar