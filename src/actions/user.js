import { createAction } from '@reduxjs/toolkit'

import {
  SET_USER,
  LOG_OUT_USER,
  ADD_IN_BASKET,
  REMOVE_FROM_BASKET,
  CHANGE_BASKET,
  CREATE_ORDER,
  CHANGE_ORDERS,
  UPDATE_STATUS,
} from '@/constants'

export const setUserAction = createAction(SET_USER)
export const logOutUserAction = createAction(LOG_OUT_USER)
export const changeBasketAction = createAction(CHANGE_BASKET)
export const changeOrdersAction = createAction(CHANGE_ORDERS)
export const addInBasketAction = createAction(ADD_IN_BASKET)
export const createOrderAction = createAction(CREATE_ORDER)
export const removeFromBasketAction = createAction(
  REMOVE_FROM_BASKET,
)
export const updateStatusAction = createAction(UPDATE_STATUS)
