import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

export const MyContainer = styled(Container)`
  margin: ${({ theme }) => theme.spacing(2)}px 0;
`

export const Content = styled(Container)`
  margin: ${({ theme }) => theme.spacing(4)}px;
`
