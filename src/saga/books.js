import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

import { getData } from '@/helpers'
import { setAuthorsAction, setBooksAction, setCategoriesAction, pendingBooksAction } from '@/actions'
import { GET_BOOKS_AUTHORS } from '@/constants'

function * getBooksAuthorsWorker () {
  try {
    yield put(pendingBooksAction())
    const books = yield getData('books')
    const authors = yield getData('authors')
    const categories = yield getData('categories')

    yield put(setAuthorsAction(authors))
    yield put(setCategoriesAction(categories))
    yield put(setBooksAction(books))
  } catch (error) {
    yield put()
  }
}

function * booksAuthorsWatcher () {
  yield takeLatest(GET_BOOKS_AUTHORS, getBooksAuthorsWorker)
}

export default booksAuthorsWatcher
