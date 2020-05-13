import React, { useEffect, useCallback } from "react"
import { withTheme } from "styled-components"
import anime from "animejs"

function Logo({ theme }) {
  const {
    logo: { primary, secondary },
  } = theme

  const handleAnimation = useCallback(() => {
    const minorPentagram =
      "M45.0197 42.9291L50.75 26L56.2893 42.9291M45.0197 42.9291L41.5046 53.3137M45.0197 42.9291H56.2893M45.0197 42.9291H27L41.5046 53.3137M41.5046 53.3137L35.75 70.3143L50.5 59.754M41.5046 53.3137L50.5 59.754M50.5 59.754L59.6508 53.2024M50.5 59.754L65.25 70.3143L59.6508 53.2024M59.6508 53.2024L74 42.9291H56.2893M59.6508 53.2024L56.2893 42.9291"
    const majorPentagram =
      "M40.0393 35.8581L51.5 2L62.5787 35.8581M40.0393 35.8581L33.0091 56.6273M40.0393 35.8581H62.5787M40.0393 35.8581H4L33.0091 56.6273M33.0091 56.6273L21.5 90.6286L51 69.5079M33.0091 56.6273L51 69.5079M51 69.5079L69.3017 56.4048M51 69.5079L80.5 90.6286L69.3017 56.4048M69.3017 56.4048L98 35.8581H62.5787M69.3017 56.4048L62.5787 35.8581"

    const minorHexagon = "M35.5 45.5L50.5 35.5L66.5 45.5L60 63.5H41L35.5 45.5Z"
    const majorHexagon =
      "M1 33.2581L49.3871 1L101 33.2581L80.0323 91.3226H18.7419L1 33.2581Z"
    const ultraHexagon =
      "M1 39.7097L59.0645 1L121 39.7097L95.8387 109.387H22.2903L1 39.7097Z"

    const timeline = anime.timeline({
      duration: 600,
      ease: "easeInOutSine",
      autoplay: true,
    })

    timeline.add({
      targets: [".earth"],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 600,
      direction: "normal",
    })

    timeline.add({
      targets: [".circle"],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 600,
      direction: "normal",
    })

    timeline.add({
      targets: [".major-hexagon", ".pentagram", ".hexagon"],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 600,
      delay: function (el, i) {
        return i * 600
      },
      direction: "normal",
    })

    timeline.add({
      targets: [".hexagon", ".pentagram"],
      easing: "easeInOutSine",
      delay: 300,
      d: function (el) {
        const isHexagon = el.classList.contains("hexagon")

        return isHexagon ? minorHexagon : minorPentagram
      },
      duration: 600,
      direction: "normal",
    })
  }, [])

  useEffect(() => {
    handleAnimation()
  }, [handleAnimation])

  return (
    <svg
      className="main-logo"
      width="101"
      height="101"
      viewBox="0 0 101 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleAnimation}
    >
      <path
        className="earth"
        d="M100 50.5C100 77.8381 77.8381 100 50.5 100C23.1619 100 1 77.8381 1 50.5C1 23.1619 23.1619 1 50.5 1C77.8381 1 100 23.1619 100 50.5Z"
        stroke={primary}
        strokeWidth="1.5"
      />
      <path
        className="circle"
        d="M98.5 43C98.5 56.531 87.531 67.5 74 67.5C60.469 67.5 49.5 56.531 49.5 43C49.5 29.469 60.469 18.5 74 18.5C87.531 18.5 98.5 29.469 98.5 43Z"
        stroke={secondary}
        strokeWidth="1.5"
      />
      <path
        className="circle"
        d="M51.5 43C51.5 56.531 40.531 67.5 27 67.5C13.469 67.5 2.5 56.531 2.5 43C2.5 29.469 13.469 18.5 27 18.5C40.531 18.5 51.5 29.469 51.5 43Z"
        stroke={secondary}
        strokeWidth="1.5"
      />
      <path
        className="circle"
        d="M60.5 70C60.5 83.531 49.531 94.5 36 94.5C22.469 94.5 11.5 83.531 11.5 70C11.5 56.469 22.469 45.5 36 45.5C49.531 45.5 60.5 56.469 60.5 70Z"
        stroke={secondary}
        strokeWidth="1.5"
      />
      <path
        className="circle"
        d="M89.5 70C89.5 83.531 78.531 94.5 65 94.5C51.469 94.5 40.5 83.531 40.5 70C40.5 56.469 51.469 45.5 65 45.5C78.531 45.5 89.5 56.469 89.5 70Z"
        stroke={secondary}
        strokeWidth="1.5"
      />
      <path
        className="circle"
        d="M75.5 26C75.5 39.531 64.531 50.5 51 50.5C37.469 50.5 26.5 39.531 26.5 26C26.5 12.469 37.469 1.5 51 1.5C64.531 1.5 75.5 12.469 75.5 26Z"
        stroke={secondary}
        strokeWidth="1.5"
      />
      <path
        className="pentagram"
        d="M40.0393 35.8581L51.5 2L62.5787 35.8581M40.0393 35.8581L33.0091 56.6273M40.0393 35.8581H62.5787M40.0393 35.8581H4L33.0091 56.6273M33.0091 56.6273L21.5 90.6286L51 69.5079M33.0091 56.6273L51 69.5079M51 69.5079L69.3017 56.4048M51 69.5079L80.5 90.6286L69.3017 56.4048M69.3017 56.4048L98 35.8581H62.5787M69.3017 56.4048L62.5787 35.8581"
        stroke={primary}
        strokeWidth="1.5"
      />
      <path
        className="major-hexagon"
        d="M12.5 63L27.5 18.5H74.5L88.5 63L50.5 90L12.5 63Z"
        stroke={primary}
        strokeWidth="1.5"
      />
      <path
        className="hexagon"
        d="M1 33.2581L49.3871 1L101 33.2581L80.0323 91.3226H18.7419L1 33.2581Z"
        stroke={primary}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default withTheme(Logo)
