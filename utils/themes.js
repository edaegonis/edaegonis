import settings from "../styles/settings"
import { colors } from "../styles/default-palette"

const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateMonochromaticPalette = (paletteType = "primary") => {
  const monochromaticVariationsQuantity = 5

  const hue = getRandomNumber(360, 0)
  const saturation = getRandomNumber(100, 0)
  let lightness =
    paletteType === "primary"
      ? getRandomNumber(65, 0)
      : getRandomNumber(100, 85)

  let colors = []

  for (let i = 0; i < monochromaticVariationsQuantity; i++) {
    if (i !== 0) {
      lightness -= lightness > 10 ? 10 : 0
    }

    colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  }

  return colors
}

const getThemeFromColors = (colors) => {
  const theme = {
    colors,
    ...settings,
  }

  return theme
}

export const generateRandomTheme = (type = "dark") => {
  let colors

  switch (type) {
    case "dark":
      colors = {
        primary: generateMonochromaticPalette(),
        secondary: generateMonochromaticPalette("secondary"),
      }
      break

    default:
      colors = {
        primary: generateMonochromaticPalette("secondary"),
        secondary: generateMonochromaticPalette(),
      }
      break
  }

  const theme = getThemeFromColors(colors)

  return theme
}

export const getDefaultTheme = () => {
  const theme = getThemeFromColors(colors)

  return theme
}
