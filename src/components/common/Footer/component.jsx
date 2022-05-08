import React from 'react'
import { Link, Typography } from '@mui/material'
import { Container } from './styles'

const Footer = () => (
  <Container>
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Container>
)

export default Footer
