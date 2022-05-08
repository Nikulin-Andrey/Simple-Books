import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2) + ' 0',
  display: 'flex',
  justifyContent: 'space-between',
}))
