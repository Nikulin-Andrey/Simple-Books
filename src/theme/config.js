import { createTheme } from '@mui/material/styles'

const THEME_UNIT_SIZE = 8

const spacing = margins => THEME_UNIT_SIZE * margins

const config = createTheme({
  spacing,
  palette: {
    primary: {
      main: '#42bf8e',
      darker: '#009554',
    },
    secondary: {
      main: '#bf4274',
      darker: '#a93e6d',
    },
    tryatry: {
      main: '#42b3bf',
    },
  },
  colors: {
    background: '#ffffff',
    font: '#333333',
    primary: '#42bf8e',
    secondary: '#bf4274',
    secondaryDark: '#a93e6d',
    tryatry: '#42b3bf',
  },
  fonts: {
    big: spacing(4),
  },
  breakpoints: {
    desktop: {
      maxWidth: 1280,
    },
  },
})

export default config
