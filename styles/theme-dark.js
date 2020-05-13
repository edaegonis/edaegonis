import settings from "./settings"
import { colors } from "./colors"

const { primary, secondary } = colors

export const darkTheme = {
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
