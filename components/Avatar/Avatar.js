import React from "react"
import styled from "styled-components"

const StyledAvatarWrapper = styled.div(({ theme }) => {
  const {
    settings: {
      desktop_breakpoint,
      small: { size }
    }
  } = theme

  return `
  flex: 1 100%;
  margin-right: 0;

  align-items: center;

  @media (min-width: ${desktop_breakpoint}) {
    flex: 1 0;

    margin-right: ${size};
  }
`
})

const StyledAvatar = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  border-radius: ${({ type }) => (type === "circular" ? "50%" : 0)};
  overflow: hidden;
`

const StyledAvatarImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const Avatar = ({ src, type }) => (
  <StyledAvatarWrapper>
    <StyledAvatar type={type}>
      <StyledAvatarImg src={src} />
    </StyledAvatar>
  </StyledAvatarWrapper>
)

Avatar.defaultProps = {
  type: "circular"
}

export default Avatar
