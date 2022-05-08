import React from 'react'

import BasicLayout from '@/components/layouts/Basic'
import LogIn from '@/components/blocks/LogIn'

import { Container } from './styles'

const LogInPages = () => (
  <BasicLayout>
    <Container>
      <LogIn />
    </Container>
  </BasicLayout>
)

export default LogInPages
