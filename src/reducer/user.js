import { createReducer } from '@reduxjs/toolkit'

import {
  setUserAction,
  logOutUserAction,
  changeBasketAction,
  changeOrdersAction,
} from '@/actions'

const initialState = {
  name: null,
  token: null,
  email: null,
  id: null,
  basket: [],
  orders: [],
  admin: false,
}

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUserAction, (state, action) => ({
    ...state,
    ...action.payload,
  }))

  builder.addCase(changeBasketAction, (state, action) => ({
    ...state,
    basket: action.payload,
  }))

  builder.addCase(changeOrdersAction, (state, action) => ({
    ...state,
    orders: action.payload,
  }))

  builder.addCase(logOutUserAction, () => initialState)
})

export default userReducer
