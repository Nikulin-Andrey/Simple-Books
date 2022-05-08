import { createAction } from '@reduxjs/toolkit'

import {
  SET_BOOKS,
  SET_AUTHORS,
  GET_BOOKS_AUTHORS,
  SET_CATEGORIES,
  SEARCH,
  SET_FILTERS,
  PENDING_BOOKS,
} from '@/constants'

export const setBooksAction = createAction(SET_BOOKS)
export const setAuthorsAction = createAction(SET_AUTHORS)
export const pendingBooksAction = createAction(PENDING_BOOKS)
export const setCategoriesAction =
  createAction(SET_CATEGORIES)
export const getBooksAuthorsAction = createAction(
  GET_BOOKS_AUTHORS,
)
export const searchAction = createAction(SEARCH)
export const setFilters = createAction(SET_FILTERS)
