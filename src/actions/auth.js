import { createAction } from '@reduxjs/toolkit'

import { LOG_IN, SIGN_UP } from '@/constants'

export const logInAction = createAction(LOG_IN)
export const signUpAction = createAction(SIGN_UP)
