import { ImageStyle } from "react-native"

/**
 * All wallpaper will start off looking like this.
 */
const BASE: ImageStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  resizeMode: "stretch",
}

/**
 * All the variations of wallpaper styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default wallpaper styles.
   */
  stretch: BASE,
}

/**
 * A list of preset names.
 */
export type WallpaperPresets = keyof typeof presets