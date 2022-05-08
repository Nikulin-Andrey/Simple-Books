import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as ReactRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { getBooksAuthorsAction } from '@/actions'
import MainPage from '@/components/pages/MainPage'
import LogInPage from '@/components/pages/LogInPage'
import SignUpPage from '@/components/pages/SignUpPage'
import BasketPage from '@/components/pages/BasketPage'

const Router = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksAuthorsAction())
  }, [])

  return (
    <ReactRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={MainPage}
        />
        <Route
          path="/login"
          exact
          component={LogInPage}
        />
        <Route
          path="/signup"
          exact
          component={SignUpPage}
        />
        <Route
          path="/basket"
          exact
          component={BasketPage}
        />
      </Switch>
    </ReactRouter>
  )
}

export default Router
