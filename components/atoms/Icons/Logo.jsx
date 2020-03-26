import React from "react"

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="101"
      height="101"
      fill="none"
      viewBox="0 0 101 101"
    >
      <circle cx="50.5" cy="50.5" r="49.5" stroke="#F33663"></circle>
      <circle cx="74" cy="43" r="24.5" stroke="#F33663"></circle>
      <circle cx="27" cy="43" r="24.5" stroke="#F33663"></circle>
      <circle cx="36" cy="70" r="24.5" stroke="#F33663"></circle>
      <circle cx="65" cy="70" r="24.5" stroke="#F33663"></circle>
      <circle cx="51" cy="26" r="24.5" stroke="#F33663"></circle>
      <path
        stroke="#F3F3F3"
        d="M50.75 26l-15 44.314L74 42.93H27l38.25 27.385L50.75 26z"
      ></path>
      <path
        stroke="#F3F3F3"
        d="M12.5 63l15-44.5h47l14 44.5-38 27-38-27z"
      ></path>
      <path
        stroke="#F3F3F3"
        d="M35.5 45.5l15-10 16 10-6.5 18H41l-5.5-18z"
      ></path>
    </svg>
  )
}

export default Logo
