import React from 'react'

import BasicLayout from '@/components/layouts/Basic'
import SignUp from '@/components/blocks/SignUp'

import { Container } from './styles'

const SignUpPage = () => (
  <BasicLayout>
    <Container>
      <SignUp />
    </Container>
  </BasicLayout>
)

export default SignUpPage
