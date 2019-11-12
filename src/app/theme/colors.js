const palette = {
  black: '#202121',
  grayDark: '#6c7680',
  gray: '#e6eaea',
  grayLight: '#f4f7f6',
  white: '#ffffff',
  blue: '#172241',
  teal: '#4bc3c9',
  red: '#fd1015',
}

const scheme = {
  primary: palette.teal,
  primaryText: palette.blue,
  background: palette.grayLight,
  error: palette.red,
}

export default {
  ...palette,
  ...scheme,
}
