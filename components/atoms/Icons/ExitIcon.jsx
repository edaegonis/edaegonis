import React from "react"
import { withTheme } from "styled-components"

const ExitIcon = ({ className, theme }) => {
  const {
    colors: { secondary },
  } = theme
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        d="M12.7 12.2l-12 12 12-12 12 12-12-12zm0 0l12-12-12 12L.7.2l12 12z"
        stroke={secondary[4]}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

export default withTheme(ExitIcon)
