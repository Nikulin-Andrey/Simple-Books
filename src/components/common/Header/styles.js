import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const MyContainer = styled(Container)(
  ({ theme }) => ({
    padding: theme.spacing(4),
    background: theme.colors.primary,
  }),
)

export const Content = styled(Container)(({ theme }) => ({
  fontSize: theme.fonts.big,
  fontColor: 'while',
  display: 'flex',
  justifyContent: 'space-between',
}))

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.fonts.big,
  cursor: 'pointer',
  color: 'white',
}))

export const Nav = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

export const Basket = styled(IconButton)(({ theme }) => ({
  border: '1px solid rgba(255, 255, 255, 0.5)',
}))

export const LogIn = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(2),
  borderColor: 'white',
  ':hover': {
    borderColor: 'lightgray',
  },
}))

export const SignUp = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}))
