import React from 'react'
import BookIcon from '@mui/icons-material/Book'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { NavLink } from 'react-router-dom'

import {
  MyContainer,
  Content,
  Text,
  Nav,
  LogIn,
  SignUp,
  Basket,
} from './styles'

const Header = () => (
  <MyContainer maxWidth="false" component="header">
    <Content maxWidth="xl" disableGutters={true}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Text component="div">
          Simple Books
          <BookIcon
            fontSize="inherit"
            style={{ bottom: -3, position: 'relative' }}
          />
        </Text>
      </NavLink>
      <Nav>
        <NavLink
          to="/basket"
          style={{ textDecoration: 'none' }}
        >
          <Basket>
            <ShoppingBasketIcon />
          </Basket>
        </NavLink>
        <NavLink
          to="/login"
          style={{ textDecoration: 'none' }}
        >
          <LogIn variant="outlined">Log In</LogIn>
        </NavLink>
        <NavLink
          to="/signup"
          style={{ textDecoration: 'none' }}
        >
          <SignUp variant="contained" color="secondary">
            Sign Up
          </SignUp>
        </NavLink>
      </Nav>
    </Content>
  </MyContainer>
)

export default Header
