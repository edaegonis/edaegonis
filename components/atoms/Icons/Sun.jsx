import React from "react"
import { withTheme } from "styled-components"

function Sun({ theme }) {
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
        d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      ></path>
    </svg>
  )
}

export default withTheme(Sun)
