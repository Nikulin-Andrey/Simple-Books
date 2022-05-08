import { createReducer } from '@reduxjs/toolkit'

import {
  setBooksAction,
  setAuthorsAction,
  setCategoriesAction,
  searchAction,
  setFilters,
  pendingBooksAction,
} from '@/actions'

const initialState = {
  books: [],
  pending: false,
  authors: {},
  categories: {},
  filters: {
    search: '',
    sorting: '',
    authors: [],
    categories: [],
    price: [0, 100],
  },
}

const booksReducer = createReducer(
  initialState,
  builder => {
    builder.addCase(pendingBooksAction, state => ({
      ...state,
      pending: true,
    }))

    builder.addCase(setBooksAction, (state, action) => ({
      ...state,
      pending: false,
      books: action.payload,
    }))

    builder.addCase(setAuthorsAction, (state, action) => ({
      ...state,
      authors: action.payload,
    }))

    builder.addCase(
      setCategoriesAction,
      (state, action) => ({
        ...state,
        categories: action.payload,
      }),
    )

    builder.addCase(searchAction, (state, action) => ({
      ...state,
      filters: {
        ...state.filters,
        search: action.payload,
      },
    }))

    builder.addCase(setFilters, (state, action) => ({
      ...state,
      filters: {
        ...state.filters,
        sorting: action.payload.sorting,
        authors: action.payload.authors,
        categories: action.payload.categories,
        price: action.payload.price,
      },
    }))
  },
)

export default booksReducer
