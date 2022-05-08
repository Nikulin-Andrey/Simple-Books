import { styled } from '@mui/material/styles'
import {
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Stack,
  Chip,
} from '@mui/material'

export const Title = styled(Typography)(({ theme }) => ({}))

export const Author = styled(Typography)(
  ({ theme }) => ({}),
)

export const Description = styled(Typography)(
  ({ theme }) => ({
    margin: theme.spacing(2) + ' 0',
  }),
)

export const Categories = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
}))

export const Category = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginTop: theme.spacing(1),
  fontSize: 14,
  color: 'white',
  background: theme.colors.primary,
}))

export const Image = styled(CardMedia)(({ theme }) => ({
  width: 'auto',
  margin: 'auto',
  marginTop: theme.spacing(2),
}))

export const Bottom = styled(CardActions)(({ theme }) => ({
  dasplay: 'flex',
  justifyContent: 'space-between',
}))

export const Add = styled(IconButton)(({ theme }) => ({}))

export const Price = styled(Typography)(({ theme }) => ({
  margin: '0 ' + theme.spacing(2),
}))
