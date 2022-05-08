import { styled } from '@mui/material/styles'
import { Chip, Box } from '@mui/material'

export const Status = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(1),
  fontSize: 14,
  color: 'white',
  background: theme.colors.primary,
}))

export const RightInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
}))
