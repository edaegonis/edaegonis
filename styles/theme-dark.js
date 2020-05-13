import settings from "./settings"
import { colors } from "./colors"

const { primary, secondary } = colors

export const darkTheme = {
  color: {
    baseBackground: primary.lighter,
    base: secondary.default,
    special: secondary.lighter,
    link: secondary.lighter,
  },
  logo: {
    primary: secondary.lighter,
    secondary: secondary.darker,
  },
  ...settings,
}
