import { createReducer } from '@reduxjs/toolkit'

import {
  setUserAction,
  logOutUserAction,
  changeBasketAction,
} from '@/actions'

const initialState = {
  name: null,
  token: null,
  email: null,
  id: null,
  basket: [],
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

  builder.addCase(logOutUserAction, () => initialState)
})

export default userReducer
