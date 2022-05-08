import { all, fork } from 'redux-saga/effects'

import auth from './auth'
import books from './books'

function * root () {
  yield all([fork(auth), fork(books)])
}

export default root
