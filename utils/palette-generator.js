import settings from "../styles/settings"

const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const generateMonochromaticPalette = (paletteType = "primary") => {
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

export const getThemeFromColors = (colors) => {
  const { primary, secondary } = colors
  const theme = {
    color: {
      baseBackground: primary[2],
      base: secondary[2],
      special: secondary[0],
      link: secondary[0],
    },
    shader: primary,
    logo: {
      primary: secondary[0],
      secondary: secondary[4],
    },
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
