import settings from "./settings"
import { colors } from "./colors"

const { primary, secondary } = colors

export const lightTheme = {
  color: {
    baseBackground: secondary.lighter,
    base: primary.default,
    special: primary.darker,
    link: primary.darker,
  },
  logo: {
    primary: primary.lighter,
    secondary: primary.darker,
  },
  ...settings,
}
