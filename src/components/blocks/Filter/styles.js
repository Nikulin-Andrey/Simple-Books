import { styled } from '@mui/material/styles'
import Slider from '@mui/material/Slider'
import {
  Paper,
  Typography,
  FormControl,
} from '@mui/material'

export const Title = styled(Typography)(({ theme }) => ({}))

export const Form = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))

export const Container = styled(Paper)(({ theme }) => ({
  minWidth: '15%',
  marginRight: theme.spacing(3),
  padding: theme.spacing(3),
  height: 'fit-content',
}))

export const CustomizedSlider = styled(Slider)(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '95%',
  }),
)
