import React from 'react'

import Books from '@/components/blocks/Books'
import Filter from '@/components/blocks/Filter'
import BasicLayout from '@/components/layouts/Basic'

import { Container } from './styles'

const MainPage = () => (
  <BasicLayout>
    <Container>
      <Filter />
      <Books />
    </Container>
  </BasicLayout>
)

export default MainPage
