import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookIcon from '@mui/icons-material/Book'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { NavLink } from 'react-router-dom'

import { logOutUserAction } from '@/actions'
import {
  MyContainer,
  Content,
  Text,
  Nav,
  LogIn,
  SignUp,
  Basket,
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const onLogOut = () => {
    dispatch(logOutUserAction())
  }

  return (
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
          {user.id ? (
            <SignUp
              variant="contained"
              color="secondary"
              onClick={onLogOut}
            >
              выход
            </SignUp>
          ) : (
            <>
              <NavLink
                to="/login"
                style={{ textDecoration: 'none' }}
              >
                <LogIn variant="outlined">Вход</LogIn>
              </NavLink>
              <NavLink
                to="/signup"
                style={{ textDecoration: 'none' }}
              >
                <SignUp
                  variant="contained"
                  color="secondary"
                >
                  Регистрация
                </SignUp>
              </NavLink>
            </>
          )}
        </Nav>
      </Content>
    </MyContainer>
  )
}

export default Header
