import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  getDatabase,
  ref,
  onValue,
  query,
  orderByChild,
  limitToFirst,
} from 'firebase/database'

import { convertToArray } from '@/helpers'
import { setAuthorsAction, setBooksAction, setCategoriesAction, pendingBooksAction } from '@/actions'
import { GET_BOOKS_AUTHORS } from '@/constants'

const getData = dataName => new Promise(resolve => {
  const db = getDatabase()
  const booksRef = ref(db, dataName)
  // console.log(booksRef) dataName === 'books' ? query(ref(db, 'books'), orderByChild('title')) :
  onValue(booksRef, snapshot => {
    const data = snapshot.val()
    if (dataName === 'authors' || dataName === 'categories') {
      resolve(data)
    }
    const result = convertToArray(data)
    // console.log(result)
    resolve(result)
  })
})

function * getBooksAuthorsWorker () {
  try {
    yield put(pendingBooksAction())
    // const books2 = yield query(ref(getDatabase(), 'books/'), orderByChild('price'))
    const books = yield getData('books')
    // console.log(books2)
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
