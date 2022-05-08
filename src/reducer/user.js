import { createReducer } from '@reduxjs/toolkit'

import { setUserAction, logOutUserAction } from '@/actions'

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

  builder.addCase(logOutUserAction, () => initialState)
})

export default userReducer
