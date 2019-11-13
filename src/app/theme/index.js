import GlobalStyle from './global'
export { GlobalStyle }

const breakpoints = {
  mobile: 720,
}

const colors = {
  black: '#202121',
  grayDark: '#6c7680',
  gray: '#e6eaea',
  grayLight: '#f4f7f6',
  white: '#ffffff',
  blue: '#172241',
  teal: '#4bc3c9',
  red: '#dc3545',
}

const theme = {
  primary: colors.teal,
  primaryText: colors.blue,
  secondaryText: colors.grayDark,
  background: colors.grayLight,
  light: colors.white,
  error: colors.red,
}

export default {
  breakpoints,
  colors,
  ...theme,
}
