export enum GradientColor {
  blue = 'blue',
  purple = 'purple',
  darkPurple = 'darkPurple',
  darkBlue = 'darkBlue',
  cyan = 'cyan'
}

export interface GradientBackgroundProps {
  color: GradientColor
  class?: string
}
