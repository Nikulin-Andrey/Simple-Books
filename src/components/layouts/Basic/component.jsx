import React from 'react'
import pt from 'prop-types'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

import { MyContainer, Content } from './styles'

const Basic = ({ children }) => (
  <MyContainer maxWidth="false" disableGutters={true}>
    <Header />
    <Content component="main" maxWidth="xl">
      {children}
    </Content>
    <Footer />
  </MyContainer>
)

Basic.propTypes = {
  children: pt.node,
}

export default Basic
