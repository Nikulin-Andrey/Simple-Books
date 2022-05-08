import { createAction } from '@reduxjs/toolkit'

import { SET_USER, LOG_OUT_USER } from '@/constants'

export const setUserAction = createAction(SET_USER)
export const logOutUserAction = createAction(LOG_OUT_USER)
