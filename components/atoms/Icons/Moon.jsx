import React from "react"
import { withTheme } from "styled-components"

function Moon({ theme }) {
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
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
      ></path>
    </svg>
  )
}

export default withTheme(Moon)
