import { styled } from '@mui/material/styles'
import { Box, TextField } from '@mui/material'

export const All = styled(Box)(({ theme }) => ({}))

export const Search = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
}))

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}))
