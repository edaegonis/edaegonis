import React from "react"
import { withTheme } from "styled-components"

function Icon({ theme }) {
  const {
    colors: { primary },
  } = theme

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={primary[2]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
      ></path>
    </svg>
  )
}

export default withTheme(Icon)
