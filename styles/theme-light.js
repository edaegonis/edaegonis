import settings from "./settings"
import { colors } from "./colors"

const { primary, secondary } = colors

export const lightTheme = {
  color: {
    baseBackground: secondary[2],
    base: primary[2],
    special: primary[4],
    link: primary[4],
  },
  shader: secondary,
  logo: {
    primary: primary[0],
    secondary: primary[4],
  },
  ...settings,
}
