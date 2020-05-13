import styled from "styled-components"

import ReactLogo from "../../components/atoms/Icons/ReactLogo"

export const StyledTitleSection = styled.section(({ theme }) => {
  const {
    settings: { desktop_breakpoint },
  } = theme

  return `
  flex: 1 auto;
  text-align: center;

    @media (min-width: ${desktop_breakpoint}) {
      text-align: left;
    }
  `
})

export const StyledReactLogo = styled(ReactLogo)`
  max-width: 3.6rem;
  vertical-align: middle;
`

export const StyledAvatarWrapper = styled.div(({ theme }) => {
  const {
    settings: {
      desktop_breakpoint,
      small: { size },
    },
  } = theme

  return `
    flex: 1 100%;
    margin-right: 0;
    align-items: center;
    text-align: center;

    @media (min-width: ${desktop_breakpoint}) {
      flex: 1 0;
      margin-right: ${size};
      text-align: left;
    }
  `
})
